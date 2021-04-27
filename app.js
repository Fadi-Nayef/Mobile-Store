'use strict';
let phoneInfo=[];

function random(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
function Phone(user,type){
this.userName=user;
this.phoneType=type;
this.price=random(100,500);

phoneInfo.push(this);
}
// user type price condition
let headerArr=['user','type','price','condition'];

function settingItems(){

    let stringOb=JSON.stringify(phoneInfo);

    localStorage.setItem('phoneInfo',stringOb);
}
if (Phone.price >200){
    let newPrice='new';
}else{
   let newPrice='Used'
}

let result=document.getElementById('result');
let altUl=document.getElementById('altUl')
let table=document.createElement('table');
result.appendChild(table)

let tableHeader=document.createElement('tr');
table.appendChild(tableHeader);
let tableHeaderCells=document.createElement('th');
let tableHeaderCells2=document.createElement('th');
let tableHeaderCells3=document.createElement('th');
let tableHeaderCells4=document.createElement('th');

    tableHeader.appendChild(tableHeaderCells);
    tableHeaderCells.textContent='user';

    tableHeader.appendChild(tableHeaderCells2);
    tableHeaderCells2.textContent='type';

    tableHeader.appendChild(tableHeaderCells3);
    tableHeaderCells3.textContent='price';

    tableHeader.appendChild(tableHeaderCells4);
    tableHeaderCells4.textContent='condition';



    let listPhone =document.createElement('ul');
    altUl.appendChild(listPhone);
    let listPhoneLi=createElement('li');
    listPhone.appendChild(listPhoneLi);

Phone.prototype.render=function(){
let tableTd=document.createElement('td');

table.appendChild(tableTd);
tableTd.textContent=this.phoneInfo;


listPhoneLi.textContent=`Your name is ${this.userName} and your phone Kind Is ${this.type} it worth ${this.price} ${newPrice}`

}

let form=document.getElementById('form');
form.addEventListener('submit',submitter);


function submitter(event){
event.preventDefualt();
    let userName=event.target.userName.value;
    let phoneType=event.target.phoneList.value;

    let newOb=new Phone(userName,type);
settingItems();
newOb.render();
}

function gettingItems(){
let data=localStorage.getItem(phoneInfo);

let parseOb=JSON.parse(data);
console.log(phoneInfo);
if(parseOb){
    for (let i = 0; i < parseOb.length; i++) {
        new Phone(parseOb[i].userName,parseOb[i].phoneType);
        
 }
}

}
gettingItems();

for (let i = 0; i < phoneInfo.length; i++) {
    phoneInfo[i].render();
    
    
}