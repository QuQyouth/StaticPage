$(function() {

    // Initialize Swiper

    var swiper = new Swiper(".comm", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // tab切换
    $('.bar li').click(function() {
        $(this).addClass('current').siblings().removeClass('current');
    });
    // 登录切换
    $('.mine-swi').hover(function() {
        $('.other').slideToggle();
    });
    //关注
    let focus = 1;
    $('.focus').click(function() {
        focus++;
        if (focus % 2 == 0) {
            $(this).css("color", "#F5A623");
        } else {
            $(this).css("color", "#333");
        }
    });
    // 成功案例

    //点击pre-next实现滚动
    $('.pre').click(function() {
        $('.case-img-tab').attr('src', './upload/item1.jpg')
    })
    $('.next').click(function() {
        $('.case-img-tab').attr('src', './upload/item3.jpg')
    })

})