function loadHome(){
    if(document.getElementById("contact").classList.contains("dnone") == false){
        document.getElementById("contact").classList.add("dnone");
        document.getElementById("showContact").classList.remove("active");
    }
    if(document.getElementById("info").classList.contains("dnone") == false){
        document.getElementById("info").classList.add("dnone");
        document.getElementById("showInfo").classList.remove("active");
    }
    document.getElementById("home").classList.remove("dnone");
    document.getElementById("showHome").classList.add("active");
}
function loadContact(){
    if(document.getElementById("home").classList.contains("dnone") == false){
        document.getElementById("home").classList.add("dnone");
        document.getElementById("showHome").classList.remove("active");
    }
    if(document.getElementById("info").classList.contains("dnone") == false){
        document.getElementById("info").classList.add("dnone");
        document.getElementById("showInfo").classList.remove("active");
    }
    document.getElementById("contact").classList.remove("dnone");
    document.getElementById("showContact").classList.add("active");
}
function loadInfo(){
    if(document.getElementById("contact").classList.contains("dnone") == false){
        document.getElementById("contact").classList.add("dnone");
        document.getElementById("showContact").classList.remove("active");
    }
    if(document.getElementById("home").classList.contains("dnone") == false){
        document.getElementById("home").classList.add("dnone");
        document.getElementById("showHome").classList.remove("active");
    }
    document.getElementById("info").classList.remove("dnone");
    document.getElementById("showInfo").classList.add("active");
}