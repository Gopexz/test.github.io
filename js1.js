const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'lightblue';

const p = document.getElementsByTagName('p');
p[0].style.backgroundColor = 'grey';
p[2].style.backgroundColor = 'grey';

const sectionA = document.getElementById('a');
const paragrafbaru = document.createElement('p');
const isiparagarf = document.createTextNode('Paragraf Baru');
const bold = document.createElement('b');
bold.appendChild(isiparagarf);
paragrafbaru.appendChild(bold);

sectionA.appendChild(paragrafbaru);

const sectionB = document.querySelector('section#b');
const liBaru = document.querySelector('section#b ul');
// const elemenLi = document.createElement('p');
const isiLi = document.createTextNode('Ini isi li');
const liLi = document.createElement('li');
liLi.appendChild(isiLi);
const liBefore = liBaru.querySelector('li:nth-child(3)');
// elemenLi.appendChild(liLi);
liBaru.insertBefore(liLi,liBefore);
const liSatu = liBaru.querySelector('li:nth-child(1)');
const liRemove = liBaru.querySelector('li:nth-child(2)');
liBaru.removeChild(liRemove);

liBaru.replaceChild(paragrafbaru,liSatu);



