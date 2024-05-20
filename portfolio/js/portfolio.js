//메뉴펼침관련
const header_menu = document.querySelector('.header_menu');
const menu_gnb = document.querySelector('.menu_gnb');
const menu_gnb_lists = document.querySelectorAll('.menu_gnb li');
const icon = document.querySelector('.icon');

header_menu.addEventListener('click',()=>{
    menu_gnb.classList.toggle('act');
    icon.classList.toggle('act');
    icon.classList.toggle('act_close');
});

menu_gnb_lists.forEach((list)=>{
    list.addEventListener('click',()=>{
        menu_gnb.classList.toggle('act');
        icon.classList.toggle('act');
        icon.classList.toggle('act_close');
    })
})

//사운드바
const sound_off = document.querySelector('.sound_off'); 
const sound_on = document.querySelector('.sound_on'); 
const soundbar_in = document.querySelector('.soundbar_in'); 
const audio = document.getElementById('audio');

sound_off.style.color ="white"
sound_on.style.color ="#B8B8B8"

sound_off.addEventListener('click',()=>{
    soundbar_in.style.left='50%';
    sound_off.style.color ="white"
    sound_on.style.color ="#B8B8B8"
    audio.pause();
})
sound_on.addEventListener('click',()=>{
    soundbar_in.style.left='0%';
    sound_on.style.color ="white"
    sound_off.style.color ="#B8B8B8"
    audio.play();
    audio.onended = function() {
        audio.play();
    };
})



window.addEventListener('scroll',()=>{
    const sc = document.scroll

    console.log(sc);
});


//가로이동
gsap.registerPlugin(ScrollTrigger);
const container = document.querySelector('.container');
gsap.to(container, {
    x: () => -(container.scrollWidth - window.innerWidth) + "px",
    ease: "none",
    scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => "+=" + container.scrollWidth,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers : true
    }
});