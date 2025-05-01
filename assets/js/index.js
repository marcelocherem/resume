document.getElementById("toggleMode").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
});

// eyes and face movement
document.addEventListener("mousemove", (event) => {
    const eyes = document.querySelectorAll(".eye");
    const faceLight = document.querySelector(".faceLight");
    const faceNight = document.querySelector(".faceNight");

    const faceRect = faceLight.getBoundingClientRect();
    const faceCenterX = faceRect.left + (faceRect.width / 2);
    const faceCenterY = faceRect.top + (faceRect.height / 2);

    let mouseX = event.clientX;
    let mouseY = event.clientY;

    let moveX = (mouseX - faceCenterX) * 0.010;
    let moveY = (mouseY - faceCenterY) * 0.010;

    let eyeMoveX = moveX * 1.5; 
    let eyeMoveY = moveY * 1.5;

    faceLight.style.transform = `translate(${moveX}px, ${moveY}px)`;
    faceNight.style.transform = `translate(${moveX}px, ${moveY}px)`;

    eyes.forEach((eye) => {
        eye.style.transform = `translate(${eyeMoveX}px, ${eyeMoveY}px)`;
    });
});

// Smooth scrolling about me
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    
    let textElement = document.querySelector(".textAbout");
    let imgElement = document.querySelector(".img");

    textElement.style.transform = `translateY(${300 - scrollPos * 0.2}px)`;
    imgElement.style.transform = `translateY(${scrollPos * 0.2 - 30}px)`;
});


// side menu
document.addEventListener("DOMContentLoaded", function () {
    const sideMenu = document.querySelector(".sideMenu");
    const sideMenuLinks = document.querySelectorAll(".sideMenuList a");
    const menuToggle = document.querySelector(".sideMenuToggle");
  
    // cascate effect
    const showMenuItems = () => {
      sideMenuLinks.forEach((link, i) => {
        setTimeout(() => {
          link.style.marginLeft = "0";
        }, i * 100);
      });
    };
  
    const hideMenuItems = () => {
      sideMenuLinks.forEach((link, i) => {
        setTimeout(() => {
          link.style.marginLeft = "100px";
        }, i * 100);
      });
    };
  
    //  scroll effect - hide when scroll
    window.addEventListener("scroll", function () {
      if (window.innerWidth > 950) {
        const scrollPos = window.scrollY;
        if (scrollPos > window.innerHeight * 0.5) {
          showMenuItems();
        } else {
          hideMenuItems();
        }
      } else {
        sideMenu.classList.remove("active");
        hideMenuItems();
      }
    });

    menuToggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 950) {
        e.stopPropagation();
        if (!sideMenu.classList.contains("active")) {
          sideMenu.classList.add("active");
          showMenuItems();
        } else {
          sideMenu.classList.remove("active");
          hideMenuItems();
        }
      }
    });
 
    document.addEventListener("click", function (e) {
      if (window.innerWidth <= 950) {
        if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
          sideMenu.classList.remove("active");
          hideMenuItems();
        }
      }
    });
  });


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Per favore, compila tutti i campi.");
        return;
    }

    alert("Modulo inviato con successo!");
});

//validate and function for contact buttons
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Per favore, compila tutti i campi prima di inviare");
        return false;
    }
    return true;
}

function sendEmail() {
    if (!validateForm()) return;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let subject = encodeURIComponent("Contatto tramite portfolio");
    let body = encodeURIComponent(`Ciao! Mi chiamo ${name}, la mia email è ${email}. \n${message}`);

    let mailtoLink = `mailto:marcelo.lisboacherem@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
}

function sendWhatsApp() {
    if (!validateForm()) return;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let whatsappMessage = encodeURIComponent(`Ciao! Mi chiamo ${name}, la mia email è ${email}. \n${message}`);
    let whatsappLink = `https://wa.me/3455078311?text=${whatsappMessage}`;

    window.open(whatsappLink, "_blank");
}



// skills appearing:
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#skills .containerSkills");
    const bubbles = document.querySelectorAll("#skills .containerSkills .bubbleGroup");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bubbles.forEach(bubbleGroup => {
                    bubbleGroup.style.opacity = "1"; 
                    bubbleGroup.style.transform = "translateY(0)"; 
                });
                observer.unobserve(container);
            }
        });
    }, { threshold: 0.8 });

    observer.observe(container);
});

// projects appearing
document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".containerProjects");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    projects.forEach(project => observer.observe(project));
});

document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".containerContact");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    projects.forEach(project => observer.observe(project));
});