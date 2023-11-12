document.addEventListener('DOMContentLoaded', function () {

    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var PaperImg = document.getElementById('PaperWriting');
    var FirstSlideImg = document.getElementById('FirstSlideImg');
    var SecondSlideImg = document.getElementById('SecondSlideImg');
    var ThirdSlideImg = document.getElementById('ThirdSlideImg');
    var PaintingImg = document.getElementById('PaintingImg');
    var RoofImg = document.getElementById('RoofImg');
    var DecoImg = document.getElementById('DecoImg');
    var FloorImg = document.getElementById('FloorImg');

    if (screenWidth >= 992) {
        PaperImg.src = './Stock Photo/Paper-Writing.webp';
        FirstSlideImg.src = './Stock Photo/Empty-Building2.webp';
        SecondSlideImg.src = './Stock Photo/Empty-Building.webp';
        ThirdSlideImg.src = './Stock Photo/Excavator.webp';
        PaintingImg.src = './Stock Photo/Painting.webp';
        RoofImg.src = './Stock Photo/Roof.webp';
        DecoImg.src = './Stock Photo/Home Deco.webp';
        FloorImg.src = './Stock Photo/Floor.webp';
    }else if (screenWidth >= 576) {
        ThirdSlideImg.src = './Stock Photo/Excavator-md.webp';
    }else {
        PaperImg.src = './Stock Photo/Paper-Writing-sm.webp';
        SecondSlideImg.src = './Stock Photo/Empty-Building-sm.webp';
        ThirdSlideImg.src = './Stock Photo/Excavator-sm.webp';
        PaintingImg.src = './Stock Photo/Painting-sm.webp';
        RoofImg.src = './Stock Photo/Roof-sm.webp';
        DecoImg.src = './Stock Photo/Home Deco-sm.webp';
        FloorImg.src = './Stock Photo/Floor-sm.webp';
    }


    const scrollLinks = document.querySelectorAll('[data-scroll]');

    scrollLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-scroll');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });
})