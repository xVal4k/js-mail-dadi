let emailBlackList = ["LordVoldemort@gmail.com", "DoloresUmbridge@yahoo.com", "LuciusMalfoy@virgilio.it", "GollumAKASmeagol@alice.it", "HansLanda@3rdreich.de", "Thanos@universe.un", "ScarTheKing@TLionK.com", "JosefMengele@3rdreich.de", "XERSES@persianking.com", "MONSTARS@spacejam.com"];

const userEmail = prompt("Type your email");

let blocked = false;

for (let i = 0; i < emailBlackList.length; i++) {
    if (userEmail.toUpperCase() == emailBlackList[i].toUpperCase()) {
        blocked = true;
    } 
}

if (blocked == true) {
    console.log(userEmail, "-", "This email is nomore able to continue to this site");
} else {
    console.log("Welcome back", userEmail, "!");
}

