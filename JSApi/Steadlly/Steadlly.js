/**
 * Created by lore on 05.05.15.
 */
var web3 = parent.web3;

var Steadlly = Steadlly || {
        _urlToContracts: '',
        _modules: '',
        /**
         * @param {String} URL Address to conf file
         * @param {Array|String} cNameToLoad Names of the contracts to load.
         * @param {Array|String} Modules to be loaded.
         */
        init: function (url, cNameToLoad, modules){
            Steadlly._urlToContracts = url;
            Steadlly._modules = modules;
            cNameToLoad.unshift("CompanyData");
            Steadlly._contracts.load(cNameToLoad);
            console.log(cNameToLoad)
            // if the user is logged as a company
            Steadlly._loadModules(Steadlly._modules);
        },
        /**
         * @param {String} Name of the contract
         * @returns {Object} Web3 Object corresponding to the
         */
        get: function (name) {
            for (var i = 0 ; i < Steadlly._contracts._list.length; i++) {
                // console.log(Steadlly._contracts._list[i].name);
                if (Steadlly._contracts._list[i].name === name) return Steadlly._contracts._list[i].object;
            }
            throw new Error("The contract was not loaded. Load it in.")
        },
        loadExperience: function(){
            //TODO if the work and experience contracts are loaded, then load in the data
            //returnNrSkills
            //returnSkills
            // Nr skills
            var sk = Steadlly.get("SkillDataContract");
            var skl = sk.returnNrSkills(Steadlly.account._address);
            var skl = skl.c[0]; // nr of skills

            for (var i =0; i < skl; i++){
                var skillName = sk.returnSkills(Steadlly.account._address, i);
                //TODO -> this could actually live on the client device so it will possible to make less request to the localstorage.
                Steadlly.account._skills.push(skillName);
            }
            return Steadlly.account._skills;
        },
        /**
         * The contracts are loaded directly from a json file.
         */
        _contracts: {
            _list: [],
            load: function (contractsToLoad) {
                contractsToLoad = contractsToLoad || [];
                $.ajax({
                    method: "GET",
                    url: Steadlly._urlToContracts,
                    async: false,
                    success: function (data) {
                        data = (JSON.parse(data));
                        for (var i = 0 ; i < data.contracts.length; i++) {
                            if (contractsToLoad.indexOf(data.contracts[i].name) != -1) {
                                // in order to parse a json only " are accepted
                                var arrayDesc = data.contracts[i].contractDescription.replace(/'/ig, "\"");
                                arrayDesc = JSON.parse(arrayDesc);
                                Steadlly._contracts._list.push({'name': data.contracts[i].name,'object': web3.eth.contract(data.contracts[i].address, arrayDesc)});
                            }
                        }
                        // Verifies whether the user has a company
                        Steadlly.account._company = Steadlly.account.verifyCompanyOwner();
                    },
                    error: function (data) {
                        throw new Error("Conf file is unreachable:\n" + data.responseText)
                    }
                })

            }
        },

        account: {
            _address: web3.eth.coinbase,
            // array of arrays index 0 is the name of the skill, index 1 is the verifier address
            _skills: [],
            _jobs: [],
            // False if he does not own a company.
            _company: false,

            verifyCompanyOwner: function(){
                var c = Steadlly.get('CompanyData');
                var t = c.returnOwnCompany();
                console.log(t);
                if(t[0] != ""){
                    return {name:t[0], kvk:t[2], tel:t[3]};
                }
                console.log("User '"+ Steadlly.account._address +"' does not own a company.")
                return false;

            }
        },
        /***
         * Loads the modules required
         * @param {Array|String}modules to load
         * @private
         */
        _loadModules: function (modules) {
            if (modules.indexOf('ui') != -1) {
                Steadlly.ui = {
                    _skills: ['bla'],
                    _jobs: [],
                    /***
                     * Simple method which adds a value to a textbox
                     * @param value
                     * @param objectId
                     */
                    valueToInput: function (value, objectId) {
                        var value = value.toString();
                        $('#objectId').val(value);
                    },
                    /***
                     *
                     */
                    displayExperience: function(){
                        for(var i = 0 ; i < Steadlly.account._skills.length; i ++ )
                        {
                            Steadlly.ui.addExperience(Steadlly.account._skills[i],"skills", null);
                        }

                        for(var i = 0 ; i < Steadlly.account._jobs.length; i ++ )
                        {
                            Steadlly.ui.addExperience(Steadlly.account._jobs[i],"jobs", null);
                        }
                    },
                    /***
                     * Adds a skill or job to the UI on the customization page.
                     * @param experienceName
                     * @param parentName -> either skills or jobs
                     * @param hiddenElement
                     * @returns {boolean}
                     */
                    addExperience: function (experienceName, parentName, hiddenElement) {
                        $(('.' + parentName)).append(('<span id="ex_' + experienceName + '">' + experienceName + '<button>X</button></span>'));
                        if (parentName == "skills") {
                            if (Steadlly.account._skills.indexOf(experienceName) == -1) {
                                Steadlly.account._skills.push('skillName');
                                return true;
                            }
                        } else if (parentName == "jobs") {
                            if (Steadlly.account._jobs.indexOf(experienceName) == -1) {
                                Steadlly.account._jobs.push('skillName');
                                return true;
                            }
                        } else {
                            throw new Error("Such experience type already exists.");
                        }
                        return false;
                    },
                    /***
                     * Remove a job or a skill and makes the element disappear.
                     * @param parentName
                     */
                    removeExperience: function (parentName, experienceName) {
                        if (parentName == "skills") {
                            Steadlly.ui._skills.splice(Steadlly.ui._skills.indexOf(experienceName), 1);
                        } else if (parentName == "jobs") {
                            Steadlly.ui._jobs.splice(Steadlly.ui._jobs.indexOf(experienceName), 1);
                        } else {
                            throw new Error("Such experience type does not exist.");
                        }
                        $('.display .' + parentName + '>#ex_' + experienceName).fadeOut();
                    },
                    /***
                     * Generates a json object to be sent to the blockchain
                     * @param {String} extra
                     */
                    genSkillsAndJobsObject: function (extra) {
                        var skills = '';
                        var jobs = '';
                        for (var i = 0; i < Steadlly.ui._skills.length; i++) {
                            skills += '"' + ( Steadlly.ui._skills[i] + ((i != Steadlly.ui._skills.length - 1) ? '",' : '"'));
                        }
                        for (var i = 0; i < Steadlly.ui._jobs.length; i++) {
                            skills += '"' + ( Steadlly.ui._jobs[i] + ((i != Steadlly.ui._jobs.length - 1) ? '",' : '"'));
                        }
                        var jsonObj = '{"skills":[' + skills + '], "jobs":[' + jobs + '], "extra":"' + extra + '"}';
                        return JSON.parse(jsonObj);
                    }

                };
            }
            if (modules.indexOf('nav') != -1) {

                Steadlly.nav = {
                    go: function (url){
                        window.location.href=url;
                    },
                    alert: function(msg){
                    	alert(msg);
                    },
                    promptDecision: function(msg,options){
                    	//TODO
                    }

                }

            }

            if (modules.indexOf('company')){
                Steadlly.company = {
                    getVacancies : function(alternativeAddress){
                        var contract = Steadlly.get('VacanciesContract');
                        var nrVacancies = contract.returnNrVacancies();
                        var vacanciesArray = [];
                        for(var i = 0; i < nrVacancies; i ++ ){
                            var addr = Steadlly.account._address;
                            // If no alternative address has been set then take the sender.
                            alternativeAddress ? addr = alternativeAddress : addr = addr;
                            if(contract.returnVacancy(i)[0] == addr){
                                var vacancy = {
                                    startDate: contract.returnVacancy(i)[1],
                                    endData : contract.returnVacancy(i)[2],
                                    jobTitle : contract.returnVacancy(i)[3],
                                    hoursOfWork : contract.returnVacancy(i)[4],
                                    skills : contract.returnVacancy(i)[5].split(" "),
                                    rules : contract.returnVacancy(i)[6],
                                    validity : contract.returnVacancy(i)[7]
                                }
                                vacanciesArray.push(vacancy);
                                console.log(vacanciesArray);
                            }

                        }

                        return vacanciesArray;


                    },
                    // TODO similar to the above, probably to be refactored.
                    getContracts : function(alternativeAddress){
                        var contract = Steadlly.get('ContractContract');
                        var nrContracts = contract.returnNrContracts();
                        var contractsArray = [];
                        for(var i = 0; i < nrContracts; i ++ ){
                            console.log(contract.returnContract(i));
                            if(contract.returnContract(i)[7] == Steadlly.account._address){
                                var vacancy = {
                                    employeeAdd: contract.returnContract(i)[0],
                                    startDate: contract.returnContract(i)[1],
                                    endData : contract.returnContract(i)[2],
                                    jobTitle : contract.returnContract(i)[3],
                                    hoursOfWork : contract.returnContract(i)[4],
                                    skills : contract.returnContract(i)[5].split(" "),
                                    rules : contract.returnContract(i)[6],
                                    validity : contract.returnContract(i)[8]
                                }
                                contractsArray.push(vacancy);
                            }
                        }
                    }
                }
            }

        }
    }




$(document).ready(function(){
    //Steadlly.init('../JSApi/Steadlly/conf/contracts.json', ["ContractContract","VacanciesContract",'SkillDataContract'], ['ui','nav','company']);
    //SkillDataContract = Steadlly.get('SkillDataContract');
    //var b = SkillDataContract.addSkilltoPerson('0x87ce4fd02db79bb0dde0b39e3f2b2b9f5396c310','Cooking');
    //console.log(b);
    //Steadlly.ui.addExperience('bla','skills','skill-value');
    //console.log(Steadlly.loadExperience());
    //var data = companyData.returnCompany("0xa48874c7a1a89c317c14b781120df369f9a38d93");


    //$('.head-text').click(function(){
    //
    //    Steadlly.company.getContracts();
    //    //console.log("click")
    //
    //});


    // EXAMPLE USAGE
    // -------------------------------------------------------------------------
    //v = companyData.returnCompany("0xa48874c7a1a89c317c14b781120df369f9a38d93");
    //console.log(v);
    //companyData.createCompany("Shit", "123213123", "312412541241");




});