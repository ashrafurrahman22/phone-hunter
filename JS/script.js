const searchResult = document.getElementById('search-result');
const displayDetails = document.getElementById('meal-details');

const searchPhone = () => {
    const searchValue = document.getElementById('search-field').value;

    // clear input value
    // searchField.value ='';

    const url= `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data))
    // .then(data => console.log(data))

    .catch(error => console.log(error));
}

const displaySearchResult = phones => {

    // clean the display for new search
    searchResult.textContent ='';

    phones.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        <div class="card">
            <img src="${phone.image}" class="card-img-top w-50" alt="...">
            <div class="card-body">
                 <h5 class="card-title">${phone.phone_name}</h5>
                 <h5 class="card-title">Brand: ${phone.brand}</h5>
                 <button onclick="loadDetails('${phone.slug}')" class="btn btn-outline-secondary" type="button">Details</button>
                
            </div>
          </div>
        `;
        searchResult.appendChild(div);
    })
}


const loadDetails = id => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetails(data))
}

const displayPhoneDetails = details => {
    // console.log(meal);

    // clean details div for new search
    // mealDetails.textContent ='';

    const detailsDiv   =  document.createElement('div');
    detailsDiv.classList.add('card');
    detailsDiv.innerHTML = `
    <div class="card" >
          <img src="${details.data.image}" class="card-img-top w-50 p-5" alt="...">
          <div class="card-body">
            <h5 class="card-title">${details.data.name}</h5>
            <h6 class="card-title">Realse Date: ${details.data.releaseDate}</h6>
  <h5 class="card-title">Brand: ${details.data.brand}</h5>
          </div>
        </div>
    `;
    displayDetails.appendChild(detailsDiv);
    
}