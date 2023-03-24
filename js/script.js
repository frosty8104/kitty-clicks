var button = document.querySelector(".show-cat");
// console.log(button);
var cat = document.querySelector(".cat");
// console.log(cat);
// When user clicks on button, function is triggered to show cat image
button.addEventListener("click", function() {
    if (cat.classList.contains("show")) {
        // console.log("Yes");
        cat.classList.remove("show");
        button.innerText = "Wait, come back";
        button.classList.add("disappear");
    } else {
        // console.log("No");
        cat.classList.add("show");
        button.innerText = "Shoo, cat!!";
        button.classList.remove("disappear");
    }
});