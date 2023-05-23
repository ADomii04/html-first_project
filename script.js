const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPagex, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showHideIcons = () => {
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon =>
    {
        icon.addEventListener("click", () =>{
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
            setTimeout(() => showHideIcons(), 60);
        })
    })

const dragStart = (e) =>
{
    isDragStart = true;
    prevPagex = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) =>
{
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging"); 
    let positionDif = e.pageX - prevPagex;
    carousel.scrollLeft = prevScrollLeft - positionDif;
}

const dragStop = () =>
{
    isDragStart = false;
    carousel.classList.remove("dragging"); 
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
