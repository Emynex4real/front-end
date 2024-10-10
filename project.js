const successContainer = document.querySelector('.success-container');
const container = document.querySelector('.big-container');
const form = document.querySelector('.form');
const input = document.querySelector('.email-address');
const dismissBtn = document.querySelector('.dismiss-button')
const bold = document.querySelector('.bold')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let inputValue = input.value;
    console.log(inputValue)
    if(inputValue !== ''){
        container.classList.add('unactive');
        successContainer.classList.add('active');
        bold.textContent = inputValue;
        input.value = ''
        

    }
   
})

dismissBtn.addEventListener('click', ()=>{
    container.classList.remove('unactive');
    successContainer.classList.remove('active');

})
console.log(container)
