//get all images with data-src attribute
let imagesToLoad =
document.querySelectorAll("img[data-src]");

const loadImages = (image)=>{
    image.setAttribute("src",
image.getAttribute("data-src"));
    image.onLoad = ()=>{
        image.removeAttribute("data-src");
    };
};

imagesToLoad.forEach((img)=>{
    loadImages(img);
});

//optional parameters

// const imgOptions={
//     theshold: 0,
//     rootMargin: "0px 0px 50px 0px"
// };

// const loadImages=(image)=>{
//     image.setAttribute('src', image.getAttribute('data-src'));
//     image.onLoad=()=>(image.removeAttribute('data-src'));
// };

//check to see if the Intersection Observer is supported

// if('IntersectionObserver'in window){
//     const imgObserver=newIntersectionObserver((items, observer)=>{
//         items.forEach((item)=>{
//             if(item.isIntersecting){
//                 loadImages(item.target);
//                 observer.unobserved(item.target);
//             }
//         })
//     })

// //loop through each image to see what to load
//     imagesToLoad.forEach((img)=>{
//         observer.observe(img);
//     })
// }
//     else{
//         imagesToLoad.forEach((img)=>{
//             loadImages(img);
//         });
//     }

    