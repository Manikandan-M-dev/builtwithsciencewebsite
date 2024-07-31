'user strict'

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
    window.location.href = "http://127.0.0.1:5500/loginpage.html";
}


// signupform

let signlogpage = (event) => {
    event.preventDefault();
    window.location.href = "http://127.0.0.1:5500/signupbuilt.html";
}

let signupmain = (event) => {
    event.preventDefault();
    let fname = document.getElementById("usernameinput").value;
    let pass = document.getElementById("passwordinput").value;
    let mailGet = document.getElementById("mailinput").value;
    //apipost
    if(fname!==''&&pass!==''&&mailGet!=''){
        
    // apipost
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
    window.location.href = "http://127.0.0.1:5500/sciencelogin.html";
    }, 1000)
}
   
    if (fname === '') {
        document.getElementById("error1").style.display = "block";
    }
    if (pass === '') {
        document.getElementById("error2").style.display = "block";
    }
    if (mailGet === '') {
        document.getElementById("error3").style.display = "block";
    }
}
let unameChange = (event) => {
    event.preventDefault();
    document.getElementById("error1").style.display = "none";

}
let passChange = (event) => {
    event.preventDefault();
    document.getElementById("error2").style.display = "none";
}
let mailChange = (event) => {
    event.preventDefault();
    document.getElementById("error3").style.display = "none";

}
let mainLogin = (event) => {
    event.preventDefault();
    window.location.href = "http://127.0.0.1:5500/sciencelogin.html";
}

let loginUserMain = (event) => {
    event.preventDefault();
    let maillogin = document.getElementById("inputloginmail").value;
    let passlogin = document.getElementById("inputloginpass").value;

    // GET METHOD

    let getUrl2 = fetch("https://667011c30900b5f872494ed9.mockapi.io/users");

    getUrl2.then(response => response.json())

        .then(data => {
            if (maillogin != "" && passlogin != "") {
                data.forEach(user => {
                    if (maillogin === user.email && passlogin === user.password) {
                        console.log("hi");
                        console.log(user.name);
                        window.location.href = "Builtwithscience.html";
                        document.getElementById("invalidmsg").style.display = "none";
                    }
                    else if(maillogin != user.email && passlogin != user.password){
                        document.getElementById("invalidmsg").style.display = "block";
                    }
                })
            }
        })

    document.getElementById("error4").style.display = "none";
    document.getElementById("error5").style.display = "none";
    if (maillogin === '') {
        document.getElementById("error4").style.display = "block";
        document.getElementById("invalidmsg").style.display = "none";
    }
    if (passlogin === '') {
        document.getElementById("error5").style.display = "block";
        document.getElementById("invalidmsg").style.display = "none";
    }

}
let mailChangelogin = (event) => {
    event.preventDefault();
    document.getElementById("error4").style.display = "none";
}
let logpassChange = (event) => {
    event.preventDefault();
    document.getElementById("error5").style.display = "none";
}
function toggleSignupMenu() {
    const nav = document.querySelector('.subloginnav');
    nav.classList.toggle('show');
}