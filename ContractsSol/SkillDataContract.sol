contract SkillDataContract
{
	struct SPerson
	{
		address adr;
		uint nrSkills;
	}
	struct SSkill
	{
		bytes32 skillName;
		address verifier;
	}
	
  
	


	mapping(address => SPerson) people;
	mapping(uint => SSkill) skills;

	function addSkilltoPerson(address addr,bytes32 skillname){

		
		SPerson p = people[addr];
		p.adr = addr;
		p.nrSkills++;
		SSkill s = skills[p.nrSkills-1];
		s.skillName = skillname;
		s.verifier = msg.sender;
		

		}

	function returnNrSkills(address addr) constant returns (uint n){
		SPerson p = people[addr];
		n = p.nrSkills; 

	}	

	function returnSkills(address addr,uint skillID) constant returns (bytes32 u, address w ){
		SPerson p = people[addr];
		SSkill s = skills[skillID];
		u = s.skillName;
		w = s.verifier;

	}
}	
