function dramKit(){
const removeTransition = (event) =>{
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('play');
}

const keys = document.querySelectorAll('.key');
keys.forEach( el=>{
el.addEventListener('transitionend', removeTransition);  
})

const presKey = (e) => {
 const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`)
    if(!audio) return;
    audio.currentTime =0;
    audio.play();
    key.classList.add('play');
  };
  document.addEventListener('keydown', presKey);

}