var $selectedInput=$("#name");
var $selectSend = $('#send');


var url ="https://api.github.com/search/users?q=";

$selectSend.on("click", function () {
    var req = $.ajax({
        url: url + $selectedInput.val(),
        method: "GET"

    

    });

    req.done(function (msg) {
        
        var $final = msg.items[0].html_url ;
        var $slika = msg.items[0].avatar_url;
        console.log($final);
        
       $('div').append($final);
       $('div').append($slika);
    });
});