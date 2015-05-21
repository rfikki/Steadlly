$(document).ready(function(){
    // Creates contract
    var contract = Steadlly.get("VacanciesContract");
    $('#createVacancy').submit(function( event ){
        var formName = "#createVacancy";

        var jobTitle = $(formName + " input[name='vacancy-title']").val();
        var startDate = 0 // TODO
        var endDate = 0 // TODO
        var houseOfWork = 0 // TODO
        var rules = $(formName + " input[name='vacancy-desc']").val();
        var skills = $(formName + " input[name='vacancy-offer']").val();
        // Creates the contract
        var id = contract.newVacancy(startDate, endDate, jobTitle, hoursOfWork, skills, rules);


        if(id){
            //TODO add the url
            Steadlly.nav.go();
        } else {

            event.preventDefault();
        }
    });
});