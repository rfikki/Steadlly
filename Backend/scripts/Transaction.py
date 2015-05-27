from subprocess import call
import pyjsonrpc
import time 


class Transaction:

	def __init__(self, sender):
		self.sender=sender
		# contract address to be updated each time
		# self.contractAddress= 0x9184e72a

	def _makeTransaction(self, ):
		
		# Add data as hex
		# t = "hello".encode("hex")
		# print t
		# print t.decode("hex") 
		companyAddress = companyAddress
		time = "0x"+ time.time().encode("hex")
		params = '[{ "from" : "%s", "to": "%s", "gas": "10000", "value": "0x9184e72a", "data" : "" }]' % self.sender, self.contractAddress,

	def transaction(self):
		http_client = pyjsonrpc.HttpClient(
    		url="http://localhost:8079",
    		username="Username",
    		password="Password"
		)



# 		
#
# web3.eth.transact({"recipient": "545fd95308230e9f0cf970b4cd8677bc1089e875", "value":"3","gas":"500", "gasprice": "1", "body": '5c352b49000000000000000000000000a48874c7a1a89c317c14b781120df369f9a38d93646673667364000000000000000000000000000000000000000000000000000066736466736400000000000000000000000000000000000000000000000000006673646673640000000000000000000000000000000000000000000000000000667364667300000000000000000000000000000000000000000000000000000066736466736466000000000000000000000000000000000000000000000000006673646673000000000000000000000000000000000000000000000000000000'}); 
# 		
# 		
# 
# 


# TODO Form a curl request 
# print call(["curl","",""])



# http_client = pyjsonrpc.HttpClient(
#     # url="http://example.com/jsonrpc",
#     url="http://localhost:8080",
#     username="Username",
#     password="Password"
# )
