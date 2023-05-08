let select_input = document.getElementById('input')
let select_output = document.getElementById('output')

let input = document.getElementById('input_currency')
let output = document.getElementById('output_currency')
function convert()
{
    if (select_input.value === 'MD' && select_output.value === 'MD')
    {
        output.value = `${input.value} MAD`
        
    }
    else if (select_input.value === 'AD' && select_output.value === 'AD')
    {
        output.value = `${input.value} USD`
    }
    else if (select_input.value === 'EU' && select_output.value === 'EU')
    {
        output.value = `${input.value} €`
        
    }
    else if (select_input.value === 'MD' && select_output.value === 'AD')
    {
        output.value = `${input.value / 10} USD`
    }
    else if (select_input.value === 'AD' && select_output.value === 'MD')
    {
        output.value = `${input.value * 10} MAD`
    }
    else if (select_input.value === 'MD' && select_output.value === 'EU')
    {
        output.value = `${(input.value / 11).toFixed(2)} €`
    }
    else if (select_input.value === 'EU' && select_output.value === 'MD')
    {
        output.value = `${input.value * 11} MAD`
    }
    else if (select_input.value === 'AD' && select_output.value === 'EU')
    {
        output.value = `${(input.value / 1.11).toFixed(2)} €`
    }
    else if (select_input.value === 'EU' && select_output.value === 'AD')
    {
        output.value = `${input.value * 1.11} USD`
    }

}

