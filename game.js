document.addEventListener('DOMContentLoaded', function () {
//zadeklarowanie obiektow (jest dwoch graczy i kazdy mam swoj kolor
    var playerA = 'Player A';
    var playerB = 'Player B';
    var fields = document.querySelectorAll('.board > div');
    var playerClasses = {
        'playerA': 'red',
        'playerB': 'blue'
    };
    var array
    var currentPlayer;
    var emptyFields;
    var titleInfo = document.querySelector('#title');
    initGame();

    function initGame() {

//zaczynamy od graczaA
        currentPlayer = 'playerA';
        emptyFields = 9;
        titleInfo.classList = playerClasses[currentPlayer];
        titleInfo.textContent = 'Now round for ' + currentPlayer;
        fields.forEach(field => {
            field.addEventListener('click', fieldClickHandler);
        });

        fields.forEach(field => {
            field.classList.remove('red', 'blue');

    });
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
        titleInfo.classList = playerClasses[currentPlayer];
        titleInfo.textContent = 'Now round for ' + currentPlayer;



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
            setTimeout(function(){ alert('Game over. PlayerA win.');
                initGame()}, 100);


        } else if
        (winning.includes ('blueblueblue')) {
            setTimeout(function(){
                alert('Game over. PlayerB win.');
                initGame()}, 100);
        } else if (emptyFields === 0) {
            setTimeout(function(){ alert('Game over. No one win.');
            initGame()}, 100);
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









