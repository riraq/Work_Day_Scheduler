// sets the time in the header of the page
var now = moment().format("dddd, MMMM Do");
var nowTime = moment().format("H")
$("#currentDay").text(now);
console.log(nowTime)

// -------------------------------------------------------------------
$(document).ready(function(){
    var rowEl = $(".row")
    var spanEl = $("span")
    var textAreaEl = $("textarea")
    var buttonEl = $("button")

    spanEl.addClass("col hour")
    textAreaEl.addClass("col-8")
    buttonEl.addClass("col saveBtn fas fa-save")

    // change color of timeblock based on time of day
    // if/else statement
    console.log($("textarea")[0])
    console.log(parseInt(rowEl[5].dataset.value))

    rowEl.each(function(){
        
        var rowHour = parseInt(this.dataset.value)
        
        if (rowHour < nowTime){
        $(this).children("textarea").addClass("past")
        }
        else if (rowHour == nowTime) {
        $(this).children("textarea").addClass("present")
        }
        else {
        $(this).children("textarea").addClass("future")
        }
    })


    // add on click for the button 
    // when button clicked, save to local storage
    // when page loads, look at local storage for each row to load

})


