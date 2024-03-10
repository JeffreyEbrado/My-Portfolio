//---------------------

//HEADER

const toggleButton = document.getElementById('toggleButton');
    const navigationMenu = document.querySelector('.navigation-menu-mobile');

    toggleButton.addEventListener('click', () => {
      console.log("hamburger");
        if (navigationMenu.style.transform === 'translateX(200px)') {
            navigationMenu.style.transform = 'translateX(0px)';
        } else {
            navigationMenu.style.transform = 'translateX(200px)';
        }
    });

//IN my Services Chaning the definition if mobile
    document.querySelector('.circle-btn-web').addEventListener('click', function() {
        document.querySelector('.df-title.services-titles').innerText = 'Web Developement';
        document.querySelector('.definition.services-info-by-title').innerText = 'Looking to elevate your online presence? I\'m a web developer passionate about crafting user-centric and visually stunning web experiences that not only resonate with your brand but also achieve your specific goals.';
    });
    
    document.querySelector('.circle-btn-soft').addEventListener('click', function() {
        document.querySelector('.df-title.services-titles').innerText = 'Software Development';
        document.querySelector('.definition.services-info-by-title').innerText = 'Looking for a custom software solution to solve a business challenge? I specialize in creating tailored applications to streamline processes and enhance user experiences. Let\'s work together to craft a solution that fits your needs perfectly.';
    });
    
    document.querySelector('.circle-btn-graphic').addEventListener('click', function() {
        document.querySelector('.df-title.services-titles').innerText = 'Graphic Designing';
        document.querySelector('.definition.services-info-by-title').innerText = 'Have you ever considered adding a touch of visual flair to your app or website?  I\'m passionate about graphic design and use tools like Photoshop and animation software to help bring your ideas to life. ';
    });

//Desktop devices
const homeButton = document.getElementById('homebtnID');
const aboutButton = document.getElementById('aboutbtnID');
const servicesButton = document.getElementById('servicesbtnID');
const portfolioButton = document.getElementById('portfoliobtnID');
const contactButton = document.getElementById('contactbtnID');

const homeMain = document.querySelector('.home-main');
const aboutMain = document.querySelector('.about-main');
const servicesMain = document.querySelector('.services-main');
const portfolioMain = document.querySelector('.portfolio-main');
const contactMain = document.querySelector('.contact-main');
const mobileButtons = document.querySelectorAll('.mobile-home-button, .mobile-about-button, .mobile-services-button, .mobile-portfolio-button, .mobile-contact-button');
const desktopButtons = [
    { button: homeButton, main: homeMain },
    { button: aboutButton, main: aboutMain },
    { button: servicesButton, main: servicesMain },
    { button: portfolioButton, main: portfolioMain },
    { button: contactButton, main: contactMain }
];

mobileButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove the active class from all buttons
        mobileButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Add the active class to the clicked button
        button.classList.add('active');

        // Hide all main content sections
        const mobileMains = document.querySelectorAll('.home-main, .about-main, .services-main, .portfolio-main, .contact-main');
        mobileMains.forEach(main => {
            main.style.display = 'none';
        });

        // Show the corresponding main content section based on the clicked button
        const targetMainId = button.dataset.target;
        const targetMain = document.querySelector(`.${targetMainId}`);
        targetMain.style.display = 'flex'; // Assuming you want to show it as flex

        // Trigger click event on the corresponding desktop button
        desktopButtons.forEach(({ button: desktopButton, main: desktopMain }) => {
            if (desktopMain.id === targetMainId.replace('-main', 'Main')) {
                desktopButton.click();
            }
        });

        // Auto-click the home button on mobile
        if (button.classList.contains('mobile-home-button')) {
            homeButton.click();
        }
    });
});

desktopButtons.forEach(({ button, main }) => {
    button.addEventListener('click', () => {
        desktopButtons.forEach(({ button: btn, main: mainItem }) => {
            btn.classList.remove('pressed');
            mainItem.style.display = 'none';
        });

        button.classList.add('pressed');
        main.style.display = 'flex';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    homeButton.classList.add('pressed');
});
