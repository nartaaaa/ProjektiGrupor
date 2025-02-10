ocument.addEventListener("DOMContentLoaded", () => {
    
    const slider = document.querySelector(".slider");
    let index = 0;
    
    function nextSlide() {
        index++;
        if (index > 2) index = 0;
        slider.style.transform = `translateX(-${index * 33.33}%)`;
    }
    setInterval(nextSlide, 3000);
    
    
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
    
   
    const cart = [];
    function addToCart(name, price) {
        cart.push({ name, price });
        alert(`${name} has been added to your cart!`);
    }
    
    window.addToCart = addToCart;
    
    
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
        this.reset();
    });
});