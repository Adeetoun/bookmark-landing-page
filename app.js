const menuBar = document.querySelector('.menu-bar');
const menuBtn = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');
const faqHidden = document.querySelectorAll('.hidden');
const openBtn = document.querySelectorAll('.open');
const tabOne = document.querySelector('.tab-one');
const tabTwo = document.querySelector('.tab-two');
const tabThree = document.querySelector('.tab-three');
const liOne = document.querySelector('.li-one');
const liTwo = document.querySelector('.li-two');
const liThree = document.querySelector('.li-three');
const input = document.querySelector('input');
const labelErr = document.querySelector('.label');
const submitBtn = document.querySelector('#submit');


menuBtn.addEventListener('click', () => {
    menuBar.style.display = 'block';
});
closeMenu.addEventListener('click', () => {
    menuBar.style.display = 'none';
})

for (let i = 0; i < openBtn.length; i++) {
    openBtn[i].addEventListener('click', function () {
        openBtn[i].classList.toggle("hidden")
        faqHidden[i].classList.toggle("hidden")
        openBtn[i].style.display = 'block';
    });
}
liOne.addEventListener('click', () => {
  tabOne.style.display = 'flex';
  tabTwo.style.display = 'none';
  tabThree.style.display = 'none';
});

liTwo.addEventListener('click', () => {
    tabTwo.style.display = 'flex';
    tabOne.style.display = 'none';
    tabThree.style.display = 'none';
  });
liThree.addEventListener('click', () => {
    tabThree.style.display = 'flex';
    tabOne.style.display = 'none';
    tabTwo.style.display = 'none';
  });
 submitBtn.addEventListener('click', () => {
    if(input.value === '') {
        labelErr.style.display = 'block';
        submitBtn.style.backgroundColor = 'white';
        submitBtn.style.color = 'hsl(0, 94%, 66%)';
        input.classList.add('show-image');
     setTimeout(() => {
        labelErr.style.display = 'none';
        submitBtn.style.color = 'white';
        submitBtn.style.backgroundColor = 'hsl(0, 94%, 66%)';
        input.classList.remove('show-image');
     }, 2000)
        return;
    }
 })
  