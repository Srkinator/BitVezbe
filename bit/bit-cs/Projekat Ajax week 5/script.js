let request = $.ajax({
    url: "http://api.tvmaze.com/shows",
    method: "get"

});

// $(".container-fluid").hmtl = " ";

request.done(function (message) {

    let showInfo = {

        name: "",
        image: "",
        url: ""

    };

    for (let i = 200; i < message.length; i++) {

        showInfo = {
            name: message[i].name,
            image: message[i].image.medium,
            url: message[i].url,
            id: message[i].id
        };

        let $itemContainer = $('<div class = " item col-sm-6 col-lg-4"> </div>');
        let $itemImage = $("<img src = '" + showInfo.image + "'>" + "<br>" + "<br>");
        let $itemName = $("<a  class = 'linkovi' href = '" + "single.html" + "' target='_blank'>" + showInfo.name + "</a>").attr('id', showInfo.id);
        let $main = $('.row');



        $itemContainer.append($itemImage);
        $itemContainer.append($itemName);
        $main.append($itemContainer);

    };
});
let getIdInfo = "";
let idInfo = "";

$(document).on("click", "a", function (e) {

    let final = $(this).attr('id');
    idInfo = localStorage.setItem('id', final);
    $getIdInfo = localStorage.getItem('id');


});


let searchElement = document.querySelector('.search');
let searchValue = searchElement.value;

$('.search').on('keydown', function (event) {
    if (event.keyCode == 13) {
        
        event.preventDefault();



        let input = $('.search').val();
        console.log(event);

        let search = $.ajax({
            url: "http://api.tvmaze.com/search/shows",
            method: "GET",
            data: {
                q: input
            }
        });

        search.done(output => {
            $('.searchList').html('');
            console.log("asdf", output);

            output.forEach((element, i) => {
                let tittle = $('<li>');
                let link = $('<a>');

                link.text(element.show.name);
                link.attr({
                    'value': element.show.id,
                    'href': '#'
                });

                tittle.append(link);
                $('.searchList').append(tittle);
                location.replace('single.html');

            });
        });

    }
});














