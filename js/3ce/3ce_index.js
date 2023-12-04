$(document).ready(function(){

/*********************************************/
/************* 타이머 시간별 모음 *************/
/********************************************/
let timer_half1 = 500;
let timer_1 = 1000;

/*********************************************/
/*********** 메인배너 돌아가게 하기 ***********/
/********************************************/
    for(let i=0; i<4; i++){
        let mb_list = (`<div class="main_banner" id="main_banner${i}">
                            <img src="./img/3ce/mainbanner/main_banner${i+1}.jpg" alt="" class="banner">
                        </div>`)
            $(mb_list).appendTo('#main_banner_box')
        }
    let mb_curr_idx = 0;
    let mb_count = $('.main_banner').length;
    for(let i=0; i<(mb_count); i++){
            let mb_list = (`<div class=circle></div>`)
            $(mb_list).appendTo('.indi')
        }

    $('.main_banner').eq(mb_curr_idx).css({left:'0%'})
    $('.circle').eq(mb_curr_idx).addClass('circle_active')

    $('.ban_btn_R').eq(0).click(function(){
        mb_auto_block()
        mb_slide(mb_curr_idx % mb_count, '-100%', (mb_curr_idx + 1)% mb_count, "100%", timer_1);
        mb_curr_idx +=1;
    })
    $('.ban_btn_L').eq(0).click(function(){
        mb_auto_block()
        mb_slide(mb_curr_idx % mb_count, '100%', (mb_curr_idx - 1)% mb_count, "-100%", timer_1);
        mb_curr_idx -=1;
    })
    function mb_slide(mb_o_idx, mb_o_pos, mb_c_idx, mb_c_pos, mb_timer){
        $('.main_banner').eq(mb_o_idx).animate({left: mb_o_pos}, mb_timer)
        $('.main_banner').eq(mb_c_idx).css({left: mb_c_pos}).animate({left:'0%'}, mb_timer)

        $('.circle').eq(mb_o_idx).removeClass('circle_active')
        $('.circle').eq(mb_c_idx).addClass('circle_active')
    }

    let mb_interval;
    function mb_auto_slide(){
        mb_interval = setInterval(()=>{
            $('.ban_btn_R').trigger('click')
        }, timer_1 + 2000)
    }
    mb_auto_slide();

    function mb_auto_block(){
        $('.ban_btn').css({pointerEvents:'none'})
        setTimeout(function(){
            $('.ban_btn').css({pointerEvents:'auto'})
        }, timer_1)
    }

    $('#main_banner_box').hover(function(){
        clearInterval(mb_interval);
    }, function(){
        mb_auto_slide()
    })
    
    $('.circle').click(function(){
        let clicked = $(this).index()
        let colored = $('.circle_active').index()

        mb_auto_block();
        if(clicked > colored){
            mb_slide(colored, '-100%', clicked, '100%', timer_1)
        }
        else if(clicked < colored){
            mb_slide(colored, '100%', clicked, '-100%', timer_1)
        }
        mb_curr_idx = clicked
    })


/*********************************************/
/******** 셀픽 아이템 호버시 화면 어둡게 *******/
/********************************************/
    $('.cel_pick_item_box').hover(function(){
        $('.cel_pick_txt').eq($(this).index()).css({
            opacity: 1
        })
    }, function(){
        $('.cel_pick_txt').css({
            opacity: 0
        })
    })
    /*********************************************/
    /************** 아이템 불러오기 **************/
    /********************************************/
    let bi_clicked ;
    load_items(1, 0, 7)

    $(document).on('click', '.b_i_menu', function(){
        bi_clicked = ($(this).index()-1)
        // $('#best_item .item_box').html("")
        $('#best_item .item_box').empty();
        // swiper="";
        
        load_items(1, bi_clicked, 7)

        
        // swiper.on('transitionEnd', function() {
        //     swiper.realIndex = 0;
        //     console.log('now index :::', swiper.realIndex);
        // });
        // console.log(swiper.activeIndex)
        // swiper.slideTo(0,0,true);
    })

    load_review(3, 7, 10)

    load_items(2, 5, 8)
    // load_items(2, 1, 2)
    // load_items(2, 2, 2)
    // load_items(2, 3, 2)

/*********************************************/
/************** 스크롤 효과 주기 **************/
/********************************************/
    let c_p_top = $('#celeb_pick').offset().top;
    let b_i_top = $('#best_item').offset().top;
    let md_top = $('#MD_pick').offset().top;
    let rv_top = $('#review').offset().top;
    let w_height = $(window).height();
    $(window).scroll(function(){
        let w_top = $(window).scrollTop()
        md_top = $('#MD_pick').offset().top;
        rv_top = $('#review').offset().top;
        // 셀픽 타이틀
        if(w_top >= (c_p_top - (w_height * 0.6))){
            $('#cel_pick_header').css({
                transform: 'translateX(0)'
                , opacity: 1
            })
        }
        else{
            $('#cel_pick_header').css({
                transform: 'translateX(-10%)'
                , opacity: 0
            })
        }
        // 셀픽 바디
        if(w_top >= (c_p_top - (w_height * 0.4))){
            $('.cel_pick_item_box').css({
                transform: 'translateY(0%)'
                , opacity: 1
            })
        }
        else{
            $('.cel_pick_item_box').eq(0).css({
                transform: 'translateY(15%)'
                , opacity: 0
            })
            $('.cel_pick_item_box').eq(1).css({
                transform: 'translateY(-15%)'
                , opacity: 0
            })
            $('.cel_pick_item_box').eq(2).css({
                transform: 'translateY(15%)'
                , opacity: 0
            })
        }

        // 베스트 헤더
        if(w_top >= (b_i_top - (w_height * 0.6))){
            $('#best_item_header').css({
                transform: 'translateX(0)'
                , opacity: 1
            })
        }
        else{
            $('#best_item_header').css({
                transform: 'translateX(-10%)'
                , opacity: 0
            })
        }

        // 베스트 바디
        if(w_top >= (b_i_top - (w_height * 0.4))){
            $('.best_body').css({
                transform: 'translateY(0)'
                , opacity: 1
            })
        }
        else{
            $('.best_body').css({
                transform: 'translateY(15%)'
                , opacity: 0
            })
        }

        // 엠디 헤더
        if(w_top >= (md_top - (w_height * 0.6))){
            $('#MD_pick_header').css({
                transform: 'translateX(0)'
                , opacity: 1
            })
        }
        else{
            $('#MD_pick_header').css({
                transform: 'translateX(-10%)'
                , opacity: 0
            })
        }

        // 엠디 바디
        if(w_top >= (md_top - (w_height * 0.4))){
            $('.MD_pick_item_box').css({
                transform: 'translateY(0)'
                , opacity: 1
            })
        }
        else{
            $('.MD_pick_item_box').css({
                transform: 'translateY(15%)'
                , opacity: 0
            })
        }

        // 리뷰 헤더
        if(w_top >= (rv_top - (w_height * 0.6))){
            $('#review_header').css({
                transform: 'translateX(0)'
                , opacity: 1
            })
        }
        else{
            $('#review_header').css({
                transform: 'translateX(-10%)'
                , opacity: 0
            })
        }

        // 리뷰 바디
        if(w_top >= (rv_top - (w_height * 0.4))){
            $('.review_body').css({
                transform: 'translateY(0)'
                , opacity: 1
            })
        }
        else{
            $('.review_body').css({
                transform: 'translateY(15%)'
                , opacity: 0
            })
        }
    })

    item_img_hover('.MD_pick_item_box .item_img')

})