const number = document.getElementById('number')
const generateGtn = document.getElementById('generateGtn')


const randomNumberGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);

    number.textContent = randomNumber;
};

generateGtn.addEventListener('click', randomNumberGenerator)
randomNumberGenerator();