
$('#login-form').submit(function(e){

	if(!loginValidation()) {
		e.preventDefault(); // abort submit

		// Run after return false on first validation
		$('#email').on('keyup', function(){
			let value = $(this).val();
			if(emailCheck(value)) setErrorMessage("", $('.email-input'));
		});

		$('#pass').on('keyup', function(){
			let value = $(this).val();
			if(passwordCheck(value)) setErrorMessage("", $('.pass-input'));
		});
	
	}
	else{
		alert('Log In Success!');
		window.location.reload;
	}
});

$('#regist-form').submit(function(e){

	if(!registerValidation()) {
		e.preventDefault(); // abort submit

		// Run after return false on first validation
		$('#name').on('keyup', function(){
			let value = $(this).val();
			if(nameCheck(value)) setErrorMessage("", $('.name-input'));
		});

		$('#email').on('keyup', function(){
			let value = $(this).val();
			if(emailCheck(value)) setErrorMessage("", $('.email-input'));
		});

		$('#pass').on('keyup', function(){
			let value = $(this).val();
			if(passwordCheck(value)) setErrorMessage("", $('.pass-input'));
		});

		$('#gen-female').on('change', function(){
			genderCheck();
		});

		$('#gen-male').on('change', function(){
			genderCheck();
		});

		$('#address').on('keyup', function(){
			let value = $(this).val();
			if(addressCheck(value)) setErrorMessage("", $('.addr-input'));
		});

		$('#city').on('change', function(){
			let value = $(this).val();
			if(cityCheck(value)) setErrorMessage("", $('.city-input'));
		});
	
	}
	else{
		alert('Register Success!');
		window.location.reload;
	}
});





function nameCheck(string){

	if(string.trim() == '') {
		setErrorMessage("Name must not be null.", $('.name-input'));
		return false;
	}else if(string.length < 8){
		setErrorMessage("Name must be 8 characters minimal", $('.name-input'));
		return false;
	}

	return true;
}
function emailCheck(string){
	var emailRegex = /.+\@.+\..+/;
	if(string.trim() == '') {
		setErrorMessage("Email must not be null.", $('.email-input'));
		return false;
	}else if(string.length < 5){
		setErrorMessage("Email must be 5 characters minimal", $('.email-input'));
		return false;
	}else if(!emailRegex.test(string)){
		setErrorMessage("Email not valid", $('.email-input'));
		return false;
	}

	return true;
}
function passwordCheck(string){
	if(string.trim() == '') {
		setErrorMessage("Password must not be null.", $('.pass-input'));
		return false;
	}else if(string.length < 8){
		setErrorMessage("Password must be 8 characters minimal", $('.pass-input'));
		return false;
	}
	return true;
}
function genderCheck(){
	if($('input[name=gender]:checked').length<=0) {
		setErrorMessage("Male of Female must be selected.", $('.gender-input'));
		return false;
	}else{
		setErrorMessage("", $('.gender-input'));
	}

	return true;
}
function addressCheck(string){
	if(string == "") {
		setErrorMessage("Address must not be null.", $('.addr-input'));
		return false;
	}else if(string.length < 16){
		setErrorMessage("Address must be 16 characters minimal", $('.addr-input'));
		return false;
	}
	return true;
}
function cityCheck(string){
	if(string == '') {
		setErrorMessage("City must be selected.", $('.city-input'));
		return false;
	}
	return true;
}

function setErrorMessage(text, objectClass){
	objectClass.html(text);
	return false;
}
function loginValidation(){
	let status = true;
	let email = $('#email').val();
	let pass = $('#pass').val();

	if(!emailCheck(email)) status = false;
	if(!passwordCheck(pass)) status = false;

	return status;
}

function registerValidation(){
	let status 	= true;
	let name	= $('#name').val();
	let email 	= $('#email').val();
	let pass 	= $('#pass').val();
	let male 	= $('#gen-male');
	let female 	= $('#gen-female');
	let address = $('#address').val();
	let city 	= $('#city').val();

	if(!nameCheck(name)) status = false;
	if(!emailCheck(email)) status = false;
	if(!passwordCheck(pass)) status = false;
	if(!genderCheck(male, female)) status = false;
	if(!addressCheck(address)) status = false;
	if(!cityCheck(city)) status = false;

	return status;
}



