$(document).ready(function(){
    let menu_no = get_url_info('menu_no');

    $('.product_header').text(`${menu_arr[menu_no]}`)

    $('.product_body').prop('id', menu_arr[menu_no])

    let count = 40;
    load_product(menu_no, count)

    item_img_hover('.item_box .item_img')

    let chk = new Array($('.product_item_box').length);
    for(let i=0; i<$('.product_item_box').length; i++){
        chk[i] = false;
    }

    let w_height = $(window).height() / 2;
    let p_i_top = $('.product_item_box').eq(0).offset().top
    let w_top = $(window).scrollTop()
    let for_i = 0;
    $(window).scroll(function(){
        w_top = $(window).scrollTop()

console.log(for_i, chk)     
            
        for(let i=for_i; i<$('.product_item_box').length; i++){
            if(chk[i] == false){                   
                if(p_i_top <= (w_top + w_height)){
                    $('.product_item_box').eq(i).css({
                        transform: 'translateY(0)'
                        , opacity: 1
                    })
                    chk[i] = true;
                    for_i = i+1;
                }
                p_i_top = $('.product_item_box').eq(for_i>=$('.product_item_box').length?$('.product_item_box').length-1:for_i).offset().top
            }
        }
    })
})