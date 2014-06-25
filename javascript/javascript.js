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

function setDate(id) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }

    today = dd+'/'+mm+'/'+yyyy;

    el = document.getElementById(id);
    el.innerHTML = today;
}
