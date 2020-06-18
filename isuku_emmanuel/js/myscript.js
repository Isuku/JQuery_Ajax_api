
function myFirstFunction(){
	document.getElementById('firstAlert').innerHTML = "";
}

function mySecondFunction(){
	document.getElementById('secondAlert').innerHTML = "";
}

function myThirdFunction(){
	document.getElementById('firstAlert').innerHTML = "";
}

function myFourthFunction(){
	document.getElementById('secondAlert').innerHTML = "";
}

$(window).on('load', function () {
  $("img").hide(0.00001);
    $("img").show(2000);
});

$(window).on('load', function () {
  $("#textForm").hide(0.00001);
    $("#textForm").show(1000);
});

$(window).on('load', function () {
  $("#form").hide(0.00001);
    $("#form").show(1500);
});

$(document).ready(function () {
            $("#login").submit( (e) => {            
                $.ajax({
                    type: 'POST',
                    url: 'https://reqres.in/api/login',
                    data: {
                        email: $('#firstForm').val(),
                        password: $('#secondForm').val()
                    },
                    success: (data) => {
                        console.log(data);
                        window.location.replace('team.html');
                    },
                    error: ({responseJSON}, textStatus, error) => {
                        console.log(responseJSON.error);
                        // alert(responseJSON.error);
                    }
                });                              
                return false;
            })
        })

$(document).ajaxError(function() { 

   $('#firstForm').css('border', '1px solid red');
   $('#secondForm').css('border', '1px solid red');
   document.getElementById('firstAlert').innerHTML = "Invalid login credentials";
});


