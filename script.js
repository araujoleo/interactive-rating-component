const btnSubmit = document.querySelector('.btn-submit')
const mainContainer = document.querySelector('.main')
const thankyouContainer = document.querySelector('.thank-you')
const rating = document.querySelector('.rating')
const rates = document.querySelectorAll('.btn-number')

btnSubmit.addEventListener('click', () => {
    thankyouContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})