/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navigation_Bar = document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const Generate_navBar = () => {

    let ShowNavBar = '';
    // looping over all sections
    sections.forEach(section => {

        const sectionID = section.id;
        const sectionDataNavBar = section.dataset.nav;

        ShowNavBar  += `<li><a class="menu__link" href="#${sectionID}"> ${sectionDataNavBar}</a></li>`;

    });
    // append all elements to the navigation
    navigation_Bar.innerHTML = ShowNavBar ;
};

Generate_navBar();


// Add class 'active' to section when near top of viewport 

const offset_clear = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActive_State = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};
// add the active class
const addActive_State = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: rgb(43, 160, 160)";

    };
};

//implementating the actual function

const sectionActive = () => {
    sections.forEach(section => {
        const elementOffset = offset_clear(section);

        inviewport = () => elementOffset < 130 
        && elementOffset >= -130;

        removeActive_State(section);
        addActive_State(inviewport(),section);
    });
};

window.addEventListener('scroll' ,sectionActive);
//implementating the actual function for 



// Scroll to anchor ID using scrollTO event ,and smoothy scroll by clicking the navagition menu
var LinksOf_NavBar = document.querySelectorAll("nav a");

LinksOf_NavBar.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPosition = section.offsetTop;
    
    window.scroll({
      top: sectionPosition,
      behavior: "smooth",
    });
    
  });
});
    

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


