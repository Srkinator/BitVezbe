let request = $.ajax({
    url: 'http://api.tvmaze.com/schedule/?country=US',
    method: 'GET',
});

request.done(output => {
    console.log(output);

    output.forEach((e, i) => {

        if(!e.show.image) {
            return;
        }
        
        let divMain = $('<div>');
        let divText = $('<div>');
        let image = $('<img>');
        let title = $('<h4>');
        let link = $('<a>');

        //title
        title.text(e.show.name);

        //image
        let imageLink = e.show.image.medium;
        image.attr({
            'src': imageLink,
            'class' : 'card-img-top'
        });

        //button
        link.attr({
            'value': e.show.id,
            'href': '#',
            'class': 'btn btn-outline-primary'
        });
        link.text('More info');
        
        divText.attr('class', 'card-block');
        divMain.attr('class', 'card col-sm-12 col-md-6 col-lg-4');
        
        divText.append(title);
        divText.append(link);
        
        divMain.append(image);
        divMain.append(divText);

        $('.display').append(divMain);
    })
});

let delayTimer;


$(document).on('change keyup paste', '#searchMovie', function () {

    clearTimeout(delayTimer);
    delayTimer = setTimeout(renderSearch, 300);

});

function renderSearch() {
    let input = $('#searchMovie').val();

    let request = $.ajax({
        url: 'http://api.tvmaze.com/search/shows',
        method: 'GET',
        data: {
            q: input
        }
    });

    request.done(output => {

        $('.searchList').html('');
        console.log(output);

        output.forEach((e, i) => {
            let title = $('<li>');
            let link = $('<a>');
            let parag = $('<p>');

            parag.text(e.show.name);
            link.attr({
                'value': e.show.id,
                'href': '#'
            });
            link.append(parag);
            title.append(link);
            $('.searchList').append(title);
        })
    });
}


$(document).on('click', 'a', function () {
    var id = $(this).attr('value');

    localStorage.setItem('key', id);
    location.replace('single.html');
});


