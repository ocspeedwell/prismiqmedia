const menuToggle=document.querySelector(".menu-toggle");

const navMenu=document.querySelector(".nav-menu");

menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});
/* ==========================================
   COUNTER
========================================== */

const counters = document.querySelectorAll(".counter");

const runCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        const update = () => {

            const current = +counter.innerText;

            const increment = Math.ceil(target / 60);

            if(current < target){

                counter.innerText = current + increment;

                setTimeout(update,25);

            }else{

                counter.innerText = target;

            }

        };

        update();

    });

};

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            runCounter();

            observer.disconnect();

        }

    });

});

observer.observe(document.querySelector(".impact"));
