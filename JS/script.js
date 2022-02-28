const phoneDiv = document.getElementById('card-Group');
const detailsDiv = document.getElementById('details');

const loadPhones = () => {
    const searchValue = document.getElementById('searchInput').value;
    document.getElementById('searchInput').value = '';    
    // console.log(searchValue);

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data))
}

const displayPhone = (phones) => {

    phoneDiv.style.display = 'block';
    detailsDiv.textContent = '';

    // replace display with new search 
    phoneDiv.textContent = '';

    // console.log(phones);
    phones.forEach(phone => {
       
const newDiv = document.createElement('div');
newDiv.innerHTML = `
<div class="card mb-3 p-3 rounded-3" style="width: 18rem;">
<img src="${phone.image}" class="card-img-top w-100" alt="...">
<div class="card-body">
  <h5 class="card-title">Name: ${phone.phone_name}</h5>
  <h5 class="card-title">Brand: ${phone.brand}</h5>
  <button onclick="loadDetails('${phone.slug}')" class="btn btn-outline-secondary" type="button">Details</button>
</div>
</div>
`;
phoneDiv.appendChild(newDiv);
    })
}

const loadDetails = (id) => {
    const url2 = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url2)
    .then(res=> res.json())
    .then(data=> displayPhoneDetails(data))
}

const displayPhoneDetails = (details) => {

    console.log(details);

    const newDiv2 = document.createElement('div');
    newDiv2.innerHTML = `
    <div class="card mb-3 p-3 rounded-3" style="width: 18rem;">
<img src="${details.data.image}" class="card-img-top w-100" alt="...">
<div class="card-body">
  <h5 class="card-title">Name: ${details.data.phone_name}</h5>
  <h5 class="card-title">Name: ${details.data.phone_name}</h5>
  <button onclick="loadDetails('${details.slug}')" class="btn btn-outline-secondary" type="button">Details</button>
</div>
</div>    
    `;
    detailsDiv.appendChild(newDiv2);
    phoneDiv.style.display = 'none';
}
