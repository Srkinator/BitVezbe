function cheat(string) {
    if (string === 'forward') {
         history.go(2);
    } else if (string === 'back') {
          history.go(-2);
    }
}

function greet() {
    alert('Hello!');

    var answer = prompt('How are you?');

    if (!answer) {
        return;
    }

    var agree = confirm('We will submit this answer now! ' + answer);

    if (agree) {
        alert('Success');
    } else if (!agree) {
        return;
    }

}

function selector() {
    document.getElementById('second').className = 'background';
}

function selector2() {
    var ar = document.querySelectorAll('ul li');

        for (var i = 0; i < ar.length; i++) {
             ar[i].className ='list-bg';
            
        }
}


function selector3() {
    var ar = document.querySelectorAll(" #third li ")
    for (var i = 0; i < ar.length; i++) {
        ar[i].className ='third-bg';
       
   }
}

function selector4() {
    var initial = document.getElementsByClassName('active')[0];
    initial.className = '';

    initial.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.className= 'active';

}