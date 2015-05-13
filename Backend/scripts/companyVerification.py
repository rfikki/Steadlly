# Checks company existence.

from bs4 import BeautifulSoup
from clockwork import clockwork
from random import randint
import requests
import HTMLParser

class CompanyValidation:

    def __init__(self):
        self.endpoints = {}
        self.endpoints['kvk'] = {}
        self.endpoints['kvk']['name'] = "http://overheid.io/api/kvk"
        self.endpoints['kvk']['key'] = "64ed7b98bdfadfc12bcce62e9fa5974c3462d64c7b0819dacebc07cce6eb4eba"
        self.endpoints['tel'] = {}
        self.endpoints['tel']['name'] = "http://www.detelefoongids.nl/"
        self.msgapi = "3f549395b8c5bca6520f342b774e5f0df8c71aed"
        # print "hello"

    # Starts the verification
    def start(self, kvk):
        # check kvk
        kvk = self.verifyKVK( str(kvk) +'/0000')
        # check the telephone book to find a telephone number
        tel = self.verifyTel(kvk['name'], kvk['street'], kvk['postcode'])
        # print type(tel)
        print tel

    def verifyKVK(self, kvk):
            headers = {"ovio-api-key": self.endpoints['kvk']['key']}
            r = requests.get((self.endpoints['kvk']['name'] + ("/"+ kvk)), headers=headers, verify=False)
            jsonReq = r.json()
            if 'error' in jsonReq:
                raise ValueError("The kvk number inserted was not found.")
            return {"name": jsonReq['handelsnaam'] ,"postcode": jsonReq['postcode'] , "street": jsonReq['straat'] }
        # print r.json()['straat']
        # ['rechtspersoon']
        # return {"kvk":}

    def verifyTel(self, name, street, postcode):
        try:
            siteGETRequest = (name + '/' + street + '-' + postcode + '/10-1/?forceSearchType=true&what=' + name + '&where=' + street + '+' + postcode)
            # print self.endpoints['tel']['name'] + siteGETRequest
            r = requests.get((self.endpoints['tel']['name'] + siteGETRequest), verify=False)
            parsed_html = BeautifulSoup(r.content)
            return parsed_html.body.find('div', attrs={'itemprop':'telephone'}).text.strip()
        except:
            return False
        # send a message
        return False


    def sendMessage(self, telephone):
        msg = "Welcome to Steadlly. Please insert the following code, to confirm the account: " + str(randint(0, 9999))
        api = clockwork.API(self.msgapi, from_name='Steadlly')
        message = clockwork.SMS(
            to = telephone,
            message = msg
            )
        response = api.send(message)
        if response.success:
            # print(response.id)
            return True
        else:
            raise('Something went wrong sending the message', 'response.error_code + response.error_description')
            return False

def main():
    k = CompanyValidation()
    k.start(5958830)

if __name__ == "__main__":
    main()
