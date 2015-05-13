// Conf

$(document).ready(function() {

    Steadlly.init('../JSApi/Steadlly/conf/contracts.json', ["ContractContract","VacanciesContract",'SkillDataContract'], ['ui','nav','company']);

    // A contract should be retrieved. In that case the return type is of type object
    QUnit.test("getContract assert object type", function( assert ){
       assert.ok( typeof (Steadlly.get("ContractContract")) === 'object', "Passed");
    });



    // Tests for vacancy and contracts
    // Check whether Preslav account has at least one vacancy
    QUnit.test("Vacancy Assert retrieve > 1", function( assert ){
        assert.ok( Steadlly.company.getVacancies(0x87ce4fd02db79bb0dde0b39e3f2b2b9f5396c310).length > 1 , "Passed");
    });

    // Check whether my account has already one vacancy
    QUnit.test("Vacancy Assert retrieve None", function( assert ){
        assert.ok( Steadlly.company.getVacancies().length == 0 , "Passed");
    });


});