//Gallery Image Array// 
let images =  [
    {
        url: "images/img1.jpg",
        description: "Image 1"
    },
    {
        url: "images/img2.jpg",
        description: "Image 2"
    },
    {
        url: "images/img3.jpg",
        description: "Image 3"
    },
    {
        url: "images/img4.jpg",
        description: "Image 4"
    },
    {
        url: "images/img5.jpg",
        description: "Image 5"
    },
    {
        url: "images/img6.jpg",
        description: "Image 6"
    },
    {
        url: "images/img7.jpg",
        description: "Image 7"
    },
    {
        url: "images/img8.jpg",
        description: "Image 8"
    },
    {
        url: "images/img9.jpg",
        description: "Image 9"
    },
    {
        url: "images/img10.jpg",
        description: "Image 10"
    },
    {
        url: "images/img11.jpg",
        description: "Image 11"
    },
    {
        url: "images/img12.jpg",
        description: "Image 12"
    }
];

let gallery = document.getElementById("gallery");
let modal = document.getElementById("modal");
let modalImageContainer = document.getElementById("modal-img-container");
let modalImage = document.getElementById("modal-img");
var modalDescription = document.getElementById("modal-description");

for (let i = 0; i < images.length; i++) {
    let img = document.createElement("img");
    img.src = images[i].url;
    img.alt = images[i].caption;
    gallery.appendChild(img);
}

gallery.addEventListener("click", function(event) {
    if (event.target.tagName === "IMG") {
        modal.style.display = "flex";
        modalImage.src = event.target.src;
        modalCaption.textContent = event.target.alt;
    }
});

let closeButton = document.getElementById("close");

closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});