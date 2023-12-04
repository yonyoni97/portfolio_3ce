const ITEM_LIST = [

    // 0 - face , 1 - lip , 2- eyes , 3 - cheek , 4- acc
    // r_date - 0이 new에 들어갈 것
    // sell_count - 999 => best 에 들어갈 것 / sell_count - 888 => 메인페이지 베스트에 들어갈 것 

    //FACE
    [
        {item_no: 1, src: '1.jpg', sub_src: '1_1.png', title: '3CE BLUR SEBUM POWDER #PINK', o_price: 23000
        , s_price: 0, r_date: 999, sell_count: 999, desc: '미네랄 픽싱을 기반으로 잔주름 보정까지 꼼꼼히 돕는 독보적 포토샵 ON 페이스'},
        {item_no: 2, src: '2.jpg', sub_src: '2_1.png', title: '3CE BACK TO BABY BB CREAM', o_price: 19000
        , s_price: 0, r_date: 999, sell_count: 999, desc: '#아기피부톤 #투명한피부로 #잿빛걱정은_빠잇! #다크닝이_뭐죠?'},
        {item_no: 3, src: '3.webp', sub_src: '3_1.png', title: '3CE VELVET FIT FOUNDATION', o_price: 32000
        , s_price: 28000, r_date: 999, sell_count: 999, desc: '일상에서 최적의 피팅을 유지하는 벨벳 커버'},
        {item_no: 4, src: '4.jpg', sub_src: '4_1.png', title: '3CE SOFT MATTE FIT CUSHION', o_price: 38000
        , s_price: 34000, r_date: 999, sell_count: 999, desc: '#ALL_DAY_LASTING #SOFT_FIT #RETOUCHING'},
        {item_no: 5, src: '5.jpg', sub_src: '5_1.png', title: '3CE BLUR FILTER POWDER #PEACHY', o_price: 19000
        , s_price: 0, r_date: 999, sell_count: 888, desc: '어플 없이 무보정 실물 승부! 순식간에 미모 지수가 상승하는 \'3CE 블러 필터 파우더\''},
        {item_no: 6, src: '6.webp', sub_src: '6_1.png', title: '3CE MAKEUP FIX POWDER', o_price: 28000
        , s_price: 23000, r_date: 999, sell_count: 888, desc: '픽서를 한듯 메이크업의 밀착, 고정, 지속을 돕는 보송한 픽시드 파우더'},
        {item_no: 7, src: '7.jpg', sub_src: '7_1.png', title: '3CE PORE SILKY BALM', o_price: 13000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '#믿고쓰는 #모공프라이머 #롱래스팅메이크업비결 #모공지우개'},
        {item_no: 8, src: '8.jpg', sub_src: '8_1.png', title: '3CE SHIMMER MAKEUP FIXER', o_price: 17000
        , s_price: 0, r_date: 0, sell_count: 0, desc: '메이크업 전, 후에 사용하여 방금 메이크업한 듯 오랫동안 유지시켜 주는 쉬머 메이크업 픽서'},
        {item_no: 9, src: '9.jpg', sub_src: '9_1.png', title: '3CE GLOW BEAM', o_price: 27000
        , s_price: 0, r_date: 0, sell_count: 0, desc: '피부에 반사판 효과를 주는 복숭앗빛 글로우 빔'},
        {item_no: 10, src: '10.jpg', sub_src: '10_1.png', title: '3CE SKIN FIT COVER LIQUID CONCEALER', o_price: 17000
        , s_price: 0, r_date: 0, sell_count: 0, desc: '나에게 딱 맞는 베이스 메이크업을 위한 컨실러'},
        {item_no: 11, src: '11.jpg', sub_src: '11_1.png', title: '3CE FACIAL CLEANSING OIL', o_price: 22000
        , s_price: 0, r_date: 0, sell_count: 0, desc: '#믿고쓰는 #모공프라이머 #롱래스팅메이크업비결 #모공지우개'},
        {item_no: 12, src: '12.webp', sub_src: '12_1.png', title: '3CE WATER MAKE UP BASE', o_price: 25000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 13, src: '13.jpg', sub_src: '13_1.png', title: '3CE GLOW CUSHION', o_price: 38000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 14, src: '14.jpg', sub_src: '14_1.png', title: '3CE NATURAL FINISH LOOSE POWDER', o_price: 22000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 15, src: '15.jpg', sub_src: '15_1.png', title: '3CE DAILY MOISTURE', o_price: 22000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 16, src: '16.webp', sub_src: '16_1.png', title: '3CE TONE UP TINT', o_price: 20000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 17, src: '17.jpg', sub_src: '17_1.png', title: '3CE MAKEUP FIXER MIST', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 18, src: '18.jpg', sub_src: '18_1.png', title: '[3CE X TOILETPAPER] 3CE MAKEUP FIX POWDER #CLEAR LIGHT', o_price: 33000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 19, src: '19.jpg', sub_src: '19_1.png', title: '3CE BARE COVER CUSHION_SPF', o_price: 30000
        , s_price: 26000, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 20, src: '20.jpg', sub_src: '20_1.png', title: '[3CE X TOILETPAPER] 3CE MAKEUP FIX POWDER #SOFT MEDIUM', o_price: 33000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 21, src: '21.jpg', sub_src: '21_1.png', title: '3CE BARE COVER CUSHION REFILL_SPF', o_price: 18000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
    ]
    ,
    // LIP
    [ 
        {item_no: 1, src: '1.jpg', sub_src: '1_1.png', title: '3CE SOFT MATTE LIPSTICK #HAZY ROSE', o_price: 19000
        , s_price: 0, r_date: 999, sell_count: 999, desc: '톤으로 정의하는 무드 모멘트'},
        {item_no: 2, src: '2.jpg', sub_src: '2_1.png', title: '[MATTE] 3CE LIP COLOR #227 BENCHMARK', o_price: 19000
        , s_price: 12000, r_date: 999, sell_count: 999, desc: '#감동뮤트립 #소프트초밀착 #감각MLBB #롱웨어컬러링 #매트장인3CE #초밀착'},
        {item_no: 3, src: '3.jpg', sub_src: '3_1.png', title: '[MATTE] 3CE LIP COLOR #228 RED SEVENTIES', o_price: 19000
        , s_price: 0, r_date: 999, sell_count: 999, desc: '#감동뮤트립 #소프트초밀착 #감각MLBB #롱웨어컬러링 #매트장인3CE #초밀착'},
        {item_no: 4, src: '4.jpg', sub_src: '4_1.png', title: '3CE SOFT MATTE LIPSTICK #CHILL MOVE', o_price: 19000
        , s_price: 0, r_date: 999, sell_count: 999, desc: '톤으로 정의하는 무드 모멘트'},
        {item_no: 5, src: '5.jpg', sub_src: '5_1.png', title: '3CE BLUR WATER TINT', o_price: 17000
        , s_price: 13000, r_date: 999, sell_count: 888, desc: '#수채화틴트로_생기있게_블러링! #생기블러링 #보송픽싱'},
        {item_no: 6, src: '6.jpg', sub_src: '6_1.png', title: '3CE GLOW LIP COLOR #SMOKY RED', o_price: 20000
        , s_price: 17000, r_date: 999, sell_count: 888, desc: '입술을 촉촉하고 편안하게 케어하고 풍부한 광택감을 살려주는 글로우 립 컬러'},
        {item_no: 7, src: '7.jpg', sub_src: '7_1.png', title: '33CE SOFT MATTE LIPSTICK #SOFT MELLOW', o_price: 19000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '톤으로 정의하는 무드 모멘트'},
        {item_no: 8, src: '8.jpg', sub_src: '8_1.png', title: '3CE SOFT MATTE LIPSTICK #WAY BACK', o_price: 19000
        , s_price: 0, r_date: 0, sell_count: 0, desc: '부드럽고 가벼운 텍스처가 입술을 보송하고 편안하게 연출해주는 고발색 소프트 매트 립스틱'},
        {item_no: 9, src: '9.jpg', sub_src: '9_1.png', title: '3CE BLURRING LIQUID LIP #DELICATE SOUL', o_price: 17000
        , s_price: 0, r_date: 0, sell_count: 0, desc: '입술에 닿는 순간 사르르 녹아드는 셔벗 제형이 보송하게 마무리되며 입술에 자연스레 물들며 밀착됩니다.'},
        {item_no: 10, src: '10.jpg', sub_src: '10_1.png', title: '3CE VELVET LIP TINT #DAFFODIL', o_price: 17000
        , s_price: 0, r_date: 0, sell_count: 0, desc: '부드럽고 가벼운 텍스쳐로 입술이 보송하고 편안하며 레이어링할수록 깊이감을 더하는 소프트 매트 립스틱'},
        {item_no: 11, src: '11.jpg', sub_src: '11_1.png', title: '[MATTE] 3CE MOOD RECIPE LIP COLOR #909 SMOKED ROSE', o_price: 19000
        , s_price: 14000, r_date: 0, sell_count: 0, desc: '부드럽고 가벼운 텍스쳐로 입술이 보송하고 편안하며 레이어링할수록 깊이감을 더하는 소프트 매트 립스틱'},
        {item_no: 12, src: '12.jpg', sub_src: '12_1.png', title: '3CE GLOW LIP COLOR #OVERLOAD', o_price: 20000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 13, src: '13.jpg', sub_src: '13_1.png', title: '3CE VELVET LIP TINT #TAUPE', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 14, src: '14.jpg', sub_src: '14_1.png', title: '3CE VELVET LIP TINT #GO NOW', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 15, src: '15.jpg', sub_src: '15_1.png', title: '3CE BLURRING LIQUID LIP #NUDE SCENE', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 16, src: '16.jpg', sub_src: '16_1.png', title: '3CE SOFT LIP LACQUER #ORDINARY RED', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 17, src: '17.jpg', sub_src: '17_1.png', title: '3CE VELVET LIP TINT #PINK BREAK', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 18, src: '18.jpg', sub_src: '18_1.png', title: '3CE SOFT MATTE LIPSTICK', o_price: 19000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 19, src: '19.jpg', sub_src: '19_1.png', title: '3CE VELVET LIP TINT #GOING RIGHT', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 20, src: '20.jpg', sub_src: '20_1.png', title: '3CE VELVET LIP TINT #NEW NUDE', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 21, src: '21.jpg', sub_src: '21_1.png', title: '3CE TATTOO LIP TINT #YAY OR NAY', o_price: 15000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 22, src: '22.jpg', sub_src: '22_1.png', title: '3CE SOFT LIP LACQUER #DEFINE THIS', o_price: 15000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 23, src: '23.jpg', sub_src: '23_1.png', title: '3CE VELVET LIP TINT #CHILDLIKE', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 24, src: '24.jpg', sub_src: '24_1.png', title: '3CE GLOW LIP COLOR #STAND OFF', o_price: 20000
        , s_price: 18000, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 25, src: '25.jpg', sub_src: '25_1.png', title: '[MATTE] 3CE LIP COLOR #231 BAKED ORANGE', o_price: 19000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 26, src: '26.jpg', sub_src: '26_1.png', title: '[MATTE] 3CE RED RECIPE LIP COLOR #213 FIG', o_price: 19000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 27, src: '27.jpg', sub_src: '27_1.png', title: '[MATTE] 3CE MOOD RECIPE LIP COLOR #218 MIRRORLIKE', o_price: 19000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 28, src: '28.jpg', sub_src: '28_1.png', title: '3CE VELVET LIP TINT #NEAR AND DEAR', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 29, src: '29.jpg', sub_src: '29_1.png', title: '3CE GLOW LIP COLOR #SOUL LIKE', o_price: 20000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 30, src: '30.jpg', sub_src: '30_1.png', title: '[MATTE] 3CE MOOD RECIPE LIP COLOR #221 MELLOW FLOWER', o_price: 19000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 31, src: '31.jpg', sub_src: '31_1.png', title: '3CE VELVET LIP TINT #BEST EVER', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 32, src: '32.jpg', sub_src: '32_1.png', title: '3CE GLOW LIP COLOR #STREETLIGHTS', o_price: 20000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 33, src: '33.jpg', sub_src: '33_1.png', title: '3CE BLURRING LIQUID LIP #BEARBERRY', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 34, src: '34.jpg', sub_src: '34_1.png', title: '3CE TATTOO LIP TINT #CANDY JELLY', o_price: 15000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 35, src: '35.jpg', sub_src: '35_1.png', title: '3CE CLOUD LIP TINT', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 36, src: '36.jpg', sub_src: '36_1.png', title: '3CE GLOW LIP COLOR #CALLING ENAMEL', o_price: 20000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 37, src: '37.jpg', sub_src: '37_1.png', title: '3CE SOFT LIP LACQUER #NULL SET', o_price: 15000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 38, src: '38.jpg', sub_src: '38_1.png', title: '3CE BLURRING LIQUID LIP #CLARET', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 39, src: '39.jpg', sub_src: '39_1.png', title: '3CE TATTOO LIP TINT #COOLEST', o_price: 15000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 40, src: '40.jpg', sub_src: '40_1.png', title: '3CE SLIM VELVET LIP COLOR #SIMPLE STAY', o_price: 19000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
    ],
// EYES
    [
        {item_no: 1, src: '1.jpg', sub_src: '1_1.png', title: '3CE ALL-ROUNDER BROW', o_price: 18000
        , s_price: 14000, r_date: 999, sell_count: 999, desc: '첫쉐입 그대로 번짐이 적은 올-데이 수퍼 라스팅 아이브로우'},
        {item_no: 2, src: '2.webp', sub_src: '2_1.png', title: '3CE NEW TAKE EYESHADOW PALETTE', o_price: 19000
        , s_price: 15000, r_date: 999, sell_count: 999, desc: '새로운 프레임, 새로운 장면, 새로운 감살. 무한의 상상력과 경험을 느끼는 NEW TAKE'},
        {item_no: 3, src: '3.webp', sub_src: '3_1.png', title: '3CE SOFT MUTE PENCIL LINER', o_price: 14000
        , s_price: 0, r_date: 999, sell_count: 999, desc: '자연스러운 뮤트 컬러가 부드럽게 드로잉되어 오랜 시간 그윽한 아이 실루엣을 완성합니다.'},
        {item_no: 4, src: '4.jpg', sub_src: '4_1.png', title: '3CE MINI MULTI EYE COLOR PALETTE #FLAT CALL', o_price: 24000
        , s_price: 22000, r_date: 999, sell_count: 999, desc: '컴팩터블한 4구 섀도우에 부드러움이 깊어지는 매트를 담아내어 눈가에 그윽한 분위기가 스며드는 아이메이크업을 완성시켜 줍니다.'},
        {item_no: 5, src: '5.jpg', sub_src: '5_1.png', title: '[SPLIT SECOND] 3CE MULTI EYE COLOR PALETTE #AUTO FOCUS', o_price: 39000
        , s_price: 30000, r_date: 999, sell_count: 888, desc: '톤에 얽매이지 않고 \'모두가 예쁘게 즐길 수 있는 쿨 무드\'3CE에서 만나는 특별한 로지 모브 스펙트럼'},
        {item_no: 6, src: '6.jpg', sub_src: '6_1.png', title: '3CE MULTI EYE COLOR PALETTE #DEAR NUDE', o_price: 39000
        , s_price: 0, r_date: 999, sell_count: 888, desc: '부드러움이 깊어지는 9가지 매트를 담아내어 눈가에 그윽한 분위기가 스며드는 아이메이크업을 완성시켜 줍니다.'},
        {item_no: 7, src: '7.jpg', sub_src: '7_1.png', title: '3CE MULTI EYE COLOR PALETTE #SOME DEF', o_price: 39000
        , s_price: 33000, r_date: 999, sell_count: 0, desc: '톤으로 정하는 무드 모멘트'},
        {item_no: 8, src: '8.jpg', sub_src: '8_1.png', title: '3CE MULTI EYE COLOR PALETTE #BUTTER CREAM', o_price: 39000
        , s_price: 0, r_date: 0, sell_count: 0, desc: '톤으로 정하는 무드 모멘트'},
        {item_no: 9, src: '9.jpg', sub_src: '9_1.png', title: '3CE MINI MULTI EYE COLOR PALETTE #SIDE BY SIDE', o_price: 24000
        , s_price: 0, r_date: 0, sell_count: 0, desc: '오묘하고 혁신적인 컬러들을 조화롭게 구성하여 모던한 룩을 완성하는 모브'},
        {item_no: 10, src: '10.jpg', sub_src: '10_1.png', title: '3CE MINI MULTI EYE COLOR PALETTE #BROWN RUM', o_price: 24000
        , s_price: 0, r_date: 0, sell_count: 0, desc: '지금까지의 오렌지브라운 컬러를 특별하게 재해석하여 남들과 다른 세련되면서도 빈티지한 컬러감의 향연'},
        {item_no: 11, src: '11.jpg', sub_src: '11_1.png', title: '3CE MINI MULTI EYE COLOR PALETTE #ROSE LATTE', o_price: 24000
        , s_price: 0, r_date: 0, sell_count: 0, desc: '클래식한 라떼에 말린 장미 한송이를 물들인 듯 부드럽고 로맨틱한 로즈 빛 모멘트'},
        {item_no: 12, src: '12.jpg', sub_src: '12_1.png', title: '3CE MULTI EYE COLOR PALETTE #SHOT AGAIN', o_price: 39000
        , s_price: 33000, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 13, src: '13.jpg', sub_src: '13_1.png', title: '3CE MULTI EYE COLOR PALETTE #DELIGHTFUL', o_price: 39000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 14, src: '14.jpg', sub_src: '14_1.png', title: '3CE MULTI EYE COLOR PALETTE #DRY BOUQUET', o_price: 39000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 15, src: '15.jpg', sub_src: '15_1.png', title: '3CE MULTI EYE COLOR PALETTE #BEACH MUSE', o_price: 39000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 16, src: '16.jpg', sub_src: '16_1.png', title: '3CE MULTI EYE COLOR PALETTE #OVERTAKE', o_price: 39000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 17, src: '17.jpg', sub_src: '17_1.png', title: '[3CE X TOILETPAPER] 3CE MULTI EYE COLOR PALETTE #ROSY MUHLY', o_price: 43000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 18, src: '18.jpg', sub_src: '18_1.png', title: '[3CE X TOILETPAPER] 3CE MULTI EYE COLOR PALETTE #AUTO FOCUS', o_price: 43000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 19, src: '19.jpg', sub_src: '19_1.png', title: '[3CE X TOILETPAPER] 3CE MULTI EYE COLOR PALETTE #OVERTAKE', o_price: 43000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 20, src: '20.webp', sub_src: '20_1.png', title: '[MYSTIC MOODS] 3CE MULTI EYE COLOR PALETTE', o_price: 39000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 21, src: '21.jpg', sub_src: '21_1.png', title: '3[FUTURE KIND] 3CE MINI MULTI EYE COLOR PALETTE #ALL IN SYNC', o_price: 27000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 22, src: '22.jpg', sub_src: '22_1.png', title: '[FUTURE KIND] 3CE MINI MULTI EYE COLOR PALETTE #CHILL FLAIR', o_price: 27000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 23, src: '23.webp', sub_src: '23_1.png', title: '3CE EASY BROW DESIGNING PENCIL', o_price: 15000
        , s_price: 12000, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 24, src: '24.jpg', sub_src: '24_1.png', title: '[SPLIT SECOND] 3CE EYE SWITCH #HIDDEN ANGLE', o_price: 16000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 25, src: '25.jpg', sub_src: '25_1.png', title: '3CE WATERPROOF MEGA VOLUME MASCARA #BLACK', o_price: 20000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 26, src: '26.jpg', sub_src: '26_1.png', title: '3CE WATERPROOF LONG & CURL MASCARA #BLACK', o_price: 20000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 27, src: '27.jpg', sub_src: '27_1.png', title: '3CE SUPER SLIM WATERPROOF MASCARA #BLACK', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 28, src: '28.jpg', sub_src: '28_1.png', title: '3CE SLIM FIX WATERPROOF MASCARA #BLACK', o_price: 20000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 29, src: '29.jpg', sub_src: '29_1.png', title: '3CE MINI MULTI EYE COLOR PALETTE #CASUAL TALK', o_price: 24000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 30, src: '30.jpg', sub_src: '30_1.png', title: '3CE MINI MULTI EYE COLOR PALETTE #SECOND PAIR', o_price: 24000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 31, src: '31.jpg', sub_src: '31_1.png', title: '3CE LIQUID PRIMER EYE SHADOW #COMMONPLACE', o_price: 15000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 32, src: '32.jpg', sub_src: '32_1.png', title: '3CE LIQUID PRIMER EYE SHADOW #THE MOST', o_price: 15000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 33, src: '33.jpg', sub_src: '33_1.png', title: '3CE LIQUID PRIMER EYE SHADOW #TO STAY', o_price: 15000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 34, src: '34.jpg', sub_src: '34_1.png', title: '3CE EYEBROW MASCARA', o_price: 15000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 35, src: '35.jpg', sub_src: '35_1.png', title: '3CE EYE GLINT #SOFT DRESS', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 36, src: '36.jpg', sub_src: '36_1.png', title: '3CE MINI MULTI EYE COLOR PALETTE #CLOSING OUT', o_price: 24000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 37, src: '37.jpg', sub_src: '37_1.png', title: '3CE MINI MULTI EYE COLOR PALETTE #ALMOND FUDGE', o_price: 24000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 38, src: '38.jpg', sub_src: '38_1.png', title: '3CE MINI MULTI EYE COLOR PALETTE #DIAMOND GLINT', o_price: 26000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 39, src: '39.jpg', sub_src: '39_1.png', title: '3CE LIQUID BRUSH EYE LINER #BROWN', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 40, src: '40.jpg', sub_src: '40_1.png', title: '3CE TRIPLE SHADOW #GO OVER', o_price: 21000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
    ],
// CHEEK
    [
        {item_no: 1, src: '1.jpg', sub_src: '1_1.png', title: '3CE MOOD RECIPE FACE BLUSH #NUDE PEACH', o_price: 18000
        , s_price: 13000, r_date: 999, sell_count: 999, desc: '낙엽 지는 길목에서 만난, 낭만적인 피치'},
        {item_no: 2, src: '2.jpg', sub_src: '2_1.png', title: '3CE MOOD RECIPE FACE BLUSH #MONO PINK', o_price: 18000
        , s_price: 15000, r_date: 999, sell_count: 999, desc: '몽환적인 보이스가 떠오르는, 감각적인 핑크'},
        {item_no: 3, src: '3.jpg', sub_src: '3_1.png', title: '3CE MOOD RECIPE FACE BLUSH #ROSE BEIGE', o_price: 18000
        , s_price: 0, r_date: 999, sell_count: 999, desc: '그윽하게 사라지는 가을 노을 빛, 우아한 로즈'},
        {item_no: 4, src: '4.jpg', sub_src: '4_1.png', title: '3CE NEW TAKE FACE BLUSHER', o_price: 20000
        , s_price: 17000, r_date: 999, sell_count: 999, desc: '새로운 프레임, 새로운 장면, 새로운 감살. 무한의 상상력과 경험을 느끼는 NEW TAKE'},
        {item_no: 5, src: '5.jpg', sub_src: '5_1.png', title: '[SPLIT SECOND] 3CE FACE BLUSH #CITY MAUVE', o_price: 18000
        , s_price: 0, r_date: 999, sell_count: 888, desc: '피부에 자연스럽게 발색되고 컬러가 오랜 시간 유지되는 페이스 블러쉬'},
        {item_no: 6, src: '6.jpg', sub_src: '6_1.png', title: '3CE VELVET LIQUID BLUSHER #SO ALIVE', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 888, desc: '여성스러운 분위기를 자아내는 세련된 톤다운 핑크'},
        {item_no: 7, src: '7.jpg', sub_src: '7_1.png', title: '3CE VELVET LIQUID BLUSHER #VIENNA ROSE', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '고풍스러운 한 송이 장미를 풍부하게 담아낸 우아한 로즈'},
        {item_no: 8, src: '8.jpg', sub_src: '8_1.png', title: '3CE FACE BLUSH #PURE CAKE', o_price: 18000
        , s_price: 0, r_date: 0, sell_count: 0, desc: '따뜻한 봄 햇살을 듬뿍 받아 감성 필터를 장착한 듯설레는 발레리나 핑크 컬러'},
        {item_no: 9, src: '9.jpg', sub_src: '9_1.png', title: '3CE VELVET LIQUID BLUSHER #RIDE FOR ME', o_price: 17000
        , s_price: 0, r_date: 0, sell_count: 0, desc: '신비로운과 웨어러블함이 공존하는 모브톤 로지'},
        {item_no: 10, src: '10.jpg', sub_src: '10_1.png', title: '3CE GLOW BEAM HIGHLIGHTER #REAR SIDE', o_price: 20000
        , s_price: 0, r_date: 0, sell_count: 0, desc: '차분하고 고급스러운 화이트골드 펄의 내추럴 아이보리'},
        {item_no: 11, src: '11.jpg', sub_src: '11_1.png', title: '3CE VELVET LIQUID BLUSHER #LIKE THAT', o_price: 17000
        , s_price: 14000, r_date: 0, sell_count: 0, desc: '성숙하며면서도 클래식한 무드를 완성시키는 청초한 살구 피치'},
        {item_no: 12, src: '12.jpg', sub_src: '12_1.png', title: '[3CE X TOILETPAPER] 3CE FACE BLUSH #LET ME STAY', o_price: 20000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 13, src: '13.jpg', sub_src: '13_1.png', title: '3CE FACE HIGHLIGHTER #OPEN SIDE', o_price: 22000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 14, src: '14.jpg', sub_src: '14_1.png', title: '3CE FACE BLUSH #DELECTABLE', o_price: 18000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 15, src: '15.jpg', sub_src: '15_1.png', title: '3CE FACE HIGHLIGHTER #ALL ROUNDER', o_price: 22000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 16, src: '16.jpg', sub_src: '16_1.png', title: '3CE CONTOUR SHADING #SOFT BROWN', o_price: 24000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 17, src: '17.jpg', sub_src: '17_1.png', title: '3CE FACE BLUSH #PEACH SPLASH', o_price: 18000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 18, src: '18.jpg', sub_src: '18_1.png', title: '3CE CONTOUR SHADING #ASH BROWN', o_price: 24000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 19, src: '19.jpg', sub_src: '19_1.png', title: '3CE VELVET LIQUID BLUSHER #CLASSIC MOOD', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 20, src: '20.jpg', sub_src: '20_1.png', title: '3CE FACE BLUSH #SOFT SALMON', o_price: 18000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 21, src: '21.jpg', sub_src: '21_1.png', title: '3CE SHEER LIQUID BLUSHER #SIDE PIECE', o_price: 17000
        , s_price: 13000, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 22, src: '22.jpg', sub_src: '22_1.png', title: '[FUTURE KIND] 3CE FACE BLUSH #MEAN PINK', o_price: 19000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 23, src: '23.jpg', sub_src: '23_1.png', title: '3CE GLOW BEAM HIGHLIGHTER #GO TO SHOW', o_price: 20000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 24, src: '24.jpg', sub_src: '24_1.png', title: '[3CE X TOILETPAPER] 3CE FACE BLUSH #FIG DIVE', o_price: 20000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 25, src: '25.jpg', sub_src: '25_1.png', title: '[FUTURE KIND] 3CE FACE BLUSH #RIGHT HERE', o_price: 19000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 26, src: '26.jpg', sub_src: '26_1.png', title: '3CE SHEER LIQUID BLUSHER #JOYFUL AFFAIR', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 27, src: '27.jpg', sub_src: '27_1.png', title: '[3CE X TOILETPAPER] 3CE MOOD RECIPE FACE BLUSH # ROSE BEIGE', o_price: 20000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 28, src: '28.jpg', sub_src: '28_1.png', title: '3CE FACE HIGHLIGHTER #GENTLE BEIGE', o_price: 22000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 29, src: '29.jpg', sub_src: '29_1.png', title: '3CE GLOW BEAM HIGHLIGHTER #TAKE A MOMENT', o_price: 20000
        , s_price: 17000, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 30, src: '30.jpg', sub_src: '30_1.png', title: '3CE PRO MULTI BLUSH COLOR PALETTE #SOFTENER', o_price: 59000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 31, src: '31.jpg', sub_src: '31_1.png', title: '3CE SHEER LIQUID BLUSHER #COZY PEACH', o_price: 17000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
    ],
// ACC
    [
        {item_no: 1, src: '1.jpg', sub_src: '1_1.png', title: '3CE POUCH_SMALL', o_price: 9900
        , s_price: 0, r_date: 999, sell_count: 999, desc: '가볍지만 톡톡한 두께감으로 모양이 망가지지 않아요. 실용적이지만 유니크한 디자인의 멀티파우치, 작은 사이즈로도 만나보세요.'},
        {item_no: 2, src: '2.webp', sub_src: '2_1.png', title: '3CE WASH BAG', o_price: 24000
        , s_price: 19000, r_date: 999, sell_count: 999, desc: '세면도구부터 메이크업 제품까지 모든뷰티템을 보관하기 가장 좋은 방법 여행 워시백도 3CE로 예쁘게 수납하자'},
        {item_no: 3, src: '3.jpg', sub_src: '3_1.png', title: '3CE FLAT POUCH_SMALL', o_price: 7000
        , s_price: 0, r_date: 999, sell_count: 999, desc: '#납작한게메리트 #날씬한부피감 #모든TPO사용가능 #가벼움끝판왕 #스퀘어파우치'},
        {item_no: 4, src: '4.jpg', sub_src: '4_1.png', title: '3CE POUCH', o_price: 12000
        , s_price: 9000, r_date: 999, sell_count: 999, desc: '가볍지만 톡톡한 두께감으로 모양이 망가지지 않아요. 실용적이지만 유니크한 디자인의 멀티파우치'},
        {item_no: 5, src: '5.jpg', sub_src: '5_1.png', title: '3CE SQUARE MINI HAND MIRROR', o_price: 7000
        , s_price: 0, r_date: 999, sell_count: 888, desc: '휴대하기 좋은 미니 사이즈, 3가지 컬러의 3CE 미니 사각 손거울!'},
        {item_no: 6, src: '6.jpg', sub_src: '6_1.png', title: '3CE POUCH_MINI', o_price: 8000
        , s_price: 5000, r_date: 999, sell_count: 888, desc: '#제대로취향저격 #수납력도좋은 #심플미니파우치 #핸드캐리 #미니멀짱짱템'},
        {item_no: 7, src: '7.jpg', sub_src: '7_1.png', title: '3CE MOOD RECIPE POUCH_MINI', o_price: 8000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '#스윗하게취향저격 #수납력도좋은 #심플미니파우치 #핸드캐리 #미니멀짱짱템'},
        {item_no: 8, src: '8.jpg', sub_src: '8_1.png', title: '3CE WASH BAG_SMALL #BLACK', o_price: 19000
        , s_price: 0, r_date: 0, sell_count: 0, desc: '똑똑한 수납력을 자랑했던 3CE WASH BAG, 그 모습 그대로 간직한 채 한층 가볍게 돌아왔다!'},
        {item_no: 9, src: '9.jpg', sub_src: '9_1.png', title: '3CE MOOD RECIPE SQUARE HAND MIRROR #ROSE BEIGE', o_price: 9000
        , s_price: 0, r_date: 0, sell_count: 0, desc: '#이런큰거울또없습니다 #빠져드는컬러 #분위기득템의계절'},
        {item_no: 10, src: '10.jpg', sub_src: '10_1.png', title: '3CE PINK RUMOUR POUCH_SMALL', o_price: 9900
        , s_price: 0, r_date: 0, sell_count: 0, desc: '3CE 인기 아이템 파우치 핑크루머 버전, 3CE 로고가 자수로 들어간 유니크한 디자인의 멀티 파우치'},
        {item_no: 11, src: '11.jpg', sub_src: '11_1.png', title: '3CE WASH BAG_SMALL #PINK BEIGE', o_price: 19000
        , s_price: 15000, r_date: 0, sell_count: 0, desc: '똑똑한 수납력을 자랑했던 3CE WASH BAG, 그 모습 그대로 간직한 채 한층 가볍게 돌아왔다!'},
        {item_no: 12, src: '12.jpg', sub_src: '12_1.png', title: '3CE SQUARE HAND MIRROR', o_price: 9000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 13, src: '13.jpg', sub_src: '13_1.png', title: '[3CE X TOILETPAPER] 3CE OVAL HAND MIRROR', o_price: 15000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 14, src: '14.webp', sub_src: '14_1.png', title: '3CE PADDED BUCKET BAG', o_price: 19000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 15, src: '15.jpg', sub_src: '15_1.png', title: '3CE PINK RUMOUR POUCH', o_price: 12000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 16, src: '16.jpg', sub_src: '16_1.png', title: '[3CE X TOILETPAPER] 3CE PADDED CUBE POUCH', o_price: 19000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 17, src: '17.jpg', sub_src: '17_1.png', title: '3CE OVAL HAND MIRROR', o_price: 10000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 18, src: '18.jpg', sub_src: '18_1.png', title: '3CE TO GO POUCH', o_price: 28000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
        {item_no: 19, src: '19.jpg', sub_src: '19_1.png', title: '[3CE X TOILETPAPER] 3CE PADDED SHOULDER BAG', o_price: 30000
        , s_price: 0, r_date: 999, sell_count: 0, desc: '제품에 대한 설명을 입력해주세요.'},
    ],
    // best
    [{item_no: 1, src: '1.jpg', sub_src: '1_1.png', title: '3CE BLUR FILTER POWDER #PEACHY', o_price: 19000
    , s_price: 0, r_date: 999, sell_count: 888, desc: '어플 없이 무보정 실물 승부! 순식간에 미모 지수가 상승하는 \'3CE 블러 필터 파우더\''},
    {item_no: 2, src: '2.webp', sub_src: '2_1.png', title: '3CE MAKEUP FIX POWDER', o_price: 28000
    , s_price: 0, r_date: 999, sell_count: 888, desc: '픽서를 한듯 메이크업의 밀착, 고정, 지속을 돕는 보송한 픽시드 파우더'},
    {item_no: 3, src: '3.jpg', sub_src: '3_1.png', title: '3CE BLUR WATER TINT', o_price: 17000
    , s_price: 0, r_date: 999, sell_count: 888, desc: '#수채화틴트로_생기있게_블러링! #생기블러링 #보송픽싱'},
    {item_no: 4, src: '4.jpg', sub_src: '4_1.png', title: '3CE GLOW LIP COLOR #SMOKY RED', o_price: 20000
    , s_price: 0, r_date: 999, sell_count: 888, desc: '입술을 촉촉하고 편안하게 케어하고 풍부한 광택감을 살려주는 글로우 립 컬러'},
    {item_no: 5, src: '5.jpg', sub_src: '5_1.png', title: '[SPLIT SECOND] 3CE MULTI EYE COLOR PALETTE #AUTO FOCUS', o_price: 39000
    , s_price: 0, r_date: 999, sell_count: 888, desc: '톤에 얽매이지 않고 \'모두가 예쁘게 즐길 수 있는 쿨 무드\'3CE에서 만나는 특별한 로지 모브 스펙트럼'},
    {item_no: 6, src: '6.jpg', sub_src: '6_1.png', title: '3CE MULTI EYE COLOR PALETTE #DEAR NUDE', o_price: 39000
    , s_price: 0, r_date: 999, sell_count: 888, desc: '부드러움이 깊어지는 9가지 매트를 담아내어 눈가에 그윽한 분위기가 스며드는 아이메이크업을 완성시켜 줍니다.'},
    {item_no: 7, src: '7.jpg', sub_src: '7_1.png', title: '[SPLIT SECOND] 3CE FACE BLUSH #CITY MAUVE', o_price: 18000
    , s_price: 0, r_date: 999, sell_count: 888, desc: '피부에 자연스럽게 발색되고 컬러가 오랜 시간 유지되는 페이스 블러쉬'},
    {item_no: 8, src: '8.jpg', sub_src: '8_1.png', title: '3CE VELVET LIQUID BLUSHER #SO ALIVE', o_price: 17000
    , s_price: 0, r_date: 999, sell_count: 888, desc: '여성스러운 분위기를 자아내는 세련된 톤다운 핑크'}
    ],


    // new
    [{item_no: 1, src: '1.jpg', sub_src: '1_1.png', title: '3CE SHIMMER MAKEUP FIXER', o_price: 17000
    , s_price: 0, r_date: 0, sell_count: 0, desc: '메이크업 전, 후에 사용하여 방금 메이크업한 듯 오랫동안 유지시켜 주는 쉬머 메이크업 픽서'},
    {item_no: 2, src: '2.jpg', sub_src: '2_1.png', title: '3CE GLOW BEAM', o_price: 27000
    , s_price: 0, r_date: 0, sell_count: 0, desc: '피부에 반사판 효과를 주는 복숭앗빛 글로우 빔'},
    {item_no: 3, src: '3.jpg', sub_src: '3_1.png', title: '3CE SKIN FIT COVER LIQUID CONCEALER', o_price: 17000
    , s_price: 0, r_date: 0, sell_count: 0, desc: '나에게 딱 맞는 베이스 메이크업을 위한 컨실러'},
    {item_no: 4, src: '4.jpg', sub_src: '4_1.png', title: '3CE FACIAL CLEANSING OIL', o_price: 22000
    , s_price: 0, r_date: 0, sell_count: 0, desc: '#믿고쓰는 #모공프라이머 #롱래스팅메이크업비결 #모공지우개'},
    {item_no: 5, src: '5.jpg', sub_src: '5_1.png', title: '3CE SOFT MATTE LIPSTICK #WAY BACK', o_price: 19000
    , s_price: 0, r_date: 0, sell_count: 0, desc: '부드럽고 가벼운 텍스처가 입술을 보송하고 편안하게 연출해주는 고발색 소프트 매트 립스틱'},
    {item_no: 6, src: '6.jpg', sub_src: '6_1.png', title: '3CE BLURRING LIQUID LIP #DELICATE SOUL', o_price: 17000
    , s_price: 0, r_date: 0, sell_count: 0, desc: '입술에 닿는 순간 사르르 녹아드는 셔벗 제형이 보송하게 마무리되며 입술에 자연스레 물들며 밀착됩니다.'},
    {item_no: 7, src: '7.jpg', sub_src: '7_1.png', title: '3CE VELVET LIP TINT #DAFFODIL', o_price: 17000
    , s_price: 0, r_date: 0, sell_count: 0, desc: '부드럽고 가벼운 텍스쳐로 입술이 보송하고 편안하며 레이어링할수록 깊이감을 더하는 소프트 매트 립스틱'},
    {item_no: 8, src: '8.jpg', sub_src: '8_1.png', title: '[MATTE] 3CE MOOD RECIPE LIP COLOR #909 SMOKED ROSE', o_price: 19000
    , s_price: 0, r_date: 0, sell_count: 0, desc: '부드럽고 가벼운 텍스쳐로 입술이 보송하고 편안하며 레이어링할수록 깊이감을 더하는 소프트 매트 립스틱'},
    {item_no: 9, src: '9.jpg', sub_src: '9_1.png', title: '3CE MULTI EYE COLOR PALETTE #BUTTER CREAM', o_price: 39000
    , s_price: 0, r_date: 0, sell_count: 0, desc: '톤으로 정하는 무드 모멘트'},
    {item_no: 10, src: '10.jpg', sub_src: '10_1.png', title: '3CE MINI MULTI EYE COLOR PALETTE #SIDE BY SIDE', o_price: 24000
    , s_price: 0, r_date: 0, sell_count: 0, desc: '오묘하고 혁신적인 컬러들을 조화롭게 구성하여 모던한 룩을 완성하는 모브'},
    {item_no: 11, src: '11.jpg', sub_src: '11_1.png', title: '3CE MINI MULTI EYE COLOR PALETTE #BROWN RUM', o_price: 24000
    , s_price: 0, r_date: 0, sell_count: 0, desc: '지금까지의 오렌지브라운 컬러를 특별하게 재해석하여 남들과 다른 세련되면서도 빈티지한 컬러감의 향연'},
    {item_no: 12, src: '12.jpg', sub_src: '12_1.png', title: '3CE MINI MULTI EYE COLOR PALETTE #ROSE LATTE', o_price: 24000
    , s_price: 0, r_date: 0, sell_count: 0, desc: '클래식한 라떼에 말린 장미 한송이를 물들인 듯 부드럽고 로맨틱한 로즈 빛 모멘트'},
    {item_no: 13, src: '13.jpg', sub_src: '13_1.png', title: '3CE FACE BLUSH #PURE CAKE', o_price: 18000
    , s_price: 0, r_date: 0, sell_count: 0, desc: '따뜻한 봄 햇살을 듬뿍 받아 감성 필터를 장착한 듯설레는 발레리나 핑크 컬러'},
    {item_no: 14, src: '14.jpg', sub_src: '14_1.png', title: '3CE VELVET LIQUID BLUSHER #RIDE FOR ME', o_price: 17000
    , s_price: 0, r_date: 0, sell_count: 0, desc: '신비로운과 웨어러블함이 공존하는 모브톤 로지'},
    {item_no: 15, src: '15.jpg', sub_src: '15_1.png', title: '3CE GLOW BEAM HIGHLIGHTER #REAR SIDE', o_price: 20000
    , s_price: 0, r_date: 0, sell_count: 0, desc: '차분하고 고급스러운 화이트골드 펄의 내추럴 아이보리'},
    {item_no: 16, src: '16.jpg', sub_src: '16_1.png', title: '3CE VELVET LIQUID BLUSHER #LIKE THAT', o_price: 17000
    , s_price: 0, r_date: 0, sell_count: 0, desc: '성숙하며면서도 클래식한 무드를 완성시키는 청초한 살구 피치'},
    {item_no: 17, src: '17.jpg', sub_src: '17_1.png', title: '3CE WASH BAG_SMALL #BLACK', o_price: 19000
    , s_price: 0, r_date: 0, sell_count: 0, desc: '똑똑한 수납력을 자랑했던 3CE WASH BAG, 그 모습 그대로 간직한 채 한층 가볍게 돌아왔다!'},
    {item_no: 18, src: '18.jpg', sub_src: '18_1.png', title: '3CE MOOD RECIPE SQUARE HAND MIRROR #ROSE BEIGE', o_price: 9000
    , s_price: 0, r_date: 0, sell_count: 0, desc: '#이런큰거울또없습니다 #빠져드는컬러 #분위기득템의계절'},
    {item_no: 19, src: '19.jpg', sub_src: '19_1.png', title: '3CE PINK RUMOUR POUCH_SMALL', o_price: 9900
    , s_price: 0, r_date: 0, sell_count: 0, desc: '3CE 인기 아이템 파우치 핑크루머 버전, 3CE 로고가 자수로 들어간 유니크한 디자인의 멀티 파우치'},
    {item_no: 20, src: '20.jpg', sub_src: '20_1.png', title: '3CE WASH BAG_SMALL #PINK BEIGE', o_price: 19000
    , s_price: 0, r_date: 0, sell_count: 0, desc: '똑똑한 수납력을 자랑했던 3CE WASH BAG, 그 모습 그대로 간직한 채 한층 가볍게 돌아왔다!'}
    ],
// review
    [
        {item_no: 1, src: '1.jpg', sub_src: '1_1.png', title: '들뜨지않고 맘에들어요!', star: '⭐5',desc: '집에서는 가루형태 파우더사용해서 여행가거나 평소 가지고 다닐수없어 고민하던차에 이번 콜라보 제품에 파우더 있길래 구매했어요'},
        {item_no: 2, src: '2.jpg', sub_src: '2_1.png', title: '피부보정이 잘 돼요',star:'⭐5', desc: '밝은 걸 사서 그런지 매끈하게 도자기피부같은거 그런 깨끗함이 좋아요'},
        {item_no: 3, src: '3.jpg', sub_src: '3_1.png', title: '진짜 지속 오래가요!!!',star:'⭐5', desc: '덧바르기가 너무 귀찮아서 오래 지속되는 틴트 찾다가 사게 됐는데 대만족입니다!!!!!!'},
        {item_no: 4, src: '4.jpg', sub_src: '4_1.png', title: '너무 만족해요', star:'⭐5', desc: '벨벳 같이 부드럽고 잘발려요 발림도 좋고요 너무 괜찮은것 같아요 스타일난다 번창하세요'},
        {item_no: 5, src: '5.jpg', sub_src: '5_1.png', title: '다 쓰고 세일이라 또 구매했어요', star:'⭐5', desc: '색상이 자연스럽고 그릴때 적당히 탄력이있어서 그리기도 편해요 지속력도 만족합니다 굿굿'},
        {item_no: 6, src: '6.jpg', sub_src: '6_1.png', title: '세일찬스 조아요!', star:'⭐5', desc: '색감조화가 너무 조아서 바로 그매 ㅠㅠ 원래 눈화장 잘 안하는데 이뻐서 겟 햇는데 후회 안대네영'},
        {item_no: 7, src: '7.jpg', sub_src: '7_1.png', title: '이쁜아이들로만 구성되있어요', star:'⭐5', desc: '봄여름가을겨울 사계절내내 요고하나있으면 블러셔 필요없겠어요'},
        {item_no: 8, src: '8.jpg', sub_src: '8_1.png', title: '소량만 발라도 발림성도 좋고 색상도 잘 나와요', star:'⭐5', desc: '색상 제가 생각한것과 동일하고 너무 이쁩니다 한달 사용하면서 후회 한적 한번없고 최애 탬입니다'},
        {item_no: 9, src: '9.jpg', sub_src: '9_1.png', title: '사이즈도 넉넉하고 이뻐요', star:'⭐5', desc: '실용적이면서 이뻐요.욕심나서 블랙도 주문할려구용 ㅎㅎㅎ'},
        {item_no: 10, src: '10.jpg', sub_src: '10_1.png', title: '완전 맘에들어요! ', star:'⭐5', desc: '애들 등교시킬때 차키 카드 넣어 들고 다니기 편해요'}
    ]
]
console.log(ITEM_LIST)

const list_arr = ['celeb_pick', 'best_item', 'MD_pick', 'review', 'product']
const cate_arr = ['face', 'lip', 'eyes', 'cheek' , 'acc', 'best', 'new', 'review'];
const menu_arr = ['FACE', 'LIP', 'EYES', 'CHEEK', 'ACC', 'BODY'];
const sub_menu_arr = [];


function get_url_info(key){
    let url = location.href;
    url = url.split("?")[1];

    if(url.length > 1){
        url=url.split("&")
        for(let i=0; i<url.length;i++){
            let tmp_url = url[i].split('=');

            if(tmp_url[0] == key){
                return tmp_url[1].split('#')[0]
            }
        }
    }
    else{
        console.log("없어")
    }
}


function load_items(list_no, cate_no, qty){
    
    let item_length = $(`${list_arr[list_no]} .item_box div`).length;
    
    let qty_limit = (item_length + qty)>ITEM_LIST[cate_no].length?ITEM_LIST[cate_no].length:(item_length+qty);
    
    
    let for_swiper = '';
    let non_swiper = '';
    if(list_no == 1 || list_no == 3){
        for_swiper = `<div class="${list_arr[list_no]}_item_box swiper-slide">`
    }
    else{
        non_swiper = `<div class="${list_arr[list_no]}_item_box">`
    }
    
    for(let i=item_length; i<qty_limit; i++){
        
        let item = ITEM_LIST[cate_no][i];
        
        let no_sale;
        let sale;
        if(item.s_price==0){
            no_sale = `<span class="item_s_price">${item.o_price.toLocaleString('ko')}원</span>`
        }
        else{
            sale = `<span class="item_o_price">${item.o_price.toLocaleString('ko')}원</span>
            <span class="item_s_price">${item.s_price.toLocaleString('ko')}원</span>`
        }
        let list = `${list_no==1?for_swiper:non_swiper}
                        <a href="item.html?cate_no=${cate_no}&item_no=${item.item_no}">
                            <div class="item_img">
                                <img src = "./img/3ce/category/${cate_arr[cate_no]}/cate_${cate_arr[cate_no]}${item.src}" class="item_main_img">
                                <img src = "./img/3ce/category/${cate_arr[cate_no]}/cate_${cate_arr[cate_no]}${item.sub_src}" class="item_sub_img">
                            </div>
                            <div class = "item_info">
                                <div class="item_title">${item.title}</div>
                                ${item.s_price==0?no_sale:sale}
                            </div>
                        </a>
                    </div>`
                    
        $(list).appendTo(`#${list_arr[list_no]} .item_box`);
        ttt()
    }

}

function load_review(list_no, cate_no, qty){
    
    let item_length = $(`${list_arr[list_no]} .item_box div`).length;
    
    let qty_limit = (item_length + qty)>ITEM_LIST[cate_no].length?ITEM_LIST[cate_no].length:(item_length+qty);
    

    for(let i=item_length; i<qty_limit; i++){
        
        let item = ITEM_LIST[cate_no][i];
        
        let list = `<div class="${list_arr[list_no]}_item_box swiper-slide">
                        <div class="item_img">
                            <img src = "./img/3ce/category/${cate_arr[cate_no]}/cate_${cate_arr[cate_no]}${item.src}" class="item_main_img">
                            <img src = "./img/3ce/category/${cate_arr[cate_no]}/cate_${cate_arr[cate_no]}${item.sub_src}" class="item_sub_img">
                        </div>
                        <div class = "review_info">
                            <div class="review_star">${item.star}</div>
                            <div class = "review_txt">
                                <div class="reveiw_title">${item.title}</div>
                                <div class="reveiw_desc">${item.desc}</div>
                            </div>
                        </div>
                    </div>`
                    
        $(list).appendTo(`#${list_arr[list_no]} .item_box`);
        ttt2()
    }

}

function load_product(cate_no, qty){
    let item_length = $(`${list_arr[5]} .item_box div`).length;
    
    let qty_limit = (item_length + qty)>ITEM_LIST[cate_no].length?ITEM_LIST[cate_no].length:(item_length+qty);

    
    
    for(let i=item_length; i<qty_limit; i++){
        let item = ITEM_LIST[cate_no][i]
        
        let no_sale;
        let sale;
        if(item.s_price==0){
            no_sale = `<span class="item_s_price">${item.o_price.toLocaleString('ko')}원</span>`
        }
        else{
            sale = `<span class="item_o_price">${item.o_price.toLocaleString('ko')}원</span>
                    <span class="item_s_price">${item.s_price.toLocaleString('ko')}원</span>`
        }
        let list = `<div class="product_item_box">
                        <a href = "item.html?cate_no=${cate_no}&item_no=${item.item_no}">
                            <div class="item_img">
                                <img src="./img/3ce/category/${cate_arr[cate_no]}/cate_${cate_arr[cate_no]}${item.src}" alt="" class="item_main_img">
                                <img src="./img/3ce/category/${cate_arr[cate_no]}/cate_${cate_arr[cate_no]}${item.sub_src}" alt="" class="item_sub_img">
                                <div class="img_menu">
                                    <div class="icon like_icon"></div>
                                    <div class="icon cart_icon"></div>
                                </div>
                            </div>
                            <div class="item_info">
                                <div class="item_title">${item.title}</div>
                                <div class="item_desc">${item.desc}</div>
                                ${item.s_price==0?no_sale:sale}
                            </div>
                        </a>
                    </div>`
                    
        $(list).appendTo(`.item_box`);
    }


}