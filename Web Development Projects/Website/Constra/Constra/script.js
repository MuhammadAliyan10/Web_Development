function searchFunction(searchTerm) {
    console.log(`Searching for ${searchTerm}...`)
  }
  
  window.addEventListener("DOMContentLoaded", (e) => {
    const btn = document.querySelector(".searchBtn");
    const input = document.querySelector(".inputSearch");
  
    btn.addEventListener("click", (e) => {
      // get value of input field first
      searchFunction(input.value);
    });
    input.addEventListener("keyup", (e) => searchFunction(e.target.value));
  });
  