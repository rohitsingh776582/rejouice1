


function call() {

    var page1 = document.querySelector(".page1-content");
    var coursor = document.querySelector(".cursor");

    page1.addEventListener("mousemove", function (dets) {


        gsap.to(coursor, {

            x: dets.x,
            y: dets.y
        })
    })


    page1.addEventListener("mouseenter", function () {


        gsap.to(coursor, {

            scale: 1

        })
    });

    page1.addEventListener("mouseleave", function () {

        gsap.to(coursor, {

            scale: 0
        })
    })

}

call();


function call2() {

    var page3 = document.querySelector(".mainpage4");
    var coursor3 = document.querySelector(".cursor2");

    page3.addEventListener("mousemove", function (dets) {

        gsap.to(coursor3, {

            x: dets.x,
            y: dets.y
        })

    })

    page3.addEventListener("mouseenter", function () {


        gsap.to(coursor3, {

            scale: 1

        })
    });

    page3.addEventListener("mouseleave", function () {

        gsap.to(coursor3, {

            scale: 0
        })
    })

}

call2();

var swiper = new Swiper(".mySwiper", {
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

