function getMyIpHttp() {
  var request = new XMLHttpRequest();
  
  // Open a new connection, using GET request on the URL endpoint
  // Asincronas

  request.onload = function (resp) {
    console.log(resp.target.response);
    console.log(JSON.parse(resp.target.response));
  }

  //request.open('GET', 'https://api.ipify.org?format=json', true);
  
  request.open('GET', 'https://randomuser.me/api/?results=1', true);

  request.send();
  

}


function getMyIpFetch() {
  // create request object

  var request = new Request('https://randomuser.me/api/?results=10',
     {
       method : 'GET',
       headers: new Headers({ 'Content-Type': 'application/json'})
     });
 
  // Now use it

  fetch(request)
  .then(function(data) {   // si hay exito
     console.log('data');
     console.log(data);
     data.json()
     .then(function(myjson) {
       console.log('results =');
       console.log(myjson);
     });

  })
  .catch(err => {  // en caso de error
     console.log(err);
  });
  

}


function getMyIp() {
  $.getJSON("https://api.ipify.org?format=json",
    function(json) {
       console.log(json);
       $('#resultado').text(JSON.stringify(json));
     }
  );
}


function getMyData(randomNumber) {
  $.getJSON("https://randomuser.me/api/?results="+randomNumber,
    function(json) {
      console.log(json.results);
      $('#resultado').text(JSON.stringify(json.results));
    }
  );
}
