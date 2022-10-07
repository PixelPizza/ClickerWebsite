(function() {
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    let counter = 0;

    const button = document.querySelector("button");
    button.addEventListener("click", async () => {
        counter++;
        document.querySelector(".menu-counter").textContent = counter;
        button.classList.add("big");
        await wait(100);
        button.classList.remove("big");
    });
})();