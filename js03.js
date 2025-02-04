/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Madeline Puryear
      Date:   2/4/25
     Filename: js03.js
 */

// Days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

window.addEventListener("load", addWeekDays);

// FUnc to write weekday names int the calender
function addWeekDays() {
    let i = 0; // initial counter val

    //refrence the collection of heading cells
    let headingCells = document.getElementsByTagName("th");

    // write each of the 7 days into a heading cells
    while(1 < 7){
        headingCells[i].innerHTML = weekDays[i];

        // counter + 1
        i++;
    }
}

window.addEventListener("load", showGames);

//func to write game info in calenders
function showGames(){
    for (let i = 0; i < gameDates.length; i++){
        let gameInfo = "";

        //Open paragraph
        switch (gameResults[i]){
            case "W":
                gameInfo += "<p class='win'>";
                break;
            case "L":
                gameInfo += "<p class='lose'>";
                break;
            case "S":    
                gameInfo += "<p class='suspended'>";
                break;
            case "P":
                gameInfo += "<p class='postponed'>";
                break;
        }

        //Display the game location
        if (gameLocations[i] === "h"){
            gameInfo += "vs. ";
        }else if (gameLocations[i] === "a"){
            gameInfo += "@ ";
        }

        //Include the opponent
        gameInfo += gameOpponents[i] + "<br>";

        //Include the result and score
        gameInfo += gameResults[i] + ": ( "+ runsScored[i] + " -  "+ runsAllowed[i] +" ) ";

        // Display innings played for suspended, shortend or extraining games
        if (gameInnings[i] < 5){
            gameInfo += " [" + gameInnings[i] + "]***"
        } else if (gameInnings[i] < 9){
            gameInfo += " [" + gameInnings[i] + "]*"
        } else if (gameInnings[i] > 9){
            gameInfo += " [" + gameInnings[i] + "]"
        }

        //Close the paragraph
        gameInfo += "</p>";

        //Write the info into a table cell
        let tabelCell = document.getElementById(gameDates[i]);
        tabelCell.insertAdjacentHTML("beforeEnd", gameInfo)
    }
}