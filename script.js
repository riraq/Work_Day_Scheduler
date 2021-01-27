// sets the time in the header of the page
var now = moment().format("dddd, MMMM Do");
var nowTime = moment().format("H")
$("#currentDay").text(now);
// console.log(nowTime)

// -------------------------------------------------------------------
$(document).ready(function(){
    var rowEl = $(".row")
    var spanEl = $("span")
    var textAreaEl = $("textarea")
    var buttonEl = $("button")

    spanEl.addClass("col hour")
    textAreaEl.addClass("col-8 textarea")
    buttonEl.addClass("col saveBtn fas fa-save")

    // change color of timeblock based on time of day
    // if/else statement
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
    buttonEl.on("click", function(){
        
        var buttonClickText = $(this).parent().children("textarea").val()
        var buttonClickId = $(this).parent().attr("data-value")
        
        localStorage.setItem(buttonClickId+"hour", buttonClickText)
    });

    // when page loads, look at local storage for each row to load
    textAreaEl.each(function(){
        
        var textInput = $(this)
        var storageReceive = (textInput.parent().attr("data-value") + "hour")

        if (textInput !== null){
            var storedSchedule = localStorage.getItem(storageReceive)
            textInput.text(storedSchedule)
        }
        else {
            return
        }

    })

})


