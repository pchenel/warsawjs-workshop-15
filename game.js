document.addEventListener('DOMContentLoaded', function () {

    var playerA = 'Player A';
    var playerB = 'Player B';
    var playerAScores = 0;
    var playerBScores = 0;
    var fields = document.querySelectorAll('.board > div');
    var playerClasses = {
        'playerA': 'red',
        'playerB': 'blue'
    };

    var currentPlayer;
    var emptyFields;
    var titleInfo = document.querySelector('#title');
    initGame();
    ButtonReset ();




    function ButtonReset () {
        var btnReset = document.querySelector('.btnReset');
        btnReset.addEventListener("click", Reset);
    }

    function Reset () {
        playerAScores = 0;
        
        playerBScores = 0;
        playersScore();
    }

    function initGame() {


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

        var playerClass = playerClasses[currentPlayer];

        this.classList.add(playerClass);


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
            playerAScores += 1;
            playersScore();


        } else if
        (winning.includes ('blueblueblue')) {
            setTimeout(function(){
                alert('Game over. PlayerB win.');


                initGame()}, 100);
            playerBScores += 1;
            playersScore();
        } else if (emptyFields === 0) {
            setTimeout(function(){ alert('Game over. No one win.');

            initGame()}, 100);

            }

        }




    function playersScore () {
        var playerAElement = document.querySelector('#scores > .playerA');
        playerAElement.textContent = 'Player A score: ' + playerAScores;
        var playerBElement = document.querySelector('#scores > .playerB');
        playerBElement.textContent = 'Player B score: ' + playerBScores;
    }

});









