const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("nav ul li a");
const headerlink = document.querySelectorAll("h1");
const navlinks = document.querySelectorAll("nav ul li");

document.addEventListener("mousemove", (e) => {
    let leftPosition = e.pageX + 4;
    let topPosition = e.pageY + 4;

    cursor.style.left = leftPosition + "px";
    cursor.style.top = topPosition + "px";
});

//links

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    })
});

links.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    });
});

//headerlinks

headerlink.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    })
});

headerlink.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    });
});
// Animation

navlinks.forEach((li, i) => {
    li.style.animationDelay = 0 + i * 140 + "ms";
    
});