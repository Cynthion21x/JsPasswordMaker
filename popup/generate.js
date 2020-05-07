
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

				document.getElementById('pass_text').innerHTML = flipStr(password.join(""));

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

			function flipStr(aString) {
				aString = aString.toLowerCase();
				var last = aString.length - 1;
				var result = "";
				for (var i = last; i >= 0; --i) {
				result += flipmyChar(aString.charAt(i))
				}
				return result;
			}

			function flipmyChar(c) {
			if (c == 'a') {
				return 'u0250'
			}
			else if (c == 'b') {
				return 'q'
			}
			else if (c == 'c') {
				return 'u0254'
			}
			else if (c == 'd') {
				return 'p'
			}
			else if (c == 'e') {
				return 'u01DD'
			}
			else if (c == 'f') {
				return 'u025F'
			}
			else if (c == 'g') {
				return 'b'
			}
			else if (c == 'h') {
				return 'u0265'
			}
			else if (c == 'i') {
				return 'u0131'//'u0131u0323'
			}
			else if (c == 'j') {
				return 'u0638'
			}
			else if (c == 'k') {
				return 'u029E'
			}
			else if (c == 'l') {
				return 'u05DF'
			}
			else if (c == 'm') {
				return 'u026F'
			}
			else if (c == 'n') {
				return 'u'
			}
			else if (c == 'o') {
				return 'o'
			}
			else if (c == 'p') {
				return 'd'
			}
			else if (c == 'q') {
				return 'b'
			}
			else if (c == 'r') {
				return 'u0279'
			}
			else if (c == 's') {
				return 's'
			}
			else if (c == 't') {
				return 'u0287'
			}
			else if (c == 'u') {
				return 'n'
			}
			else if (c == 'v') {
				return 'u028C'
			}
			else if (c == 'w') {
				return 'u028D'
			}
			else if (c == 'x') {
				return 'x'
			}
			else if (c == 'y') {
				return 'u028E'
			}
			else if (c == 'z') {
				return 'z'
			}
			else if (c == '[') {
				return ']'
			}
			else if (c == ']') {
				return '['
			}
			else if (c == '(') {
				return ')'
			}
			else if (c == ')') {
				return '('
			}
			else if (c == '{') {
				return '}'
			}
			else if (c == '}') {
				return '{'
			}
			else if (c == '?') {
				return 'u00BF'
			}
			else if (c == 'u00BF') {
				return '?'
			}
			else if (c == '!') {
				return 'u00A1'
			}
			else if (c == "'") {
				return ','
			}
			else if (c == ',') {
				return "'"
			}
			else if (c == '.') {
				return 'u02D9'
			}
			else if (c == '_') {
				return 'u203E'
			}
			else if (c == ';') {
				return 'u061B'
			}
			else if (c == '9') {
				return '6'
			}
			else if (c == '6') {
				return '9'
			}
				return c;
			}
