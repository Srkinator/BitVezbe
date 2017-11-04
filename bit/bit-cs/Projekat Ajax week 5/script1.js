$getIdInfo = localStorage.getItem('id');
let request = $.ajax({
    url: `http://api.tvmaze.com/shows/${$getIdInfo}`,
    method: "get",
    data: {
        embed: ['seasons', 'cast']
    }
});

request.done(function (message) {


    let showInfo = {
        name: message.name,
        image: message.image.medium,
        summary: message.summary
    };
    var $castContainer = $("<div  class= 'glumci'>");
    var $asdf = $("<h2>");
    $asdf.text("Cast : ");
    $castContainer.append($asdf);

    for (var i = 0; i < 6; i++) {
        var element = message._embedded.cast[i].character.name;
        var parag = $("<p>");
        var seriesCast = parag.text(element);
        $castContainer.append(seriesCast);

    };
    var $seasonContainer = $("<div  class= 'sezone'>");
    var $asdf1 = $("<h2>");
    $asdf1.text("Seasons : ");
    $seasonContainer.append($asdf1);

    for (var i = 0; i < message._embedded.seasons.length; i++) {
        var element = message._embedded.seasons[i].premiereDate;
        var parag = $("<p>");
        var seriesCast = parag.text(element);
        $seasonContainer.append(seriesCast);
    
    };


    let $itemImage1 = $("<img class = 'single1' src = '" + showInfo.image + "'>");
    let $itemName2 = `<h1> ${showInfo.name} </h1>`;
    let $itemName3 = `<p>  showInfo.cast </p>`;
    let $itemName4 = $("<p class ='summary'>" + showInfo.summary + "</p>");
    let $single = $('.summary');

    $single.append($itemName2);
    $single.append($itemImage1);
    $single.append($itemName4);
    $single.append($castContainer);
    $single.append($seasonContainer);


});