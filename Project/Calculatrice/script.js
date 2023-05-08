let result = document.getElementById("resulte")
let v = result.value

function number (nbr)
{
    result.value += (nbr)

}

function reset ()
{
    result.value =''
}


function sup()
{
    let relt= result.value.slice(0,-1)
    result.value = relt
}

let oper


function operation(op)
{
    chek()
    result.value += op
}

function egale()
{
    chek()
    result.value=eval(result.value)
}

function moin()
{
    chek()
    result.value = eval(result.value)
    result.value= result.value*-1
    
}

function chek()
{
    let v = result.value
     oper = v[v.length-1]
    if(['+','-','*','/','.'].includes(oper))
    {
        result.value = v.slice(0,-1)
    }
}


function split(str, index) {
    const result = [str.slice(0, index), str.slice(index)];
  
    return result;
  }

