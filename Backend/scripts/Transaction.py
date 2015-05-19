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
		




# TODO Form a curl request 
# print call(["curl","",""])



# http_client = pyjsonrpc.HttpClient(
#     # url="http://example.com/jsonrpc",
#     url="http://localhost:8080",
#     username="Username",
#     password="Password"
# )
