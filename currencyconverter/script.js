let select= document.querySelectorAll('.currency')
let btn=document.getElementById('btn')
let input=document.getElementById('input')
let error=document.getElementById('msg')
fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res => displayDropDown(res))

function displayDropDown(res){
    let countries = Object.entries(res)
    //console.log(countries)
    for(let i=0;i<countries.length;i++){
        let opt= `<option value="${countries[i][0]}">${countries[i][0]}</option>`
        select[0].innerHTML +=opt
        select[1].innerHTML +=opt
    }
}
btn.addEventListener('click',()=>{
    let curr1=select[0].value
    let curr2=select[1].value
    let inputVal= input.value
    if(curr1==curr2)
        error.innerHTML=`Please choose different currencies`
    else{
        convert(curr1,curr2,inputVal)
    }
})
function convert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data)=>{
        document.getElementById('result').value = Object.values( data.rates)[0]
    })
}