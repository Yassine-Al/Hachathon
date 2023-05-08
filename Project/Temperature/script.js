let celc = document.getElementById('celcius')
let fahr = document.getElementById('fahrenheit')
let kelv = document.getElementById('kelvin')

let btn = document.getElementById('button')


function rNumber(nbr)
{
    return Math.round(nbr*100)/100
}

celc.addEventListener('input',function()
{
    let ctemp = parseFloat(celc.value)
    let ftemp = (ctemp*(9/5))+32
    let ktemp = ctemp + 273.15

    fahr.value = rNumber(ftemp)
    kelv.value = rNumber(ktemp)
})

fahr.addEventListener('input',function()
{
    let ftemp = parseFloat(fahr.value)
    let ctemp = (ftemp-32) * (5/9)
    let ktemp = (ftemp-32) * (5/9) +273.15

    celc.value = rNumber(ctemp)
    kelv.value = rNumber(ktemp)
})

kelv.addEventListener('input',function()
{
    let ktemp = parseFloat(kelv.value)
    let ctemp = ktemp - 273.15
    let ftemp = (ktemp - 273.15) * (9/5) + 32

    celc.value = rNumber(ctemp)
    fahr.value = rNumber(ftemp)
})



btn.addEventListener('click',function()
{
    celc.value=""
    fahr.value=""
    kelv.value=""
})




