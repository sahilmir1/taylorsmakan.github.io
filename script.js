var objPeople = [
	{   //Sahil
        name: "Sahil",
		username: "0332748",
		password: "12345"
	},
	{   //Scott
        name: "Scott",
		username: "0332522",
		password: "12345"
	},
	{   //DJ
        name: "DJ",
		username: "0331421",
		password: "12345"
	},
    {   //Jeshua
        name: "Jeshua",
		username: "0332748",
		password: "12345"
	},
    {   //Kishan
        name: "Kishan",
		username: "0331983",
		password: "12345"
	}

];

function getInfo() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
//			window.open('index.html','_self')
            document.getElementById('wordLog').textContent = "Welcome " + objPeople[i].name;
			return;
            
		}
	}
	alert("incorrect username or password");
}
