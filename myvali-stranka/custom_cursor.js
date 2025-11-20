const cursor = document.querySelector('.cursor')

document.addEventListener("mousemove", (event) => {
    const { width, height } = cursor.getBoundingClientRect()

    cursor.style.left = `${event.clientX - width / 2}px`
    cursor.style.top = `${event.clientY - height / 2}px`

});

document.addEventListener("mouseenter", () => {
    cursor.style.display = 'block'
});

document.addEventListener("mouseleave", () => {
    cursor.style.display = 'none'
});
