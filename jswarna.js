const button = document.querySelector('button');
button.addEventListener('click', function() {
    
    const body1 = document.getElementsByTagName('body')[0];
    body1.classList.toggle('biru-muda');
    
});
const button2 = document.createElement('button');
const isiButton = document.createTextNode('Button Javascript');
button2.appendChild(isiButton);
button2.setAttribute('type', 'button');
const body = document.getElementsByTagName('body')[0];
button.after(button2);

button2.addEventListener('wheel', function() {
    const r = Math.round(Math.random()*255); //Math.floor(pembulatan kebawah), Math.cell(keatas)
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    
});

const divBg = document.getElementById('change-background');
divBg.addEventListener('input', function() {
    const sMerah = document.querySelector('input[name=sMerah]');
    const r = sMerah.value;
    const sHijau = document.querySelector('input[name=sHijau]');
    const g = sHijau.value;
    const sBiru = document.querySelector('input[name=sBiru]');
    const b = sBiru.value;
    
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    console.log(r+','+g+','+b);
    
});
