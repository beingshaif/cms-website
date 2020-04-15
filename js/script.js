	// USERS CREDENTIALS
var users=[
	{
		name:'Saif',
		username:'beingshaif',
		password:'pass1234',
	},
	{
		name:'Junaid',
		username:'junaidpen',
		password:'junaid1234',
	},
	{
		name:'Guryash',
		username:'guryashzone',
		password:'guryash1234',
	}		
];


$(document).on("click","#loginBtn",function(){
	
	// FETCH CREDENTIALS
	var username=$("#username").val();
	var password=$("#password").val();

	// CHECK CREDENTIALS
	if (username == '' )
	{
		$(".my-modal-text").text("Please Enter a valid Username..!!! ");
		$(".my-modal").show();
		return;
	}
	if (password == '' )
	{
		$(".my-modal-text").text("Please Enter a valid Password..!!!");
		$(".my-modal").show();
		return;
	}

	var counter=0;
	for (var i = 0; i <users.length; i++){

		if(users[i].username == username && users[i].password == password){
			$(".my-modal-text").text("Welcome " + users[i].name + " ! You have been Successfully Logged In.!!" );
			$(".my-modal").show();
			$(".logged-user").text(users[i].name);
			$("logged-user").addClass("active");
			counter=1;
			break;
		}
	}
	if(counter == 0){

		$(".my-modal-text").text("Invalid Credentials..!! Please try again..!!");
		$(".my-modal").show();
	}

});

	// HIDE MODAL
$(document).on("click",".close-my-modal",function(){

	$(".my-modal").hide();
});

	// TOGGLE PASSWORD BUTTON
$(document).on("click","#togglePassword",function(){

	if($("#password").attr("type") == "password"){

		$("#password").attr("type" , "text");
	}
	else{

		$("#password").attr("type" , "password");
	}

	$("#togglePassword span").toggleClass("fa-eye fa-eye-slash");
});	
