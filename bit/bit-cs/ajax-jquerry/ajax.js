


var adresa = $('#ip');

var $selectSend = $('#send');
var $result = $('#result');
var url = "https://freegeoip.net/xml/";


$selectSend.on("click", function () {
    var req = $.ajax({
        url: url + adresa.val(),
        method: "GET"
    });

    req.done(function (msg) {
        var $final = $(msg).find('CountryName');

        $('div').append($final);
    });


});







































