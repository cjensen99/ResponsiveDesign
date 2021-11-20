/*The main changes that I made to my original javascript code was refactoring and reorganizing.
Previously I had 3 bigger methods that were used to switch between the various screens of the
website. I refactored part of the code into 3 additional smaller helper functions that assist in
setting the display to none in the pages that should no longer be visible. The original three
functions now call the helper functions for easier readability to toggle between the various
screens. The code is now much easier to follow along than before. The last main change that I did
was switching to use the jquery objects to select elements in the html document rather than the
longer counterpart (ex. document.getElementById() etc.). I also added functions to clear/set
the form/account page that I created for this 5th project.
*/

//helper functions used to change the display of the main screen
function removeHomeScreen(){
    $("#showHome").removeClass("active");
    $("#home").addClass("dnone");
}
function removeContactScreen(){
    $("#showContact").removeClass("active");
    $("#contact").addClass("dnone");
}
function removeInfoScreen(){
    $("#showInfo").removeClass("active");
    $("#info").addClass("dnone");
}
function removeAccountScreen(){
    $("#form").hide();
}

/*these functions call the helper functions to erase the previous
  display and set the new one
*/
function loadHome(){
    removeContactScreen();
    removeInfoScreen();
    removeAccountScreen();

    //set home screen
    $("#showHome").addClass("active");
    $("#home").removeClass("dnone");
    $("#thankyou").hide();
}
function loadContact(){
    removeHomeScreen();
    removeInfoScreen();
    removeAccountScreen();
    
    //set contact screen
    $("#showContact").addClass("active");
    $("#contact").removeClass("dnone");
    $("#thankyou").hide();
}
function loadInfo(){
    removeHomeScreen();
    removeContactScreen();
    removeAccountScreen();

    //set info screen
    $("#showInfo").addClass("active");
    $("#info").removeClass("dnone");
    $("#thankyou").hide();
}
function createAccount(){
    removeHomeScreen();
    removeContactScreen();
    removeInfoScreen();
    
    $("#thankyou").hide();
    $("#form").show();
}


function toggleTheme() {
    var link = $("<link />",{
        rel: "stylesheet",
        type: "text/css",
        href: "css/darkTheme.css"
      })
    if($('link').eq(1).length){
        $('link').eq(1).remove();
    }
    else{
        $('head').append(link);
    }
 }