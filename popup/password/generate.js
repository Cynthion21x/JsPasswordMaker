
			var userin;
			var text, password;


			var button = document. createElement("button");

			button.innerHTML = "Generate password!";

			button.addEventListener ("click", function() {


				userin = document.getElementById('keyword').value;

				var extraCharacters = ["1","2","3","4","5","6","7","8","9","0",";","!","$","]","#"];

				userinb = userin.split("");

				for (let a = 0; a < 3; a++) {
					userinb.push(extraCharacters[Math.floor(Math.random() * extraCharacters.length)]);
				}

				shuffle(userinb)

				password = userinb

				document.getElementById('pass_text').innerHTML = password.join("");

			});


			var body = document.getElementsByTagName("body")[0];
			body.appendChild(button);

			function shuffle(array) {
			  var currentIndex = array.length, temporaryValue, randomIndex;


			  while (0 !== currentIndex) {


			    randomIndex = Math.floor(Math.random() * currentIndex);
			    currentIndex -= 1;


			    temporaryValue = array[currentIndex];
			    array[currentIndex] = array[randomIndex];
			    array[randomIndex] = temporaryValue;
			  }

			  return array;
			}
