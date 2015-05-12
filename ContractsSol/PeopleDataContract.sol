contract PeopleData
{

	struct SPerson 
	{

		address addr;
		uint phoneNr;

	}

	uint nrPeople;
	mapping(address => SPerson) people;

	function addPerson(uint telephone){

		nrPeople++;
		SPerson p = people[msg.sender];
		p.addr = msg.sender;
		p.phoneNr = telephone;
	}

	function returnPerson(address adr) constant returns (address _adr, uint telephone){

		SPerson p = people[adr];
		_adr = p.addr;
		telephone = p.phoneNr;
	}

	function returnCurrentPerson() constant returns (address _adr, uint telephone){

		SPerson p = people[msg.sender];
		_adr = p.addr;
		telephone = p.phoneNr;
	}

	function returnNrPeople() constant returns (uint n){

		n = nrPeople;
	}

	function returnCurrentAddressOnly() constant returns (address _adr){
		_adr = msg.sender;
	}



}