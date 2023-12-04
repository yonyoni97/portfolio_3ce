
$(document).ready(function(){




    
/*********************************************/
/************* 타이머 시간별 모음 *************/
/********************************************/
    let timer_half1 = 500;
    let timer_1 = 1000;


/*********************************************/
/************ 탑배너 돌아가게 하기 ************/
/********************************************/
    let tb_curr_idx = 0;
    let tb_count = $('.top_banner img').length;

    $('.top_banner img').eq(tb_curr_idx).css({top: 0})
    setInterval(()=>{
        $('.top_banner img').eq(tb_curr_idx % tb_count).animate({top: '-100%'}, timer_half1)
        $('.top_banner img').eq((tb_curr_idx+1) % tb_count).css({top: '100%'}).animate({top: 0}, timer_half1)
        tb_curr_idx+=1;
    }, timer_1 * 2)

    /*********************************************/
    /*********** 서브 메뉴 나오게 하기 ************/
    /********************************************/
    $('.nav_menu, .sub_menu').hover(function(){
        $('.sub_menu').addClass('sub_menu_active')
        if($(this).hasClass('nav_menu')){
            $('.sub_pan').removeClass('sub_pan_active')
            $('.sub_pan').eq($(this).index()).addClass('sub_pan_active')
        }
    }, function(){
        $('.sub_menu').removeClass('sub_menu_active')
        
        // $('.sub_pan').removeClass('sub_pan_active')
    })

/*********************************************/
/************* 헤더 픽스드 시키기 *************/
/********************************************/

    let h_top_pos = $('.header').offset().top
    $(window).scroll(function(){
        if(h_top_pos <= $(window).scrollTop()){
            $('.header').css({
                background: 'rgba(255, 255, 255, 0.5)'
                , position: 'fixed'
                , top: 0
                , left: 0
                , zIndex: 9999
            })
            $('.container').css({
                marginTop: '100px'
            })
        }
        else{
            $('.header').css({
                position: 'relative'
            })
            $('.container').css({
                marginTop: '0'
            })
        }
    })

    let chk= true;
    $(document).on('click', '.header2_ham', function(){
        $('.h2_pan').toggleClass('h2_pan_active')

        if(chk) { // X자 만드는부분
            $('#line_top').css({
                transform: 'translateY(15px)',
            })
            setTimeout(function(){
                $('#line_top').css({
                    transform: 'translateY(15px) rotate(45deg)',
                })
            }, 500)

            setTimeout(function(){
                $('#line_mid').css({
                    transform: 'scale(0)'
                })
            }, 400)

            $('#line_bot').css({
                transform: 'translateY(-13px)',
            })
            setTimeout(function(){
                $('#line_bot').css({
                    transform: 'translateY(-13px) rotate(-45deg)',
                })
            }, 500)
        }
        else { // = 자 만드는부분
            $('#line_top').css({
                transform: 'translateY(15px) rotate(0)',
            })
            setTimeout(function(){
                $('#line_top').css({
                    transform: 'translateY(0)',
                })
            }, 500)

            setTimeout(function(){
                $('#line_mid').css({
                    transform: 'scale(1)'
                })
            }, 400)

            $('#line_bot').css({
                transform: 'translateY(-13px) rotate(0)',
            })
            setTimeout(function(){
                $('#line_bot').css({
                    transform: 'translateY(0)',
                })
            }, 500)
        }
        chk = !chk;

    })


    setInterval(()=> {
        $('.sub_icon0 img').animate({
            top: -10
            ,left: -10
        }, 500).animate({
            top: 0
            ,left: 0
        }, 500).animate({
            top: -10
            ,left: -10
        }, 500).animate({
            top: 0
            ,left: 0
        }, 500)
    }, timer_1 * 3)

})
function item_img_hover(box){
    $(box).hover(function(){
        let curr_img = $(this).parent();
        $(curr_img).find('.item_main_img').css({
            opacity:0
        })
        $(curr_img).find('.item_sub_img').css({
            opacity:1
        })
    }, function(){
        let curr_img = $(this).parent();
        $(curr_img).find('.item_main_img').css({
            opacity:1
        })
        $(curr_img).find('.item_sub_img').css({
            opacity:0
        })
    })


    $('.h2_pan_menu').click(function(){
        $('.h2_pan_list_box').removeClass('h2_pan_list_box_active')
        $('.h2_pan_list_box').eq($(this).index()).toggleClass('h2_pan_list_box_active')
    })
}