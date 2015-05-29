contract GeneralInfo
{
	function returnGenInfo() constant returns (address coinbase, uint bdifficulty, uint bgaslim, uint blockNr, uint timestamp,uint remGas, address sender)
	{
		coinbase = block.coinbase;
		bdifficulty = block.difficulty;
		bgaslim = block.gaslimit;
		blockNr = block.number;
		timestamp = block.timestamp;
		remGas = msg.gas;
		sender = msg.sender;
	}

}