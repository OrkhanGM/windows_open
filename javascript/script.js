var background = document.querySelector(".background");
var login = document.querySelector(".login");
var loginreply = document.querySelector(".loginreply");
var inpuarea = document.querySelector(".inpuarea");
var icon = document.querySelector(".inpuarea>i");
var input = document.querySelector(".inpuarea>input");
var loginreply = document.querySelector(".loginreply");
var btntry = document.querySelector(".try");
var time = document.querySelector(".time");
var date = document.querySelector(".date");



// --------------------------ALL EVENTS 

// CLICKDE LOGIN OLAN HISSENIN ACILMAGI
background.addEventListener("click", function () {
    background.style.height = "0vh";
    login.style.height = "100vh";
});
// HER BIR KEYDOWNDA LOGIN OLAN HISSENIN ACILMAGI
window.addEventListener("keydown", function(e){
    background.style.height = "0vh";
    login.style.height = "100vh";
});
// PASSWORD-U YAZANDAN SONRA DAXIL OLMAQ UCHUN ICON
icon.addEventListener("click", function () {
    parswordcontrol();
    input.value = "";
});
// PASSWORD-U YAZANDAN SONRA ENTER ILE DAXIL OLMAQ UCHUN 
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        parswordcontrol();
        input.value = "";
    }
});
// PASSWORD SEHV YAZILANDAN SONRA TRY AGAIN HISSESINDEKI OK BUTTONU
btntry.addEventListener("click", function () {
    loginreply.style.visibility = "hidden";
    loginreply.style.opacity = "0";
    inpuarea.style.display = "flex";
    input.value = "";
});
// PASSWORD SEHV YAZILANDAN SONRA TRY AGAIN HISSESINDEKI OK BUTTONUNA ENTER ILE CLICKLEMEK
window.addEventListener("keyup", function(event) {
    if(inpuarea.style.display = "flex"){
        if (event.keyCode === 13) {
            loginreply.style.visibility = "hidden";
            loginreply.style.opacity = "0";
            inpuarea.style.display = "flex";
            input.value = "";
        }
    }
});



// --------------------------ALL FUNCTIONS 

// PASSWORD CONTROL FUNCTION
function parswordcontrol() {
    if (input.value == "1234") {
        login.style.height = "0vh";
    }
    else {
        loginreply.style.visibility = "visible";
        loginreply.style.opacity = "1";
        inpuarea.style.display = "none";
    }
}

// TIME AND DATE -I EKRANA YAZDIQMAQ 
setInterval(function () {
    time.innerHTML = getTime();
    date.innerHTML = getDate();
}, 100);

// TIME-IN YAZILISHI
function getTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();

    if (hour.toString().length == 1) {
        var hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        var minute = '0' + minute;
    }

    var dateTime = hour + ':' + minute;
    return dateTime;
}

// DATE-IN YAZILISHI
function getDate() {
    var now = new Date();
    (function() {
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
        Date.prototype.getMonthName = function() {
            return months[ this.getMonth() ];
        };
        Date.prototype.getDayName = function() {
            return days[ this.getDay() ];
        };
    })();
        
    var week = now.getDayName();
    var month = now.getMonthName();
    var day = now.getUTCDate();
    var all = week + " . "+ month + "  " + day;
    return all;
}