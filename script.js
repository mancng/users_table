
$(document).ready(function(){

    $('.btn').click(function(e){
        e.preventDefault();
        var first = $('#first_name').val();
        var last = $('#last_name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();

        var row = '<tr><td>'+first+'</td><td>'+last+'</td><td>'+email+'</td><td>'+phone+'</td></tr>';

        $('#target').append(row);
    });
});