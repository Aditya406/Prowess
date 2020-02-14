$(document).ready(function() {

	$('#reg').click(function() {
        		
		data: {
			username: $("#username").val();
			mobnum:$("#mobnum").val();
			mail:$("#mail").val();
			pwd:$("#pwd").val();
			addr1:$("#addr1").val();
			addr2:$("#addr2").val();
		}
                 var usernameReg=/^[a-zA-Z ]$/;
                 var mobnumReg=/^[0-9]$/;
                 var emailReg=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                 var pwdReg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;
                 var errors=false;
                if($('#username').val()==''){
                    $('#username').after('<span class="errors">missing name</span>');   
                    errors=true;
                }
                if($('#mobnum').val()==''){
                    $('#mobnum').after('<span class="errors">missing number</span>');
                    errors=true;
                }
                if($('#mail').val()==''){
                    $('#mail').after('<span class="errors">missing mail</span>');   
                    errors=true;
                }
                if($('#pwd').val()==''){
                    $('#pwd').after('<span class="errors">missing password</span>');
                    errors=true;    
                }
                if($('#addr1').val()==''){
                    $('#addr1').after('<span class="errors">missing address</span>');   
                    errors=true;
                }
                if($('#addr2').val()==''){
                    $('#addr2').after('<span class="errors">missing address</span>');
                    errors=true;    
                }
                //reset from values
                if(!errors){
                	$("#myForm")[0].reset();
                }
                $.ajax({
        			type: "POST",
        			url: 'addlogin',
    				cache:false,
    				 dataType: 'json',
    			    success: function (data) {
    			    	console.log('Successful');
                  }
                
                
    			});
                
            }); 
            
         
          /*  $("#edit").click(function(e) {
                
                e.preventDefault();
                
                 // call the get ajax call
               
                $.ajax({
                    url: "users",
                    type: "GET",
                    data: 'username='+$("#username").val(),
                    cache: false,
                    success: function (response) {
                    	console.log('Successful');
                        var json=JSON.parse(response)
                    	$("#username").val(json.username)
                    	$("#mobnum").val(json.mobnum)
                    	$("#mail").val(json.mail)
                    	$("#pwd").val(json.pwd)
                    	$("#addr1").val(json.addr1)
                    	$("#addr2").val(json.addr2)
                    }
                });

                });*/
           
            
            });