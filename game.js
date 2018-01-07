document.addEventListener('DOMContentLoaded', function () {


    var playerAScores = 0;
    var playerBScores = 0;
    var fields = document.querySelectorAll('.board > div');
    var playerClasses = {
        'playerA': 'red',
        'playerB': 'blue'
    };
    var playerName = {
        playerA: 'Player A',
        playerB: 'Player B'
    };

    var currentPlayer;
    var emptyFields;
    var titleInfo = document.querySelector('#title');
    var btnRenameA = document.querySelector('.btnRenameA');
    var btnRenameB = document.querySelector('.btnRenameB');
    initGame();
    ButtonReset();
    ButtonRename();

    function ButtonRename () {

        btnRenameA.addEventListener('click', RenamePlayerA);
        var btnRenameB = document.querySelector('.btnRenameB');
        btnRenameB.addEventListener('click', RenamePlayerB);

    }

    function RenamePlayerA () {
        var newNameA = prompt('Please, enter new name', 'New name A');
        playerName.playerA = newNameA;
        titleInfo.textContent = 'Now round for ' + playerName[currentPlayer];
        btnRenameA.textContent = 'Rename ' + playerName.playerA;
        playersScore();
        ButtonRename();


    }
    function RenamePlayerB () {
        var newNameB = prompt('Please, enter new name', 'New name B');
        playerName.playerB = newNameB;
        titleInfo.textContent = 'Now round for ' + playerName[currentPlayer];
        btnRenameB.textContent = 'Rename ' + playerName.playerB;
        playersScore();
        ButtonRename();
    }







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
        titleInfo.textContent = 'Now round for ' + playerName[currentPlayer];
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
        titleInfo.textContent = 'Now round for ' + playerName[currentPlayer];



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
            setTimeout(function(){
                alert('Game over. ' + playerName.playerA + ' win.');


                initGame()}, 100);
            playerAScores += 1;
            playersScore();


        } else if
        (winning.includes ('blueblueblue')) {
            setTimeout(function(){
                alert('Game over. ' + playerName.playerB + ' win.');


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
        playerAElement.textContent = playerName.playerA + ' score: ' + playerAScores;
        var playerBElement = document.querySelector('#scores > .playerB');
        playerBElement.textContent = playerName.playerB + ' score: ' + playerBScores;
    }

});









