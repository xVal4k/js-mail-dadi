let emailBlackList = ["LordVoldemort@gmail.com", "DoloresUmbridge@yahoo.com", "LuciusMalfoy@virgilio.it", "GollumAKASmeagol@alice.it", "HansLanda@3rdreich.de", "Thanos@universe.un", "ScarTheKing@TLionK.com", "JosefMengele@3rdreich.de", "XERSES@persianking.com", "MONSTARS@spacejam.com"];

const userEmail = prompt("Type your email");

let inputEmail = document.querySelector(".input-email");
let message = document.querySelector(".message")

let blocked = false;

for (let i = 0; i < emailBlackList.length; i++) {
    if (userEmail.toUpperCase() == emailBlackList[i].toUpperCase()) {
        blocked = true;
    } 
}

inputEmail.innerHTML = userEmail;

if (blocked == true) {
    message.innerHTML = "This email is no more able to be used to this site";
} else {
    message.innerHTML = "Welcome back!";
}

