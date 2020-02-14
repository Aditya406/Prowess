$(document).ready(function() {

	$('#login').click(function() {
		$.ajax({
			type: "POST",
			url: 'login',
			data: {
				username: $("#username").val(),
				password: $("#password").val()
			},
			success: function(response)
			{
			var data=JSON.parse(response);
			if(data.success){
				$(".successdiv").empty();
				$('.successdiv').html(" Login successfully done ").css("color","green");
			}
			else{
				$(".successdiv").empty();
				$('.successdiv').html(" Login failed ").css("color","red");
			}
			}
		});
		return false;
	});

});