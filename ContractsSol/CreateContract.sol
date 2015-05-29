contract CreateContract
{
	struct Company
	{
		address addr;
		bytes32 CompanyName;
	}
	struct SContract
	{
		address employee;
		bytes32 startDate;
		bytes32 endDate;
		bytes32 jobTitle;
		bytes32 hoursOfWork;
		bytes32 skills;
		bytes32 rules;
		bool signed;
		address owner;
		
		mapping (uint => Company) companies;
	}
	uint nrContracts;
	mapping (uint => SContract) contracts;
	function newContract (address employee,bytes32 startDate, bytes32 endDate, bytes32 jobTitle,bytes32 hoursOfWork,bytes32 skills, bytes32 rules ) returns (uint contractID)
	{
		contractID = nrContracts++;
		SContract c = contracts[contractID];

		c.employee = employee;
		c.signed = false;
		c.startDate = startDate;
		c.endDate = endDate;
		c.jobTitle = jobTitle;
		c.hoursOfWork = hoursOfWork;
		c.skills = skills;
		c.rules = rules;
		c.owner = msg.sender;

	}
	function SignContract(uint contractID)
	{
		SContract c = contracts[contractID];

		if (msg.sender == c.employee)
		{
			c.signed = true;
		}
	}
	
	function ChechContractStatus(uint contractID) constant returns (bool retVal) {
		SContract c = contracts[contractID];
        return c.signed;
    }


	function DestroyContract(uint contractID)
	{
		SContract c = contracts[contractID];
		if ( msg.sender == c.employee)
		{
			suicide(c.owner);
		}
		else if (msg.sender == c.owner)
		{
			suicide(c.employee);
		}

	}

	function returnNrContracts() constant returns(uint r){
		r = nrContracts;
		
	}

	function returnContract(uint contractID) constant returns(address q, bytes32 w,bytes32 e,bytes32 r,bytes32 t,bytes32 y,bytes32 u,address i,bool o){
		SContract c = contracts[contractID];
		q = c.employee;
		w = c.startDate;
		e = c.endDate;
		r = c.jobTitle;
		t = c.hoursOfWork;
		y = c.skills;
		u = c.rules;
		i = c.owner;
		o = c.signed;
	}
}