pragma solidity ^0.4.10;

contract Lottery{
    struct ticketHolder{
        address _holderAddress;
        uint _numTickets;
    }

    //----------Variables------------
    //Mapping of tickets issued to each address
    mapping (address => ticketHolder) public ticketHolders;
    address[] holders;

    address private winner;

    //Total number of tickets issued
    uint public ticketsIssued;

    //Total balance of the smart contract
    uint public contractBalance;

    //When the lottery started
    uint public lotteryStart;

    //Duration the lottery will be active for
    uint public lotteryDuration;

    //Flag that the lottery is now over
    bool public lotteryEnded;

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
        lotteryDuration = 24 hours;
    }

    //Award users tickets for eth, 1 finney = 1 ticket
    function buyTickets() external payable returns (bool success) {
        require(now < lotteryStart + lotteryDuration);
        ticketHolders[msg.sender]._numTickets = msg.value / 10 ^ 15;
        ticketsIssued += ticketHolders[msg.sender]._numTickets;
        holders.push(msg.sender);
        contractBalance += msg.value;
        TicketsBought(msg.sender, ticketHolders[msg.sender]._numTickets);
        return true;
    }
    
    //Fallback funtion - redirect to buyTickets
    function () payable{
        this.buyTickets();
    }

    //After winners have been declared and awarded, clear the arrays and reset the balances
    function resetLottery() returns (bool success){
        require(now > lotteryStart + lotteryDuration);
        lotteryEnded = false;
        lotteryStart = now;
        lotteryDuration = 24 hours;
        ResetLottery();
        return true;
    }

    //This will distribute the correct winnings to each winner
    function awardWinnings(address _winner) returns (bool success){
        require(now > lotteryStart + lotteryDuration);
        _winner.transfer(contractBalance);
        AwardWinnings(_winner, contractBalance);
        contractBalance = 0;
        resetLottery();
        return true;
    }

    //Generate the winners by random using tickets bought as weight
    function generateWinners() returns (uint winningTicket){
        require(now > lotteryStart + lotteryDuration);

        //Need to make this truly random - This is temp solution for testing
        uint rand_num = uint(block.blockhash(block.number - 1)) % ticketsIssued + 1 ;
        winner = ticketHolders[holders[rand_num]]._holderAddress;
        awardWinnings(winner);
        return rand_num;
    }
}