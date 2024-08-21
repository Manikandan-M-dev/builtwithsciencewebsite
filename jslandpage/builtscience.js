'use strict'
let successMsg = document.getElementById("successmsg");
var a = document.getElementById("supplesublist");
var x = document.getElementById("blogsublist");
let overBlocg = () => {
    if (x.style.display = "none") {
        x.style.display = "block";
    }
}
let hide = () => {
    if (x.style.display = "block") {
        x.style.display = "block";
    }
    else if (x.style.display != "block") {
        x.style.display = "none";
    }
}
let leavesub = () => {
    if (x.style.display = "block") {
        x.style.display = "none";
    }
}
let suppleOver = () => {
    if (a.style.display = "none") {
        a.style.display = "block";
    }

}

let suppleleave = () => {
    if (a.style.display = "block") {
        a.style.display = "none";
    }
}
let programslistnavbar = () => {
    document.getElementById("sublistnav1").style.display = "flex";
}

let programleave = () => {
    document.getElementById("sublistnav1").style.display = "none";
}

let navigateSignup = (event) => {
    event.preventDefault();
    window.location.href = "./loginpage.html";
}
let enrollnavigate = (event) => {
    event.preventDefault();
    window.location.href = "./signupbuilt.html";
}

// signupform

let signlogpage = (event) => {
    event.preventDefault();
    window.location.href = "./signupbuilt.html";
}

let signupmain = (event) => {
    event.preventDefault();
    let fname = document.getElementById("usernameinput").value.trim();
    let pass = document.getElementById("passwordinput").value.trim();
    let mailGet = document.getElementById("mailinput").value.trim();
    let valid = true;
    if (fname === '') {
        document.getElementById("error1").style.display = "block";
    }
    if (pass === '') {
        document.getElementById("error2").style.display = "block";
        document.getElementById("passerror").style.display = "none";

    }
    if (mailGet === '') {
        document.getElementById("error3").style.display = "block";
        document.getElementById("mailerror").style.display = "none";
    }
    if (mailGet !== "") {
        const validmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (validmail.test(mailGet)) {
            document.getElementById("mailerror").style.display = "none";
        } else {
            document.getElementById("mailerror").style.display = "block";
            document.getElementById("mailerror").innerHTML = "Invalid mailid";
            valid = false;
        }
    }
    if (pass !== "") {
        const validpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (validpass.test(pass)) {
            document.getElementById("passerror").style.display = "none";
        }
        else {
            document.getElementById("passerror").style.display = "block";
            document.getElementById("passerror").style.fontSize = "11px";
            valid = false;
        }
    }

    //apipost
    if (fname !== '' && pass !== '' && mailGet != '') {

        if (valid) {
            fetch("https://667011c30900b5f872494ed9.mockapi.io/users", {
                method: "POST",
                body: JSON.stringify({
                    name: fname,
                    email: mailGet,
                    password: pass
                }),
                headers: {
                    "content-type": "application/json;charset=UTF-8"
                }
            }).then((response) => response.json())
                .then((json) => console.log(json));
            setTimeout(() => {
                document.getElementById("error1").style.display = "none";
                document.getElementById("error2").style.display = "none";
                document.getElementById("error3").style.display = "none";
                document.getElementById("usernameinput").value = "";
                document.getElementById("passwordinput").value = "";
                document.getElementById("mailinput").value = "";
                successMsg.innerHTML = "Account Created Successfuly!" + "&nbsp;&nbsp;";
                successMsg.style.color = "green";
                window.location.href = "./sciencelogin.html";
            }, 1000)
        }
    }
}
let unameChange = (event) => {
    event.preventDefault();
    document.getElementById("error1").style.display = "none";

}
let passChange = (event) => {
    event.preventDefault();
    document.getElementById("error2").style.display = "none";
    document.getElementById("passerror").style.display = "none";
}
let mailChange = (event) => {
    event.preventDefault();
    document.getElementById("error3").style.display = "none";
    document.getElementById("mailerror").style.display = "none";
}
let mainLogin = (event) => {
    event.preventDefault();
    window.location.href = "./sciencelogin.html";
}

let loginUserMain = (event) => {
    event.preventDefault();
    let maillogin = document.getElementById("inputloginmail").value.trim().toLowerCase();
    let passlogin = document.getElementById("inputloginpass").value.trim();
    let rememberme = document.getElementById("usercheckbox");
    // GET METHOD
    
    let getUrl2 = fetch("https://667011c30900b5f872494ed9.mockapi.io/users");

    getUrl2.then(response => response.json())

        .then(data => {
            let userfound = false;
            if (maillogin !== "" && passlogin !== "" ) {
                data.forEach(user => {
                    if (maillogin.toLowerCase() === user.email.toLowerCase() && passlogin === user.password) {
                        userfound=true;
                        window.location.href = "./index.html";
                    }
                });
                if (!userfound) {
                    document.getElementById("invalidmsglogin").style.display="block";
                }
            }
        })
    

    document.getElementById("error4").style.display = "none";
    document.getElementById("error5").style.display = "none";
    if (maillogin === '') {
        document.getElementById("error4").style.display = "block";
    }
    if (passlogin === '') {
        document.getElementById("error5").style.display = "block";
    }

    if (!rememberme.checked) {
        document.getElementById("invalidmsglogin").style.display="none";
    }
}
let mailChangelogin = (event) => {
    event.preventDefault();
    document.getElementById("error4").style.display = "none";
    document.getElementById("invalidmsglogin").style.display="none";

}
let logpassChange = () => {
    document.getElementById("error5").style.display = "none";
    document.getElementById("invalidmsglogin").style.display="none";
}

function toggleSignupMenu() {
    const nav = document.querySelector('.subloginnav');
    nav.classList.toggle('show');
}