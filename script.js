let is_power_on = false
let lamp = document.getElementById('lamp')
let btn = document.getElementById('btn')

function broker(){
    lamp.src = "assets/break.svg"
    btn.value = "fix the light"
    is_power_on = true
}

lamp.addEventListener('click', broker)

function power_on(){
    lamp.src = "assets/poweron.svg"
    btn.value = "OFF"
    is_power_on = true   
}
function power_off(){
    lamp.src = "assets/poweroff.svg"
    btn.value = "ON"
    is_power_on = false
}

function power(){
    if(!is_power_on){  
        power_on()
    }else{
        power_off()
    }
}
