//Define Global Variables

//Select navBar  by DOM
const list = document.getElementById('navbar__list');
//Select all section elemets and put them in a Array instead of NodeList
const listItems = Array.from(document.querySelectorAll('section'));

//Function to build the nav dynamiclly
function createNavItems() {
    for (item of listItems) {
        const itemName = item.getAttribute('data-nav');
        const itemLink = item.getAttribute('id');
        sec = document.createElement('li');
        sec.innerHTML = `<a class="menu__link" href='#${itemLink}'>${itemName}</a>`;
        list.appendChild(sec);
    }
}
createNavItems();


// Add class 'active' to section when near top of viewport , the ()=> is an arrow function
window.addEventListener('scroll', ()=> {
    //Select all section elements by DOM
    const sections = document.querySelectorAll('section');
    //Iterate fo each section 
    sections.forEach(function (section) {
        const activeLink = document.querySelector(`a[href='#${section.id}']`);
        //Check if section in top view or not
        if (section.getBoundingClientRect().top <= 200 && section.getBoundingClientRect().top >= 0) {
            section.classList.add('your-active-class');
            activeLink.classList.add('active-link');
        } else {
            section.classList.remove('your-active-class');
            activeLink.classList.remove('active-link');
        }
    });
});

// Scroll to anchor ID using scrollTO event
listItems.addEventListener('click', scrollAction());

//Callback function to make scroll event
function scrollAction(event) {
    event.preventDefault();
    //check if I clicked on the target ID I want
    if (event.target.dataset.nav) {
        //select target ID by DOM and scroll to it's section
        document
            .getElementById(`${event.target.dataset.nav}`)
            .scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
            });
            //function wait 200 ms before changing URL by section That we scroll to
        setTimeout(() => {
            location.hash = `${event.target.dataset.nav}`;
        }, 200);
    }
};

