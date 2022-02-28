const cardDiv = document.getElementById('card-Group');

const loadPhones = () => {
    const searchValue = document.getElementById('searchInput').value;
    // console.log(searchValue);

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data))
}

const displayPhone = (phones) => {
    // console.log(phones);
    phones.forEach(phone => {
       
const newDiv = document.createElement('div');
newDiv.innerHTML = `
<div class="card mb-3 p-3 rounded-3" style="width: 18rem;">
<img src="${phone.image}" class="card-img-top w-100" alt="...">
<div class="card-body">
  <h5 class="card-title">Name: ${phone.phone_name}</h5>
  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  <button onclick="" class="btn btn-outline-secondary" type="button">Details</button>
</div>
</div>
</div>
`;
cardDiv.appendChild(newDiv);
    })
}

