//const Slider = () => {
//    const [slideIndex, setSlideIndex] = useState(0);
//    const handleClick = (direction) => {
//      if (direction === "left") {
//        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
//      } else {
//        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
//      }
//    };
//}

//const image = document.querySelector(".image");
//const allImages = document.querySelectorAll('.image img');
//
//const prevBtn = document.querySelector(".arrow");
//const nextBtn = document.querySelector(".arrow2");
//
//let counter = 1;
//const size = allImages[0].clientWidth;
//
//image.style.transform = 'translatex(' + (-size * counter) + 'px)';
//
//
////Button Listener
//
//nextBtn.addEventListener('click', ()=>{
//    image.style.transition = "transform 0.4s ease-in-out";
//    counter++;
//    image.style.transform = 'translatex(' + (-size * counter) + 'px)';
//
//});
//
//prevBtn.addEventListener('click', ()=>{
//    image.style.transition = "transform 0.4s ease-in-out";
//    counter--;
//    image.style.transform = 'translatex(' + (-size * counter) + 'px)';
//
//});
//
//image.addEventListener('transitionend', ()=> {
//    if(allImages[counter].id === 'lastClone') {
//    image.style.transition = "none";
//    counter = allImages.length -2;
//    image.style.transform = 'translatex(' + (-size * counter) + 'px)';
//    }
//    if(allImages[counter].id === 'firstClone') {
//        image.style.transition = "none";
//        counter = allImages.length - counter;
//        image.style.transform = 'translatex(' + (-size * counter) + 'px)';
//    
//        }
//})