const button = document.querySelector('button');


 button.addEventListener('click', function (e) {
 	const number = document.querySelector('input').value;
 	const xhr = new XMLHttpRequest();
 	xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);
 	
 	xhr.onload = function (){
 		if (this.status === 200) {
           const response = JSON.parse(this.responseText);
           console.log(response);
           let output = '';

           if (response.type === 'success') {

           	 console.log(response);
           	response.value.forEach(function (joke) {
           		output += `<li>${joke.joke}</li>`
           	});
           }else {
           	output += `<li>something went wrong</li>`
           }
           document.querySelector('.jokes').innerHTML = output;
 		}
 	}
 	xhr.send();
 e.preventDefault();


 });
 // function getJokes(e) {
 	
 // 	c