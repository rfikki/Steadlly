contract SkillDataContract
{
	struct SPerson
	{
		address adr;
		uint nrSkills;
	}
	struct SSkill
	{
		string32 skillName;
	}
	
  
	


	mapping(address => SPerson) people;
	mapping(uint => SSkill) skills;

	function addSkilltoPerson(address addr,string32 skillname){

		
		SPerson p = people[addr];
		p.adr = addr;
		p.nrSkills++;
		SSkill s = skills[p.nrSkills-1];
		s.skillName = skillname;
		

		}

	function returnNrSkills(address addr) constant returns (uint n){
		SPerson p = people[addr];
		n = p.nrSkills; 

	}	

	function returnSkills(address addr,uint skillID) constant returns (string32 u ){
		SPerson p = people[addr];
		SSkill s = skills[skillID];
		u = s.skillName;

	}
}