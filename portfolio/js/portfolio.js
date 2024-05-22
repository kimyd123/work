//메뉴펼침관련
const header_menu = document.querySelector('.header_menu');
const menu_gnb = document.querySelector('.menu_gnb');
const menu_gnb_lists = document.querySelectorAll('.menu_gnb li');
const icon = document.querySelector('.icon');

header_menu.addEventListener('click',(e)=>{
    menu_gnb.classList.toggle('act');
    icon.classList.toggle('act');
    icon.classList.toggle('act_close');
});

menu_gnb_lists.forEach((list)=>{
    list.addEventListener('click',(e)=>{
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





//버튼클릭 배경이밴트
let main_bg1 = $(".main_bg1");
let main_bg3 = $(".main_bg3");
let line = $("#line");
let i=1;


function motion(target){
	if ( i<=15 ){
            let temp = line.clone(); 
            target.append(temp);
            // console.log(target.selector);
            temp.css({
                left:Math.random()*target.width(),
                top:Math.random()*target.height(),
                width:Math.random()*50+20,
                opacity:Math.random()*1, 
            });
        
            temp.animate({left:Math.random()*target.width(), opacity:0},1000,function(){
                $(this).remove();
            });
	} 
	i++; 
}

function mainBG() {
    console.log('ddd');
    $(".main_bg0").fadeIn(700,"easeOutExpo").fadeOut(800,"easeOutExpo");
}


//버튼페이지이동
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        const home = document.querySelector('#home');
        let page_width = $(window).width();
        let page_index = 0;
        // $(".prev").hide();
        $(".main_bg0").hide();

        $(window).resize(function() {
            page_width = $(window).width();
            $("#home,#work1,#work2,#skill1,#skill2,#about,#contact").css({ width: page_width });
            $('html,body').stop().animate({ scrollLeft: page_width * page_index }, 200);
        });

        $(".next").click(function() {
            setInterval(motion,100,main_bg3);
            mainBG();
            $(this).animate({marginBottom:5},500,function(){ $(this).animate({margin:0})})
            i=0;
            page_index++;
        if (page_index > 6) {
            page_index = 6;
        };
        if (page_index === 6) {
            $(this).fadeOut();
        };
        $(".prev").fadeIn();
        $('html, body').stop().animate({scrollLeft: page_width * page_index}, 200); 
        return false;
        });

        $(".prev").click(function() {
            setInterval(motion,100,main_bg1);
            mainBG();
            $(this).animate({marginBottom:5},500,function(){ $(this).animate({margin:0})})
            i=0;
            page_index--;
        if (page_index < 0) {
            page_index = 0
        };
        if (page_index === 0) {
            $(this).fadeOut();
        };
        $(".next").fadeIn();
            $('html, body').stop().animate({scrollLeft: page_width * page_index}, 200); 
            return false;
        });


        // $(window).scroll(function() {
        //     var sc = $(document).scrollLeft();
        // });




        $(document).ready(function() {
            var handleMouseWheel = _.debounce(function(e) {
                var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
                if (delta < 0) { 
                    console.log(delta);
                    $(".next").click();
                } else {
                    console.log(delta);
                    $(".prev").click();
                }
            }, 300); 
        
            $('body').on('mousewheel DOMMouseScroll', handleMouseWheel);
        });


        // $('body').on('mousewheel', function(event, delta) {
        //     if (delta < 0) { 
        //         console.log(delta);
        //         $(".next").click();
        //     } else {
        //         console.log(delta);
        //         $(".prev").click();
        //     }
        // });


        //섹션별 문구/페이지 위치
        const obser_node = document.querySelectorAll('.panel');
        const sec_wrap = document.querySelectorAll('.sec_wrap');
        const sec_title = document.querySelectorAll('.sec_title');
        const main_bg2_line_in = document.querySelector('.main_bg2_line_in');
        const footer_page = document.querySelector('#footer span');
        // console.log(footer_page);

        function secOpacity(){
            sec_wrap.forEach((item)=>{
                item.style.opacity=0;
            })
        }

        function contentOpacity(){
            
        }

        const ob = new IntersectionObserver((e)=>{
            e.forEach(function(i,index){
                if(i.isIntersecting){
                    if(i.target.id == "home"){
                        secOpacity();
                        sec_wrap[0].style.opacity=1;

                        main_bg2_line_in.style.width = 100/7*1 +"%";
                        footer_page.innerHTML="page 1/7";

                    }else if(i.target.id == "work1") {
                        secOpacity();
                        sec_wrap[1].style.opacity=1;
                        main_bg2_line_in.style.width = 100/7*2 +"%";
                        footer_page.innerHTML="page 2/7";
                    }else if(i.target.id == "work2") {
                        secOpacity();
                        sec_wrap[2].style.opacity=1;
                        main_bg2_line_in.style.width = 100/7*3 +"%";
                        footer_page.innerHTML="page 3/7";
                    }else if(i.target.id == "skill1") {
                        secOpacity();
                        sec_wrap[3].style.opacity=1;
                        main_bg2_line_in.style.width = 100/7*4 +"%";
                        footer_page.innerHTML="page 4/7";
                    }else if(i.target.id == "skill2") {
                        secOpacity();
                        sec_wrap[4].style.opacity=1;
                        main_bg2_line_in.style.width = 100/7*5 +"%";
                        footer_page.innerHTML="page 5/7";
                    }else if(i.target.id == "about") {
                        secOpacity();
                        sec_wrap[5].style.opacity=1;
                        main_bg2_line_in.style.width = 100/7*6 +"%";
                        footer_page.innerHTML="page 6/7";
                    }else if(i.target.id == "contact") {
                        secOpacity();
                        sec_wrap[6].style.opacity=1;
                        main_bg2_line_in.style.width = 100/7*7 +"%";
                        footer_page.innerHTML="page 7/7";
                    }
                }
            })
        },{threshold : 0.8});

        obser_node.forEach((item)=>{
            ob.observe(item);
        });


