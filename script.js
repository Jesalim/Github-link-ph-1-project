const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

var submit = document.getElementById("submit");
submit.addEventListener("click", function() {
    var commentBoxValue = document.getElementById("comment-box").value;

    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);

});


const getImage = async function() {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    selectRandomImage(images);
};


//pull a random whole number will be the index of the random image.
const selectRandomImage = function(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    displayImage(randomImage);
};


const displayImage = function(randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    imgDiv.classList.remove("hide");
    img.setAttribute("src", imageAddress);
    console.log(imageAddress);

};

button.addEventListener("click", function() {
    getImage();
});


// 
// Set the intial like to 0
function likeClick(like = 0) {

    // Return a new function that is called when
    // the click on the button is called
    return function(e) {

        // Find the closest `bar` parent
        const bar = e.target.closest('.bar');

        // Grab the `p` element within that parents child elements
        const likeNum = bar.querySelector('p');

        // Update the like variable
        likeNum.textContent = ++like;
    }
}

// Cache the elements
const getLike = document.querySelectorAll('.like');

// For every element add a listener that
// calls the function that initialises the count and
// returns the function that *is* called when the
// button is clicked, and updates the count
getLike.forEach(like => like.addEventListener('click', likeClick(), false));