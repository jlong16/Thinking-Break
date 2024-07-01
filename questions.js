document.getElementById('allDone').addEventListener('click', function() {
  var response1 = document.getElementById('response1').value;
  var response2 = document.getElementById('response2').value;
  var response3 = document.getElementById('response3').value;

  // You can add code here to save these responses to storage or send to a server

  alert('Responses saved!');
  window.close();  // Close the tab
});
