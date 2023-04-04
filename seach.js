
// seraching
const searchBox = document.getElementById('search-box');
const searchResults = document.getElementById('search-results');

searchBox.addEventListener('keyup', (event) => {
  const searchTerm = event.target.value.toLowerCase();
  searchResults.innerHTML = '';

  if (searchTerm.length >= 3) {
    fetch('productData.json')
      .then((response) => response.json())
      .then((data) => {
        const matches = data.products.filter((item) => item.name.toLowerCase().includes(searchTerm));
        matches.forEach((item) => {
          const li = document.createElement('li');
          li.innerHTML = `<a onclick="searchedProduct(event); localStorage.setItem('productId', ${item.id});"><img class="searchimg" src="${item.image}" height="50px" width="50px">${item.name}</a>`;
          searchResults.appendChild(li);
        });
      })
      .catch((error) => console.log(error));
  }

  if (event.keyCode === 13) {

    fetch('productData.json')
      .then((response) => response.json())
      .then((data) => {
        const matches = data.products.filter((item) => item.name.toLowerCase().includes(searchTerm));
        localStorage.setItem('productId2', JSON.stringify(matches));
        localStorage.removeItem('productId');
        window.location.href = 'search.html';
      })
      .catch((error) => console.log(error));
  }
});
// function to show product deta
async function searchedProduct(event) {
    event.preventDefault();
     
  localStorage.removeItem("productId");
  localStorage.removeItem("productId2");

    window.location.href = `search.html`;

}
