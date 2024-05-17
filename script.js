
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}

const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor Web', 'Desenvolvedor de Software'],
    typeSpeed: 90,
    backSpeed: 90,
    startDelay: 1500,
    loop: true,
})