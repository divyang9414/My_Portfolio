var typed5 = new Typed('#typedjs', {
    strings: ['Divyang Padhiyar', 'a Web Designer', 'a Web Developer', 'the one, you need.'],
    typeSpeed: 100,
    backSpeed: 50,
    cursorChar: '.',
    shuffle: false,
    smartBackspace: true,
    loop: true
});

let counts = setInterval(updated,10);
let upto = 0;
function updated() {
    let count = document.getElementById("counter1");
    count.innerHTML = ++upto;
    if (upto === 3) {
        clearInterval(counts);
    }
}

let counts2 = setInterval(updated2);
let upto2 = 0;
function updated2() {
    let count = document.getElementById("counter2");
    count.innerHTML = ++upto2;
    if (upto2 === 22) {
        clearInterval(counts2);
    }
}

let counts3 = setInterval(updated3,110);
let upto3 = 0;
function updated3() {
    let count = document.getElementById("counter3");
    count.innerHTML = ++upto3;
    if (upto3 === 3) {
        clearInterval(counts3);
    }
}

$(window).scroll(function () { 
    if (scrollY>500) {
      $('#to-top').hide();
    }
    else {
      $('#to-top').hide();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).toggle();
            }
        });
    });
});