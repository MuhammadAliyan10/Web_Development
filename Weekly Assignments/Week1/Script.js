const api = "https://dummyjson.com/products";
const fetchData = async () => {
    const data = await fetch(api);
    const res = await data.json();
    var finaldata = res.products;
    finaldata.map((p) => {
        const valuesList = document.getElementById("valuesList");
        const listItem = document.createElement("div");
        listItem.classList.add("col-sm-4");
        listItem.innerHTML = `
    <div class="card mb-4" style="width: 18rem ; height:25rem;">
    <img src="${p.thumbnail
            }" class="card-img-top" style="width:100%; height:11rem;" alt="...">
    <div class="card-body">
    <h5 class="card-title">${p.title}</h5>
    <p class="card-text">${p.description.slice(0, 50)}....</p>
    <p class="card-text">Price: ${p.price}$</p>
     <a href="#" class="btn btn-primary">Buy Now</a>
      </div>
      </div>
  `;
        valuesList.appendChild(listItem);
    });
};
fetchData();

const searchResults = async (text) => {
    try {
        const dataSearch = await fetch(
            `https://dummyjson.com/products/search/?q=${text}`
        );
    
        const jsonData = await dataSearch.json();
        const products = await jsonData.products[0];
        const valuesListSearch = document.getElementById("valuesListSearch");
        const listItemSearch = document.createElement("div");
        listItemSearch.classList.add("col-sm-12");
        listItemSearch.innerHTML = `
        <div class="row my-4">
        <div class ="col-sm-6">
        <div class="card" style="width: 100% ; height:auto;">
        <img src="${products.thumbnail
            }" class="card-img-top" style="width:100%; height:20rem;" alt="...">
       </div>
       </div>
        <div class ="col-sm-6 my-3">
        <div class="card-body">
        <h5 class="card-title mb-2">${products.title}</h5>
        <p class="card-text">${products.description}</p>
        <p class="card-text">Rating: ${products.rating}$</p>
        <p class="card-text">Brand: ${products.brand}$</p>
        <p class="card-text">Price: ${products.price}$</p>
         <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
          </div>
          </div>
         
      `;
        valuesListSearch.appendChild(listItemSearch);

    } catch (error) {
        console.error("Error fetching search results:", error);
    }
};

const button = document.getElementById("sudmit");
button.addEventListener("click", async (event) => {
    event.preventDefault();
    const userText = document.getElementById("userText").value;
    await searchResults(userText);
});