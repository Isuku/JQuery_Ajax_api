
$(function(){

    var $orders = $('#list');
    $.ajax({
        type: 'GET',
        url: 'https://reqres.in/api/users?page=1',
        success: function(orders){
            $.each(orders.data, function(i, order){
                $orders.append('<p style="border: 4px solid #6b5b95;">'+ '<img src="' + order.avatar + '" height="30px" width="30px"/>' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + order.first_name + '&nbsp' + order.last_name + '<span style="position: absolute; left: 350px;">' + order.email + '</span>' + '<span style="position: absolute; right: 450px;">Developer</span>' + '<button style="background-color: green; position: absolute; right: 250px;">Activated</button>' + '<img src="images/set.jpg" style="position: absolute; left: 960px"/>'+ '<select style="position: absolute; right: 130px; border: 1px solid white;"><option></option><option></option><option></option><option></option></select>' + '</p>');
                
            });
        }
    });

    });

