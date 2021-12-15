class visitor {
    constructor(id, firstName, lastName, address, city, state, zip, phone, email, google, friend, news, comments){
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.city = city
        this.state = state
        this.zip = zip
        this.phone = phone
        this.email = email
        this.google = google
        this.friend = friend
        this.news = news
        this.comments = comments
    }
    get fullName(){
        return this.firstName + " " + this.lastName
    }
    get fullAddress(){
        return this.address + "\n " + this.city + " " + this.state + " " + this.zip
    }
}
var visitors  = [
    new visitor(1, "John", "Brown", "1234 Neighbor Dr", "Provo", "UT", "84060", "8011234567", 
    "johnbrown@gmail.com", true, false, false, "notes"),
    new visitor(2, "Jack", "Brown", "5678 Neighbor Dr", "Provo", "UT", "84060", "8017654321", 
    "jackbrown@gmail.com", false, true, false, "notes"),
    new visitor(3, "Dave", "Bard", "453 Lily Dr", "Provo", "UT", "84060", "3853674567", 
    "davebard@gmail.com", false, false, true, "notes"),
    new visitor(4, "Harry", "Potter", "7812 Wizard St", "Provo", "UT", "84060", "4013846891", 
    "harrypotter@gmail.com", true, false, false, "notes"),
    new visitor(5, "Ron", "Weasley", "7845 Wizard St", "Provo", "UT", "84060", "2093521583", 
    "ronweasley@gmail.com", false, true, false, "notes")
];

function modelAddVisitor(visitor){
    visitors.push(visitor);
}
function modelDeleteVisitor(index){
    visitors.splice(index, 1);
}
function findVisitor(id){
    for(i = 0; i < visitors.length; i++){
        if(visitors[i].id == id) return visitors[i]
    }
}
function findVisitorIndex(id){
    for(i = 0; i < visitors.length; i++){
        if(visitors[i].id == id) return i
    }
}

function returnVisitors(){
    if(localStorage.getItem("visitors") != null){
        retrieveStorage();
        
    }
    else if(localStorage.getItem("visitors") == null){
        storeVisitors();
    }
    return visitors;
}

function storeVisitors(){
    localStorage.clear();
    localStorage.setItem("visitors", JSON.stringify(visitors));
}

function retrieveStorage(){
    visitors = JSON.parse(localStorage.getItem("visitors"));
}