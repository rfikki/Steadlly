/**
 * Created by lore on 05.05.15.
 */


var Steadlly = Steadlly || {
        _urlToContracts: '',
        _modules: '',
        /**
         * @param {String} URL Address to conf file
         * @param {Array|String} cNameToLoad Names of the contracts to load.
         * @param {Array|String} Modules to be loaded.
         */
        init: function (url, cNameToLoad, modules) {
            Steadlly._urlToContracts = url;
            Steadlly._modules = modules;
            Steadlly._contracts.load(cNameToLoad);
            Steadlly._loadModules(Steadlly._modules);
        },
        /**
         * @param {String} Name of the contract
         * @returns {Object} Web3 Object corresponding to the
         */
        get: function (name) {
            for (var contract in Steadlly._contracts._list) {
                if (Steadlly._contracts._list[contract].name === name) return Steadlly._contracts._list[contract].object;
            }
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
                        for (contract in data) {
                            if (contractsToLoad.indexOf(data[contract].name) != -1) {
                                //Steadlly._contracts._list.push({'name': contract.name,'object': web3.eth.contract(contract.address, contract.contractDescription)});
                                Steadlly._contracts._list.push({'name': data[contract].name, 'object': 5});
                            }
                        }
                    },
                    error: function (data) {
                        throw new Error("Conf file is unreachable:\n" + data.responseText)
                    }
                })

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
                    _skills: [],
                    _jobs: [],
                    /***
                     * Simple method which adds a value to a textbox
                     * @param value
                     * @param objectId
                     */
                    valueToInput: function (value, objectId) {
                        value = value.toString();
                        $('#objectId').val(value);
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
                            if (Steadlly.ui._skills.indexOf(experienceName) == -1) {
                                Steadlly.ui._skills.push('skillName');
                                return true;
                            }
                        } else if (parentName == "jobs") {
                            if (Steadlly.ui._jobs.indexOf(experienceName) == -1) {
                                Steadlly.ui._jobs.push('skillName');
                                return true;
                            }
                        } else {
                            throw new Error("Such experience type does not exist.");
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
                     *
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
                        localStorage.setItem('last_url', window.location.href);
                        window.location.href=url;
                    },
                    back : function(url){
                        window.location.href=localStorage.getItem('last_url');
                        localStorage.setItem('last_url', window.location.href);
                    }
                }

            }

        }
    }




$(document).ready(function(){

    Steadlly.init('Steadlly/conf/contracts.json', ['Steadlly'], ['ui','nav']);
    console.log(Steadlly.get('Steadlly'));


});