const progress = document.querySelector('.progress-bar');
const toTop = document.querySelector('.to-top');
const sidebar = document.querySelector('.sidebar');
let btn = document.querySelector('.btn');

// ///////////////////////////

window.addEventListener('scroll', ()=>{
    const winScroll = window.pageYOffset;
   const height = document.documentElement.scrollHeight - window.innerHeight;
   const scrolled = (winScroll/height) * 100;
   progress.style.width = `${scrolled}%`
   
})

// ///////////////////////////

btn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    sidebar.style.visibility = 'visible';
})

// ///////////////////////////

function changeColor(id){
    document.body.style.background = document.getElementById(id).innerHTML ;
}

// ///////////////////////////

window.addEventListener('scroll',function(){
    if(window.pageYOffset > 400){
        toTop.classList.add('active');
    }else{
        toTop.classList.remove('active');
    }
})
