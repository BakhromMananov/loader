const percent = document.querySelector('.percent'),
progress = document.querySelector('.progress'),
text=document.querySelector('.text'),
start=document.querySelector('.start');

let count = 4, per = 16;
let loading; 

function launch () {
    loading = setInterval(animate, 50);
}

function animate() {
    if(count ==100 && per ==400) {
        percent.classList.add(".text-blink"); 
        percent.textContent = `Complete!`
        text.style.display='block'; 
        text.textContent= `100%`
        clearInterval(loading)
    } else {
        per = per + 4; 
        count = count + 1;
        progress.style.width = per + 'px'; 
        percent.textContent= count + '%'
    }
}

start.addEventListener('click', launch)