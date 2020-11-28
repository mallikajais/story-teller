function submit1() {
		localStorage.setItem('animal1', document.getElementById('animal1').value);
		localStorage.setItem('animal2', document.getElementById('animal2').value);
		localStorage.setItem('dog', document.getElementById('dog').value);
		localStorage.setItem('number', document.getElementById('number').value);
		localStorage.setItem('speed', document.querySelector('select[name="speed"]').value);
		localStorage.setItem('yes1', document.querySelector('input[name="yes1"]:checked').value);
		localStorage.setItem('quote', document.getElementById('quote').value);
		localStorage.setItem('message', document.getElementById('message').value);
		localStorage.setItem('verb', document.getElementById('running').value);
		localStorage.setItem('adjective', document.getElementById('alarmed').value);
	}
		function submit2() {
			if (localStorage.length>0) {
			  var x, i;
			  x = document.querySelectorAll(".animal1");
			  for (i = 0; i < x.length; i++) {
			    x[i].innerHTML = localStorage.getItem('animal1');
			  }
			  var y, j;
			  y = document.querySelectorAll(".animal2");
			  for (j = 0; j < y.length; j++) {
			    y[j].innerHTML = localStorage.getItem('animal2');
			  }
			  var z, k;
			  z = document.querySelectorAll(".verb");
			  for (k = 0; k < z.length; k++) {
			    z[k].innerHTML =  localStorage.getItem('verb');
			  }
				document.getElementById('number').innerHTML=localStorage.getItem('number');
				document.getElementById('yes').innerHTML=localStorage.getItem('yes1');
				document.getElementById('dog').innerHTML=localStorage.getItem('dog');
				document.getElementById('quote').innerHTML=localStorage.getItem('quote');
				document.getElementById('speed').innerHTML=localStorage.getItem('speed');
				document.getElementById('alarmed').innerHTML=localStorage.getItem('adjective');
				document.getElementById('message').innerHTML=localStorage.getItem('message');
				document.getElementById('running').innerHTML=localStorage.getItem('verb');
				
			}
			localStorage.clear();
		}