// sets the time in the header of the page
var now = moment().format("dddd, MMMM Do");
$("#currentDay").text(now);

// -------------------------------------------------------------------
$(document).ready(function(){
    // variables to use
    // .description
    // .time-block
    // .row
    // .hour
    // .past
    // .present
    // .future
    // .saveBtn
    // .saveBtn i:hover
    var schedulerContainer = $(".container")
    var workHours = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]
    // create timeblocks
    // make a for loop that iterates elements to build the timeblock structure
    for (var i=0; i<workHours.length; i++) {
        var timeblockRows = $("<div>");
        timeblockRows.addClass("row hour");
        schedulerContainer.append(timeblockRows);
    };

    // separate the rows into columns by selecting rows, appending 3 new elements to each row, adding bootstrap column classes to newly appended elements
    $(".row").append("<span class= 'col'>")
    $(".row").append("<span class= 'col-8'>")
    $(".row").append("<span class= 'col'>")

    // add times to blocks
    // use for loop to create column elements for time (or does jQuery automatically append to everything with the selected class/id?)
    // use for loop to iterate times into the time column

    // add text area for blocks
    // use for loop to create column elements for work tasks
    
    // add save button for each timeblock
    // add on click for the button 
    // when button clicked, save to local storage

    // use for loop/check jQuery to append icon and 

    // change color of timeblock based on time of day
    // if/else statement



})