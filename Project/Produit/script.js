let tab=document.querySelector('table');
let num=document.getElementById('numero');
let nom=document.getElementById('nom');
let note=document.getElementById('note');
let b1=document.getElementById('btn1');//ajouter
let b2=document.getElementById('btn2');//Modifier
let index;
function sup()
{
    let name=tab.rows[index].cells[1].innerText;
    let rep=confirm(`supprimer ${name} ?`);
    if(rep)
    {
        tab.rows[index].remove();
        num.value="";nom.value="";note.value="";
    }
}
function aff()
{
    for (let i = 1; i < tab.rows.length; i++) {
        tab.rows[i].addEventListener('click',function()
        {
         index=i;
         //alert(index);
         num.value=tab.rows[index].cells[0].innerText;
         nom.value=tab.rows[index].cells[1].innerText;
         note.value=tab.rows[index].cells[2].innerText;
        }
        )
    }
    return index;
}
function ajouter()
{
    let tr=document.createElement('tr');
    let lien=document.getElementById('a')
    lien.innerHTML="<a href='#' onclick=aff()>Editer</a> | <a href='#' onclick=sup()>Supprimer</a>"
    let inputs=[num.value,nom.value,note.value,lien.innerHTML];
    for (let i = 0; i < inputs.length; i++) {
        let td=document.createElement('td');
        td.innerHTML=inputs[i];
        tr.appendChild(td);
    }
    tab.appendChild(tr);
    num.value="";
    nom.value="";
    note.value="";
    
}
function Modifier()
{
    tab.rows[index].cells[0].innerText=num.value;
    tab.rows[index].cells[1].innerText=nom.value;
    tab.rows[index].cells[2].innerText=note.value;
    num.value="";nom.value="";note.value="";
}