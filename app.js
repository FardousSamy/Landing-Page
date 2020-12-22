
//smooth scrolling 

 smoothNavLinks = () => {
    const navLinks = document.querySelectorAll('.navbar__link');
    for (let n in navLinks) {
        if (navLinks.hasOwnProperty(n)) {
            navLinks[n].addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(navLinks[n].hash)
                    .scrollIntoView({
                        behavior: "smooth"
                    });
            });
        }

    }

} 
 //calling SmoothNavLinks function
 smoothNavLinks();
 










