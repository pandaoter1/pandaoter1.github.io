
var svar = "1234";

function registration(){
		var name = document.getElementById("t1").value;

		if(name== svar){
            window.location.href="style.html";
        }
        else{
            window.location.href="denied.html";
        }
}

function myFunction() {
    var x = document.getElementById("t1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

