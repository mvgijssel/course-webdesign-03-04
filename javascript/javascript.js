function swapStyleSheet(sheet) {
    document.getElementById("page-style").setAttribute("href", "stylesheets/" + sheet + ".css");
}

function validateForm() {
    var x = document.forms["login"]["email"].value;
    if (x==null || x=="") {
        alert("The email must be filled out");
        return false;
    }

    x = document.forms["login"]["password"].value;
    if (x==null || x=="") {
        alert("The password must be filled out");
        return false;
    }
}
