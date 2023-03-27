//Gallery Image Array (Images from Pexels.com)// 
let images =  [
    {
        url: "images/img1.jpg",
        description: "Lucy"
    },
    {
        url: "images/img2.jpg",
        description: "Paws"
    },
    {
        url: "images/img3.jpg",
        description: "Carol and Sue"
    },
    {
        url: "images/img4.jpg",
        description: "Beth and Moe"
    },
    {
        url: "images/img5.jpg",
        description: "Louis"
    },
    {
        url: "images/img6.jpg",
        description: "Cupcake"
    },
    {
        url: "images/img7.jpg",
        description: "Earl"
    },
    {
        url: "images/img8.jpg",
        description: "Lilli, Oreo and Mouse"
    },
    {
        url: "images/img9.jpg",
        description: "Fluffy, Snowflake and Blue"
    },
    {
        url: "images/img10.jpg",
        description: "The Little Crew"
    },
    {
        url: "images/img11.jpg",
        description: "Garfield"
    },
    {
        url: "images/img12.jpg",
        description: "Lenny"
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
    img.alt = images[i].description;
    gallery.appendChild(img);
}

gallery.addEventListener("click", function(event) {
    if (event.target.tagName === "IMG") {
        modal.style.display = "flex";
        modalImage.src = event.target.src;
        modalDescription.textContent = event.target.alt;
    }
});

let closeButton = document.getElementById("close");

closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});