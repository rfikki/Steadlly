contract CreateContract
{
	struct Company
	{
		address addr;
		string32 CompanyName;
	}
	struct SContract
	{
		address employee;
		string32 startDate;
		string32 endDate;
		string32 jobTitle;
		string32 hoursOfWork;
		string32 skills;
		string32 rules;
		bool signed;
		address owner;
		
		mapping (uint => Company) companies;
	}
	uint nrContracts;
	mapping (uint => SContract) contracts;
	function newContract (address employee,string32 startDate, string32 endDate, string32 jobTitle,string32 hoursOfWork,string32 skills, string32 rules ) returns (uint contractID)
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

	function returnContract(uint contractID) constant returns(address q, string32 w,string32 e,string32 r,string32 t,string32 y,string32 u,address i,bool o){
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