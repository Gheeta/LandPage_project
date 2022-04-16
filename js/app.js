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

let section_item ='' 
for( let i = 0; i <sections.length; i++)
{ 
    section_item += `<li id="${sections[i].id}-item"><a class="menu__link" href="#${sections[i].id}"> ${sections[i].dataset.nav}</a></li>`;
}
navigation_Bar.innerHTML = section_item;


// Add class 'active' to section when near top of viewport

const navbar_links = document.querySelectorAll("nav a");
window.addEventListener('scroll' ,() =>{ 
    for ( let i =0 ; i < sections.length ; i++)
    {   
        //console.log(navbar_listss);
        const sectionTopOffset = sections[i].getBoundingClientRect().top;
        sections[i].classList.remove('your-active-class');
        navbar_links[i].classList.remove('list_highLight');
        navbar_links[i].classList.add('menu__link');



        if ( sectionTopOffset >= -130 && sectionTopOffset <130)
        { 
      
            sections[i].classList.add('your-active-class');
            navbar_links[i].classList.add('list_highLight');
            navbar_links[i].classList.remove('menu__link');
          ///  sections[i].style.cssText = "background-color: rgb(43, 160, 160)";
        }

        
    }
});


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Scroll to section on link click

 onLinkClick = (event) =>{
    event.preventDefault()
    let sectionId =  event.target.attributes.href.value;
    let section = document.querySelector(sectionId);
    let sectionPosition = section.offsetTop;
    window.scroll({
        top: sectionPosition,
        behavior: "smooth",
      });


}
// Build menu 

for ( let i = 0 ; i< navbar_links.length; i++)
{   
    navbar_links[i].addEventListener("click", onLinkClick )
}

// Set sections as active