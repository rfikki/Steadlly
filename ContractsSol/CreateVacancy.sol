contract CreateVacancy
{
	
	struct SVacancy
	{
		
		bytes32 startDate;
		bytes32 endDate;
		bytes32 jobTitle;
		bytes32 hoursOfWork;
		bytes32 skills;
		bytes32 rules;
		bool valid;
		address company;
		
	}
	struct SApplicants
		{
			
			uint nrApplicants;
			
		}
	struct SApplicantAddress
		{
			address applicantaddr;
		}	
		

	uint nrVacancies;
	uint nrApplicants;

	mapping (uint => SVacancy) vacancies;
	mapping (uint => SApplicants) applicants;
	mapping (uint => SApplicantAddress) addreses;
	function newVacancy (bytes32 startDate, bytes32 endDate, bytes32 jobTitle,bytes32 hoursOfWork,bytes32 skills, bytes32 rules ) returns (uint vacancyID)
	{
		vacancyID = nrVacancies++;
		SVacancy v = vacancies[vacancyID];
		v.valid = true;
		v.startDate = startDate;
		v.endDate = endDate;
		v.jobTitle = jobTitle;
		v.hoursOfWork = hoursOfWork;
		v.skills = skills;
		v.rules = rules;
		v.company = msg.sender;


	}

	function ApplyForVacancy(uint vacancyID) 
	{	

		SApplicants a = applicants[vacancyID];
		a.nrApplicants++;
		SApplicantAddress b = addreses[a.nrApplicants-1];
		b.applicantaddr = msg.sender;
		

	}
	function showNrOfApplicants(uint vacancyID) constant returns(uint n){
		SApplicants a = applicants[vacancyID];
		n = a.nrApplicants;

	}
	function showApplicantsAddress(uint vacancyID,uint applicantID) constant returns (address q){
		SApplicants a = applicants[vacancyID];
		SApplicantAddress r = addreses[applicantID];
		q = r.applicantaddr;
	}
	
	function InvalidateVacancy(uint vacancyID)
	{
		SVacancy v = vacancies[vacancyID];

		if (msg.sender == v.company)
		{
			v.valid = false;
		}
	}

	function returnNrVacancies() constant returns(uint r){
		r = nrVacancies;
		
	}

	function returnVacancy(uint vacancyID) constant returns(address i,bytes32 w,bytes32 e,bytes32 r,bytes32 t,bytes32 y,bytes32 u,bool o){
		SVacancy v = vacancies[vacancyID];
		i = v.company;
		w = v.startDate;
		e = v.endDate;
		r = v.jobTitle;
		t = v.hoursOfWork;
		y = v.skills;
		u = v.rules;
		o = v.valid;
	}

}	
