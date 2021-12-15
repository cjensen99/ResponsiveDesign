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

function removeVisitorScreen(){
    $("#visitorList").hide();
    $("#elementList").remove();
    $("#showVisitors").removeClass("active");
}

/*these functions call the helper functions to erase the previous
  display and set the new one
*/
function loadHome(){
    removeContactScreen();
    removeInfoScreen();
    removeAccountScreen();
    removeVisitorScreen();

    //set home screen
    $("#showHome").addClass("active");
    $("#home").removeClass("dnone");
    $("#thankyou").hide();
}

function loadContact(){
    removeHomeScreen();
    removeInfoScreen();
    removeAccountScreen();
    removeVisitorScreen();
    
    //set contact screen
    $("#showContact").addClass("active");
    $("#contact").removeClass("dnone");
    $("#thankyou").hide();
}

function loadInfo(){
    removeHomeScreen();
    removeContactScreen();
    removeAccountScreen();
    removeVisitorScreen();

    //set info screen
    $("#showInfo").addClass("active");
    $("#info").removeClass("dnone");
    $("#thankyou").hide();
}

function createAccount(){
    removeHomeScreen();
    removeContactScreen();
    removeInfoScreen();
    removeVisitorScreen();
    clearAccountForm();
    
    $("#thankyou").hide();
    $("#form").show();
    $("#updateVisitorButtons").hide();
    $("#formButtons").show();
}

function loadVisitors(){
    let visitorList = returnVisitors();
    removeHomeScreen();
    removeContactScreen();
    removeInfoScreen();
    removeAccountScreen();
    $("#elementList").remove();

    $("#showVisitors").addClass("active");
    $("#thankyou").hide();
    $("#visitorList").show();
    renderTable($("tableContainer"), visitorList);
}

//following 3 functions for the regular submit new visitor
function giveCancelOptions(){
    console.log("0");
    $("#formButtons").hide();
    $("#updateBtnCancel").hide();
    $("#cancelButtons").show();
}

function cancelForm(){
    clearAccountForm();
    loadVisitors();
    dontCancel();
}

function dontCancel(){
    $("#formButtons").show();
    $("#cancelButtons").hide();
}

//following 3 functions for the update visitor page
function cancelOps(){
    // console.log("1");
    // $("#updateVisitorButtons").hide();
    // $("#cancelButtons1").show();
    // loadVisitors();
    $("#form").show();
    // $("#updateBtnCancel").show();
}

// function cancelForm1(){
//     clearAccountForm();
//     loadVisitors();
//     dontCancel1();
// }

// function dontCancel1(){
//     $("#updateVisitorButtons").show();
//     $("#cancelButtons1").hide();
// }

function toggleTheme() {
    var link = $("<link />",{
        rel: "stylesheet",
        type: "text/css",
        href: "css/darkTheme.css"
      })
    if($('link').eq(2).length){
        $('link').eq(2).remove();
    }
    else{
        $('head').append(link);
    }
}
 
function submitForm() {
    let validity = returnFormValidity();
    console.log(validity);
    if(formIsValid){
        addVisitor();
        loadVisitors();
    }
    else{
        console.log("not valid");
    }
}
var visitorIndex = 0;
//when user clicks edit, this is called to show the form with visitor info to be edited
//opens up the update button instead of regular submit
function showEditPage(index){
    visitorIndex = index;
    createAccount();
    $("#formButtons").hide();
    $("#updateVisitorButtons").show();
    let visitorList = returnVisitors();
    let myVis = visitorList[index];
    fillAccountForm(myVis);
}

function updateVisitor(){
    //delete old visitor first
    modelDeleteVisitor(visitorIndex);
    //then call submitForm()
    submitForm();
}

//called by submitForm, this function does not change display, only adds new visitor
function addVisitor() {
    let first = $("#first-name").val();
    let last = $("#last-name").val();
    let address = $("#address").val();
    let city = $("#city").val();
    let state = $("#state").val();
    let zip = $("#zip").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let google = $("#google").val();
    let friend = $("#friend").val();
    let news = $("#newspaper").val();
    let comments = $("#comments").val();

    //create new visitor from form information
    let newVisitor = new visitor(1, first, last, address, city, state, zip,
    phone, email, google, friend, news, comments);
    modelAddVisitor(newVisitor);
    storeVisitors();
}
 
function deleteVisitor(index) {
   modelDeleteVisitor(index);
   removeVisitorScreen();
   storeVisitors();
   loadVisitors();
}

function clearAccountForm(){
    let first = $("#first-name").val("");
    let last = $("#last-name").val("");
    let address = $("#address").val("");
    let city = $("#city").val("");
    let state = $("#state").val("");
    let zip = $("#zip").val("");
    let phone = $("#phone").val("");
    let email = $("#email").val("");
    let google = $("#google").prop("checked", false);
    let friend = $("#friend").prop("checked", false);
    let news = $("#newspaper").prop("checked", false);
    let comments = $("#comments").val("");
}

function fillAccountForm(visitor){
    let first = $("#first-name").val(visitor.firstName);
    let last = $("#last-name").val(visitor.lastName);
    let address = $("#address").val(visitor.address);
    let city = $("#city").val(visitor.city);
    let state = $("#state").val(visitor.state);
    let zip = $("#zip").val(visitor.zip);
    let phone = $("#phone").val(visitor.phone);
    let email = $("#email").val(visitor.email);
    let google = $("#google").prop("checked", visitor.google);
    let friend = $("#friend").prop("checked", visitor.friend);
    let news = $("#newspaper").prop("checked", visitor.news);
    let comments = $("#comments").val(visitor.comments);
}

//  $(document).ready(function(){
//     
// });