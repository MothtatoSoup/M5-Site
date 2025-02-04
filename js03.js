/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: 
     Date:   

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