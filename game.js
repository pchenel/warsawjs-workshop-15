document.addEventListener('DOMContentLoaded', function () {
//zadeklarowanie obiektow (jest dwoch graczy i kazdy mam swoj kolor
    var playerClasses = {
        'playerA': 'red',
        'playerB': 'blue'
    };
    var currentPlayer;
    var emptyFields;

    initGame();
    function initGame() {
        var fields = document.querySelectorAll('.board > div');
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
        if (emptyFields === 0) {
            alert('Koniec gry. Wygral ' + currentPlayer);
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









