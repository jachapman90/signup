const pswd = document.querySelector("#password");
const conf = document.querySelector("#confirm");

console.log(pswd.value);
console.log(conf.value);

addEventListener("keyup", (event) => {
    let target = event.target.id;
    console.log(target);
        if (target === "confirm") {
            console.log(pswd.value);
            let pswdCheck = pswd.value;
            let confCheck = conf.value;
            if (pswdCheck === confCheck) {
                pswd.classList.add(valid);
            }
        }
})