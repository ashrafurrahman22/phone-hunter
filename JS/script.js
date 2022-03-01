const searchResult = document.getElementById('search-result');
const displayDetails = document.getElementById('phone-details');

// input field errors
const inputErrorDiv = document.getElementById('inputError-div');
const inputErrorMsg = document.getElementById('inputError-msg');

// phone details error
const detailErrorDiv = document.getElementById('detailsError-div');
const detailErrorMsg = document.getElementById('detailsError-msg');

const searchPhone = () => {
    const searchValue = document.getElementById('search-field').value;
    // clean the input box
    document.getElementById('search-field').value = '';

    if(searchValue == 0) {
        inputErrorMsg.classList.remove('d-none');
        inputErrorDiv.appendChild(inputErrorMsg);
    }
    else{
        inputErrorMsg.classList.add('d-none')

    const url= `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data))
    // .then(data => console.log(data))

    .catch(error => console.log(error));
    }

}

const displaySearchResult = phones => {

        if(phones.length == 0) {
            // console.log('yes');
            detailErrorMsg.classList.remove('d-none');
            detailErrorDiv.appendChild(detailErrorMsg);
        } 

        else{ 

            

            detailErrorDiv.classList.add('d-none');            

            // clean the display for new search
                 searchResult.textContent ='';

    phones.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        <div class="card">
            <img src="${phone.image}" class="card-img-top w-75 p-4 mx-auto" alt="...">
            <div class="card-body p-5 text-center">
                 <h5 class="card-title">Name: ${phone.phone_name}</h5>
                 <h5 class="card-title">Brand: ${phone.brand}</h5>
                 <button onclick="loadDetails('${phone.slug}')" class="btn btn-outline-secondary" type="button">Details</button>
                
            </div>
          </div>
        `;
        searchResult.appendChild(div);
     })
     }
}


const loadDetails = id => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetails(data))
}

const displayPhoneDetails = details => {
    console.log(details);

    // clean details div for new search
    displayDetails.textContent ='';

    const detailsDiv   =  document.createElement('div');
    detailsDiv.classList.add('col');
    detailsDiv.innerHTML = `
    <div class="card" >
          <img src="${details.data.image}" class="card-img-top img-fluid p-4 mx-auto" alt="image">
          <div class="card-body p-5">
            <h5 class="card-title text-center">${details.data.name}</h5>
            <h6 class="card-title text-center">Realse Date: ${details.data.releaseDate}</h6>
            <h5 class="card-title text-center">Brand: ${details.data.brand}</h5>
            <h3 class="ms-3 mt-3">Specifications</h3>
           <div class="d-lg-flex">
           <div>
           <h6 class="card-title ms-3">Sensors</h6>
           <ol>
               <li>${details.data.mainFeatures.sensors[0]}</li>
               <li>${details.data.mainFeatures.sensors[1]}</li>
               <li>${details.data.mainFeatures.sensors[2]}</li>
               <li>${details.data.mainFeatures.sensors[3]}</li>
               <li>${details.data.mainFeatures.sensors[4]}</li>
               <li>${details.data.mainFeatures.sensors[5]}</li>  
           </ol>
           </div>
           <div class="ms-3">
           <h6 class="card-title ms-3">Others</h6>
           <ol>
               <li>Bluetooth: ${details.data.others.Bluetooth}</li>
               <li>GPS: ${details.data.others.GPS}</li>
               <li>NFC: ${details.data.others.NFC}</li>
               <li>Radio: ${details.data.others.Radio}</li>
               <li>USB: ${details.data.others.USB}</li>
               <li>WLAN: ${details.data.others.WLAN}</li>
                
           </ol>
           </div>
            </div>
          </div>
        </div>
    `;
    displayDetails.appendChild(detailsDiv);
    // searchResult.style.display = 'none';
    
}