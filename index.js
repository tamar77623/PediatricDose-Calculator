let inp1 = document.getElementById('inp1');
let medicine = document.getElementById('medicine');
let btn = document.getElementById('btn')
let h3 = document.getElementById("h3");
let span1 = document.getElementById('span1');
let span2 = document.getElementById('span2');
let btn2 = document.getElementById('btn2');
function h3text(){
    setTimeout(() => {
        h3.innerText = '';
    }, 1600);
}
btn.onclick = function(){
    if(inp1.value === ""){
        h3.innerText = 'Please Enter the childs weight in kilogram';
        h3text();
        return;
    }
    if(medicine.value === ""){
        h3.innerText = 'Please Select Medicine';
        h3text();
        return
    }
    account();
    valuees();
}
function account(){
    let numberinp1 = Number(inp1.value);
    let selectvalue = medicine.value;
    let Doseinml;
    if(selectvalue === "paracetamol"){
        Doseinml = (numberinp1 * 15) /24;
    }else if(selectvalue === "ibuprofen"){
        Doseinml = (numberinp1 * 10)/20
    }else if(selectvalue === 'amoxicillin'){
        Doseinml = (numberinp1 * 20) / 25;
    }
    let Maximumdailyml = Doseinml * 4;
    console.log(Doseinml);
    console.log(Maximumdailyml)
    span1.style.display = 'block';
    span2.style.display = 'block';
    span1.innerText = "Single Dose (mL): " + Math.round(Doseinml);
    span2.innerText = "Max Daily (mL): " + Math.round(Maximumdailyml)
    btn2.style.display = 'block'
}
function valuees(){
    inp1.value = '';
    medicine.value = '';
}
btn2.onclick = function(){
    span1.style.display = 'none';
    span2.style.display = 'none';
    btn2.style.display = 'none';
}