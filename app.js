import dohnutClass from "./DoughnutMaker.js";

const numberOfEl = document.querySelector("#numberOf");
const statusEl = document.querySelector("#status")
const dohnutz = new dohnutClass(0);

statusEl.innerText = dohnutz.getStatus();



const makeBtn = document.querySelector("#make");
makeBtn.addEventListener("click", ()=> {
    dohnutz.make();
    disableAuto();
    disableMulti()
    statusEl.innerText = dohnutz.getStatus();

})

const autoBtn1 = document.querySelector("#auto");
autoBtn1.addEventListener("click",()=>{ 
   if(dohnutz._numberOf>= dohnutz._autoCost){
    dohnutz._numberOf -= dohnutz._autoCost;
    dohnutz._autoCost *= 1.1;
    dohnutz._numberOf ++;
    dohnutz._numOfAuto ++;
    setInterval(()=>{
        dohnutz.make();
        disableAuto();
        disableMulti()
        dohnutz._autoCost= Math.round(dohnutz._autoCost);
        statusEl.innerText = dohnutz.getStatus();
    },1000);} 
    else{alert("Not Enuff Fundz Mah Dude")
    }})

function disableAuto(){
if(dohnutz.numberOf >= dohnutz._autoCost){
    autoBtn1.removeAttribute("disabled")
}else {
    autoBtn1.setAttribute("disabled", "disabled")
};}

const autoBtn2 = document.querySelector("#multi");
autoBtn2.addEventListener("click",()=>{ 
       if(dohnutz._numberOf >= dohnutz._multiCost){
        dohnutz._numberOf -= dohnutz._multiCost;
        dohnutz._multiCost *= 1.2;
        dohnutz._clickValue *= 1.2;
        dohnutz._numOfMulti ++;
        statusEl.innerText = dohnutz.getStatus();
        disableAuto();
        disableMulti()
        } 
        else{alert("My Breh, You Broke AF")
        }})

function disableMulti(){
if(dohnutz.numberOf >= dohnutz._multiCost){
    autoBtn2.removeAttribute("disabled")
}else {
    autoBtn2.setAttribute("disabled", "disabled")
};}

 const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click",()=>{
        dohnutz.reset(),
        statusEl.innerText = dohnutz.getStatus();
        })

// const statusEl = document.createElement("p");
// statusEl.innerText = dohnutClass;
// statusEl.classList.add("dohnutClass")