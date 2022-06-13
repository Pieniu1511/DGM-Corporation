const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const navLinks = document.querySelectorAll('.nav__link')

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');

    navLinks.forEach(item => {
		item.addEventListener('click', () => {
            navBtn.classList.remove('is-active');
			navMobile.classList.remove('nav-mobile--active')
		})
	})
};

// const closeNav = () => {
// 	navBtn.classList.remove('is-active');
// 	navMobile.classList.remove('nav-mobile--active');
// };

navBtn.addEventListener('click', handleNav);
// navLink.addEventListener('click', closeNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
