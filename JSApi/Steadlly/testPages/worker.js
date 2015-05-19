onmessage = function(e) {
  // console.log('Message received from main script');
  // var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  
  throw new Error('Posting message back to main script' + e );
  // postMessage(workerResult);
}