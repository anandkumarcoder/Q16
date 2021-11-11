const button = document.querySelector(".btn");
const output = document.querySelector(".output");

let ram = {
    name: "Ram",
    yuga: "treta",
    power: 2500
}

let krishna = {
    name: "Krishna",
    yuga: "Dwarpar",
    power: 2325
}

function ramNewPower() {
    let ramPower = (ram.name.length * 35) + 2500

    return ramPower
}

function krishnaNewPower() {

    let krishnaPower = (krishna.name.length * 35) + 2325
    return krishnaPower
}

console.log(ramNewPower()) //2605
console.log(krishnaNewPower()) //2570

function newPowerCheck() {
    if (ramNewPower() > krishnaNewPower()) {
      output.innerText = `${ram.name} power is ${ramNewPower()} which is more than ${krishna.name}'s power`
    } else {
        output.innerText = `${krishna.name} power is ${krishnaNewPower()} which is more than ${ram.name}'s power`
    }
}


button.addEventListener('click' , newPowerCheck)