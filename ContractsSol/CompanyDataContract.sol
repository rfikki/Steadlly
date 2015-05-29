contract CompanyData
{
	struct SCompany
	{
		bytes32 companyName;
		address owner;
		uint KVKnr;
		uint phoneNumber;
		uint nrAdmins;
		bool verified;
		bytes32 creationDate;
	}

	struct SAdministration
	{
		address addrAdmin;

	}

	uint nrCompanies;
	mapping(address => SCompany) companies;
	mapping(uint => SAdministration) administrators;

	function createCompany(bytes32 cname,uint KVK,uint phone){

		nrCompanies++;
		SCompany c = companies[msg.sender];
		c.owner = msg.sender;
		c.companyName = cname;
		c.KVKnr = KVK;
		c.phoneNumber = phone;
		c.nrAdmins++;
		SAdministration a = administrators[c.nrAdmins-1];
		a.addrAdmin = msg.sender;
		c.verified = false;
	}


	function verifyCompany(address companyAddress, bytes32 creationDate){
		address oracle = 0x7bd8e81447b673b7182ea82a6346a8dbe3df7274;
		if(msg.sender == oracle){
			SCompany c = companies[companyAddress];
			c.verified = true;
			c.creationDate = creationDate;
		}

	}

	function addAdmin(address addr){
		
		SCompany c = companies[msg.sender];
		c.nrAdmins++;
		SAdministration a = administrators[c.nrAdmins-1];
		a.addrAdmin = addr;


	}

	function returnNrAdmins() constant returns (uint w){
		SCompany c = companies[msg.sender];
		w = c.nrAdmins;
	}

	function returnAdministrators(uint admID) constant returns (address adr){
		SCompany c = companies[msg.sender];
		SAdministration a = administrators[admID];
		adr = a.addrAdmin;
	}

	function returnCompany(address adr) constant returns (bytes32 name, address own,uint kvk,uint phone){
		SCompany c = companies[adr];
		name = c.companyName;
		own = c.owner;
		kvk = c.KVKnr;
		phone = c.phoneNumber;
	}

	function removeAdmin(uint adr) {
		SCompany c = companies[msg.sender];
		SAdministration a = administrators[adr];
		delete a.addrAdmin;
	}

	function returnOwnCompany() constant returns (bytes32 name, address own,uint kvk,uint phone){
		SCompany c = companies[msg.sender];
		name = c.companyName;
		own = c.owner;
		kvk = c.KVKnr;
		phone = c.phoneNumber;
	}
}