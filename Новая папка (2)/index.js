const cars = document.querySelectorAll('.car');
const detailsContent = document.querySelector('.details-content');

cars.forEach(car => {
  car.addEventListener('click', () => {
    const model = car.getAttribute('data-model');
    const imgSrc = car.querySelector('img').getAttribute('src');
    showDetails(model, imgSrc);
  });
});

function showDetails(model, imgSrc) {
  const detailsHTML = `
    <img src="${imgSrc}" alt="${model}">
    <h2>${model}</h2>
    <p>Details about ${model} Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  `;
  detailsContent.innerHTML = detailsHTML;
}
