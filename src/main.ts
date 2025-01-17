const arrowPrev = document.getElementById("arrow-prev") as HTMLElement;
const arrowNext = document.getElementById("arrow-next") as HTMLElement;
const wrapper = document.querySelector('.carousel__container') as HTMLElement;

document.addEventListener('DOMContentLoaded', () => {
  arrowPrev.addEventListener('click', () => {
    wrapper.scrollTo({
      left: wrapper.scrollLeft - 792,
      behavior: 'smooth'
    })
  })

  arrowNext.addEventListener('click', () => {
    wrapper.scrollTo({
      left: wrapper.scrollLeft + 792,
      behavior: 'smooth'
    })
  })
})

