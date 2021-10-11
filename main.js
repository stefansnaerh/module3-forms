// target all classes and id from the HTML with these functions
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes)

// store the classes and id´s from the HTML 

let firstName = id("firstName"),
lastName = id("lastName"),
email = id("email"),
phone = id("phone"),
numberOfGuests = id("numberOfGuests"),
pickDate = id("pickDate"),
pickTime = id("pickTime"),


successIcon = classes("successIcon"),
errorIcon = classes("errorIcon"),
error = classes("error");



// here i add an event listener so the page doesn't refresh automatically refresh when submit button is pressed
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    // calling the engine function

    engine(firstName, 0, "First name can not be blank!")
    engine(lastName, 1, "Last name can not be blank!")
    engine(email, 2, "Email can not be blank!")
    engine(phone, 3, "Phone number can not be blank!")
    engine(numberOfGuests, 4, "You have to select a number of guests!")
    engine(pickDate, 5, "You have to pick a date!")
});

// Creating a function (engine) that will validate the form
let engine = (id, serial, message) => {

    if (id.value.trim() === "") {
        error[serial].innerHTML = message;
        id.style.border = "2px solid #B50000";
        id.style.backgroundColor = "#F0CCCC"

        // success and error icon
        errorIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";

    }

    else {
        error[serial].innerHTML = "";
        id.style.border = "2px solid #009B19";
        id.style.backgroundColor = "#CCEBD1"
        // success and error icon
        errorIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";

    }
}



