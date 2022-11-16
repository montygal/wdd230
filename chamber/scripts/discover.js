//get all images with data-src attribute
let imagesToLoad = document.querySelectorAll("img[data-src]");

function loadImage(image){
    const srs = image.getAttribute("data-src");
    image.setAttribute("src", srs);
        
    image.onLoad = ()=>{
        image.removeAttribute("data-src");
    };
};

//check to see if the Intersection Observer is supported
if('IntersectionObserver'in window){
    const imgObserver = new IntersectionObserver((items, observer)=>{
        items.forEach((item)=>{
            if(item.isIntersecting){
                loadImage(item.target);
                observer.unobserved(item.target);
            }
        })
    });

    //loop through each image to see what to load
    imagesToLoad.forEach((img)=>{
        imgObserver.observe(img);
    })
}
else{
    imagesToLoad.forEach((img)=>{
        loadImage(img);
    });
}

    