const mainSlide = new Swiper ('#portfolio',{
    slidesPerView: 1,
    loop : false,
    mousewheel: true,
    direction:'vertical',
    speed : 1000,
    pagination:{
        el: '.port-nav',
        clickable : true,
    }
})
const navBullet = document.querySelectorAll('.swiper-pagination-bullet')
console.log(navBullet)
/* 0 */
navBullet[0].innerHTML = "<span>MAIN</span><span></span>"
navBullet[0].children[0].classList.add('bullet-text')
navBullet[0].children[1].classList.add('bullet')
/* 1 */
navBullet[1].innerHTML = "<span>WHO AM I</span><span></span>"
navBullet[1].children[0].classList.add('bullet-text')
navBullet[1].children[1].classList.add('bullet')
/* 2 */
navBullet[2].innerHTML = "<span>CAREER</span><span></span>"
navBullet[2].children[0].classList.add('bullet-text')
navBullet[2].children[1].classList.add('bullet')
/* 3 */
navBullet[3].innerHTML = "<span>PROJECT</span><span></span>"
navBullet[3].children[0].classList.add('bullet-text')
navBullet[3].children[1].classList.add('bullet')
/* 4 */
navBullet[4].innerHTML = "<span>OTHERS</span><span></span>"
navBullet[4].children[0].classList.add('bullet-text')
navBullet[4].children[1].classList.add('bullet')
/* 5 */
navBullet[5].innerHTML = "<span>QR</span><span></span>"
navBullet[5].children[0].classList.add('bullet-text')
navBullet[5].children[1].classList.add('bullet')

const otherSlide = new Swiper ('#other-slide',{
    slidesPerView: 1,
    centeredSlides : true,
    loop : true,
    speed : 500,
    draggable: true,
    spaceBetween : 30,
    releaseOnEdges: true,
})

/* project autoplay 기능 */

const projectSlide = new Swiper(".project-slide", {
    pagination: {
        el: ".project-nav",
        type: "progressbar",
    },
    slidesPerView: 1,
    loop : false,
    mousewheel: true,
    direction:'vertical',
    releaseOnEdges: true,
    speed : 500,
    reverseDirection : true,
    nested: true,
    draggable: false,
});

const otherpic = document.querySelectorAll('#other-slide > .swiper-wrapper > .swiper-slide > a')
const afterPic = document.querySelector('.after-pic')
console.log(otherpic)
console.log(afterPic)

for(let i of otherpic){
    console.log(i)
    i.addEventListener('click',() => {
        afterPic.children[0].src = i.children[0].src
        afterPic.style.zIndex = 999;
        afterPic.style.opacity = 1
        afterPic.style.transition = "opacity 0.3s";
        afterPic.style.display = "block";
        mainSlide.mousewheel.disable();
        afterPic.addEventListener('click', () => {
            afterPic.style.zIndex = 1
            afterPic.style.opacity = 0
            afterPic.style.transition = "display 0.3s"
            afterPic.style.display = "none"
            mainSlide.mousewheel.enable();
        })
    })
}