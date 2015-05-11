contract CompanyData
{
	struct SCompany
	{
		string32 companyName;
		address owner;
		uint KVKnr;
		uint phoneNumber;
		uint nrAdmins;
	}

	struct SAdministration
	{
		address addrAdmin;

	}

	uint nrCompanies;
	mapping(address => SCompany) companies;
	mapping(uint => SAdministration) administrators;

	function createCompany(string32 cname,uint KVK,uint phone){

		nrCompanies++;
		SCompany c = companies[msg.sender];
		c.owner = msg.sender;
		c.companyName = cname;
		c.KVKnr = KVK;
		c.phoneNumber = phone;
		c.nrAdmins++;
		SAdministration a = administrators[c.nrAdmins-1];
		a.addrAdmin = msg.sender;


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

	function returnCompany(address adr) constant returns (string32 name, address own,uint kvk,uint phone){
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
}