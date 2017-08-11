pragma solidity ^0.4.4;

contract Lottery{

    //----------Variables------------
    struct ticketHolder{
        address ticketHolderAddress;
        uint ticketHolderOwnedTickets;
    }

    //Mapping of tickets issued to each address
    mapping (uint => ticketHolder) public tickets;
    address private winner;

    //Total number of tickets issued
    uint public ticketsIssued;

    //Total balance of the smart contract
    uint public contractBalance;

    uint public gasCost;

    //When the lottery started
    uint private lotteryStart;

    //Duration the lottery will be active for
    uint private lotteryDuration;

    //Flag that the lottery is now over
    bool private lotteryEnded = false;

    //----------Events---------------
    //Event for when tickets are bought
    event TicketsBought(address indexed _from, uint _quantity);

    //Event for declaring the winner
    event AwardWinnings(address _to, uint _winnings);

    //Event for lottery reset
    event ResetLottery();

    //---------Functions----------------
    
    //Create the lottery, each one lasts for 24 hours
    function Lottery(){
        ticketsIssued = 0;
        lotteryStart = now;
        lotteryDuration = 24 * hours;
    }

    //Fallback funtion - redirect to buyTickets
    function(){
        buyTickets();
    }

    //Award users tickets for eth
    function buyTickets() external returns (bool success) payable {
        require(now < lotteryStart + lotteryDuration);
        if (msg.value < gasCost) return false;
        tickets[msg.sender] = msg.value * 500;
        ticketsIssued += tickets[msg.sender];
        contractBalance += msg.value;
        TicketsBought(msg.sender, tickets[msg.sender]);
        return true;
    }

    //After winners have been declared and awarded, clear the arrays and reset the balances
    function resetLottery() returns (bool success){
        this.lotteryEnded = false;
        this.lotteryStart = now;
        ResetLottery();
    }

    //This will distribute the correct winnings to each winner
    function awardWinnings(address _winner) returns (bool success){
        require(now >= this.lotteryStart + this.lotteryDuration);
        _winner.send(contractBalance);
        contractBalance = 0;
        resetLottery();
    }

    //Generate the winners by random using tickets bought as weight
    function generateWinners() returns (uint winningTicket){
        require(now >= this.lotteryStart + this.lotteryDuration);
        //Need to make this truly random - This is temp solution for testing
        unt rand_num = uint(block.blockhash(block.number - 1) % ticketsIssued + 1 );
        winner =  tickets[rand_num].ticketHolderAddress;
        awardWinnings(winner);
    }
}