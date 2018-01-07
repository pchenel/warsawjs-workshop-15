document.addEventListener('DOMContentLoaded', function () {
//zadeklarowanie obiektow (jest dwoch graczy i kazdy mam swoj kolor
    var fields = document.querySelectorAll('.board > div');
    var playerClasses = {
        'playerA': 'red',
        'playerB': 'blue'
    };
    var array
    var currentPlayer;
    var emptyFields;

    initGame();

    function initGame() {

//zaczynamy od graczaA
        currentPlayer = 'playerA';
        emptyFields = 9;

        fields.forEach(field => {
            field.addEventListener('click', fieldClickHandler);

    })
        ;
    }

    function fieldClickHandler() {
        //deklarujemy zmienna i ustalamy jej wartosc poczatkowoa
        var playerClass = playerClasses[currentPlayer];
        //dodajemy klase by kolor nam sie zmienil
        this.classList.add(playerClass);
        //tu mamy w skrocie instrukcje if switch
        currentPlayer = currentPlayer === 'playerA' ? 'playerB' : 'playerA';
        this.removeEventListener('click', fieldClickHandler);
        emptyFields -= 1;

        checkWinner();


    }

    function checkWinner() {
        var winning = [
            fields[0].className + fields[1].className + fields[2].className,
            fields[3].className + fields[4].className + fields[5].className,
            fields[6].className + fields[7].className + fields[8].className,
            fields[0].className + fields[3].className + fields[6].className,
            fields[1].className + fields[4].className + fields[7].className,
            fields[2].className + fields[5].className + fields[8].className,
            fields[0].className + fields[4].className + fields[8].className,
            fields[2].className + fields[4].className + fields[6].className
        ];


        if (winning.includes('redredred')) {
            alert('Game over. PlayerA win.');
        } else if
        (winning.includes ('blueblueblue')) {
            alert('Game over. PlayerB win.');
        } else if (emptyFields === 0) {
                alert('Game over. No one win.');
            }
        }


});

//instrukcja if switch - czyli jesli mam jednego gracza to zamieniam na drugiego a jesli mam drugiego to zmieniam na pierwszego)
// if (currentPlayer === PlayerA) {
//      currentPlayer = PlayerB;
//}
// if (currentPlayer === PlayerB) {
//      currentPlayer = PlayerA;
//}
//lub
// if (currentPlayer === PlayerB) {
//      currentPlayer = PlayerA;
//} else (currentPlayer = PlayerB);
//lub
//currentPlayer === 'playerA' ? currentPlayer = 'playerB' : currentPlayer = 'playerA'
//lub
//currentPlayer = currentPlayer === 'playerA' ? 'playerB' : 'playerA';









