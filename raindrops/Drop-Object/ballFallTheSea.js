
import mainObject from "../mainObject/mainObject"
export default function ballFallTheSea(circule){
    const seaTop = document.querySelector(".seapart__sea-level");
    const a = function(){
    if(seaTop.getBoundingClientRect().top >= circule.getBoundingClientRect().bottom){
       setTimeout(a, 1000);
    } else{
        circule.classList.add("circule-disappear");

        setTimeout(() => { circule.remove()}, 1000); 
        if(!seaTop.style.height){
            seaTop.style.height = "20%"
            console.log(seaTop.style.height.slice(0, +seaTop.style.height.length-1));
        } else{
            seaTop.style.height = seaTop.style.height.slice(0, +seaTop.style.height.length-1)*2 +"%";
        }
        mainObject.loseGameCount ++;
        if (mainObject.loseGameCount === 3){
            mainObject.shouldConyinueGame = false;
        }
        return true;
    }

    }
    a();
}

