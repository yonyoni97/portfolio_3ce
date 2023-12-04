$(document).ready(function(){
    let cate_no = get_url_info("cate_no")
    let item_no = get_url_info('item_no')

    const ITEM = ITEM_LIST[cate_no][item_no-1];
    console.log(ITEM)
    let no_sale;
    let sale;
    if(ITEM.s_price==0){
        no_sale = `<span class="item_s_price">${ITEM.o_price.toLocaleString('ko')}원</span>`
    }
    else{
        sale = `<span class="item_o_price">${ITEM.o_price.toLocaleString('ko')}원</span>
                <span class="item_s_price">${ITEM.s_price.toLocaleString('ko')}원</span>`
    }

    let list = `<div class="big_img">
                    <img src="./img/3ce/category/${cate_arr[cate_no]}/cate_${cate_arr[cate_no]}${ITEM_LIST[cate_no][item_no-1].src}" alt="" class="main_img">
                    <div class="magnifier" style="background: url(./img/3ce/category/${cate_arr[cate_no]}/cate_${cate_arr[cate_no]}${ITEM_LIST[cate_no][item_no-1].src}"></div>
                </div>
                <div class="info_area">
                    <div class="item_info item_info1">
                        <div class="item_title">${ITEM.title}</div>
                        <div class="item_desc">${ITEM.desc}</div>
                        <div class="item_price">
                            ${ITEM.s_price==0?no_sale:sale}
                        </div>
                    </div>
                    <table class="item_info item_packing">
                        <tbody>
                            <tr class="pack_info">
                                <th>국내·해외 배송</th>
                                <td>국내 배송</td>
                            </tr>
                            <tr class="pack_info">
                                <th>배송방법</th>
                                <td>택배</td>
                            </tr>
                            <tr class="pack_info">
                                <th>배송비</th>
                                <td>2,500원 (50,000원 이상 시 무료)</td>
                            </tr>
                            <tr class="choose_color">
                                <th>색상</th>
                                <td>
                                    <select name="color" id="color_chart">
                                        <option value="" selected>-[필수] 옵션을 선택하세요-</option>
                                        <option value="op1" class="opt1">PO1</option>
                                        <option value="op2" class="opt2">N01</option>
                                        <option value="op3" class="opt3">N02</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="item_info alert">(최소 주문 수량은 1개 이상입니다.)</div>
                    <div class="choosen_box">
                        
                    </div>
                    <div class="item_info total">
                        Total : <span class="total_price">0원</span>
                    </div>
                    <div class="item_info button_box">
                        <input type="button" value="Wish List" class="button button1">
                        <input type="button" value="ADD to Cart" class="button button2">
                        <input type="button" value="Buy Now" class="button button3">
                    </div>
                </div>`
    $(list).appendTo('#item_main')


    $('.detail_btn_box a').click(function(){

        event.preventDefault(); 


        console.log($(this).attr('href'))
        let href = $(this).attr('href');

        $('html, body').stop().animate({
            scrollTop: $(href).offset().top - 170
        }, 1000)
    })

    let sel_chk = [false, false, false]
    $('select[name=color]').change(function(){
        let idx_chk = $('select[name=color] option:selected').index();
        if(!sel_chk[idx_chk]){
            sel_chk[idx_chk] = true;
            console.log(idx_chk)

            let color = $('select[name=color] option:selected').text()

            let plus_item = `<div class="item_info choosen">
                                <div class="cho cho_L">
                                    <div class="cho_title">${ITEM.title}</div>
                                    <div class="cho_sub">${color}</div>
                                </div>
                                <div class="cho cho_count">
                                    <input type="button" value="-" class="btn btn_minus">
                                    <input type="text" value="1" class="count">
                                    <input type="button" value="+" class="btn btn_plus">
                                    <input type="button" value="x" class="btn btn_close">
                                    <input type="hidden" value="${idx_chk}" class="opt_order">
                                </div>
                                <div class="cho cho_R">${$('.item_s_price').text()}</div>
                            </div>`

            $(plus_item).appendTo('.choosen_box')
            total_price()
        }
        else{
            alert("이미 선택된 옵션입니다.")
        }
    })

    $(document).on('click', '.btn_minus', function(){
        let tmp_qty = +($(this).next('.count').val()) -1
        if(tmp_qty > 0){
            $(this).next('.count').val(tmp_qty);
            total_price()
        }
        else if(tmp_qty <= 0){
            alert('최소 주문 수량은 한개 입니다.')
        }
    })

    $(document).on('click', '.btn_plus', function(){
        let tmp_qty = +($(this).prev('.count').val()) +1
        $(this).prev('.count').val(tmp_qty);
        total_price()
    })

    $(document).on('click', '.btn_close', function(){
        
        $(this).parent().parent('.choosen').remove()
        
        let tmp_idx = $(this).next('.opt_order').val()
        console.log(tmp_idx)
        sel_chk[tmp_idx] = false;
        total_price()
    })

    function total_price(){
        let total_price = 0;

        for(let i=0; i<$('.count').length; i++){
            total_price += $('.count').eq(i).val() * $('.item_s_price').text().replace("원", "").replace(",", "")
        }
        $('.total_price').text(total_price.toLocaleString('ko')+"원")
    }

        // 돋보기 움직임 감지
        $(document).on('mousemove', '.big_img', function(event){
            // 부모 영역내 마우스 위치 찾기
            let mouseX = event.pageX - $('.big_img').offset().left;
            let mouseY = event.pageY - $('.big_img').offset().top;
    
            // 마우스가 돋보기 가운데 오기 하기(transform: translate(-50%, -50%) 나 마찬가지)
            let posx = mouseX - $('.magnifier').width() / 2;
            let posy = mouseY - $('.magnifier').height() / 2;
    
            // 배경 이미지가 원의 가운데 오게 하기
            let bg_x = -mouseX + $('.magnifier').width() / 2;
            let bg_y = -mouseY + $('.magnifier').height() / 2;
            
    
            $('.magnifier').css({
                left: posx,
                top: posy,
    
                backgroundPosition: `${bg_x}px ${bg_y}px`,
                backgroundSize: `${$('.big_img').width() }px ${$('.big_img').height() }px`,
            })
    
            
            console.log(event.offsetX, event.offsetY) 
        });
})