
import { CountryByISOCode } from './countries.js';

const enterName = document.getElementById('enterName');
const submit = document.getElementById('submit');

const nameArea = document.getElementById('nameArea');
const genderArea = document.getElementById('genderArea');
const nationalityArea = document.getElementById('nationalityArea');



const serverUrl = 'https://api.genderize.io';

function getSexOfThisName(firstName) {
    
    const url = `${serverUrl}?name=${firstName}`;

    let name = firstName;
    return fetch(url)
        .then(response => {
            const responseJSON = response.json();
            return responseJSON;
        }).then(data => {
            console.log('The sex of ' + data.name + ' : ' + data.gender);
            genderArea.innerHTML = 'Gender: ' + data.gender;


        });
}


function getNationalityByName(firstName) {
    const serverUrl = 'https://api.nationalize.io';
    const url = `${serverUrl}?name=${firstName}`;

    let name = firstName;
    return fetch(url)
        .then(response => {
            const responseJSON = response.json();
            return responseJSON;
        }).then(data => {

            let natio = [];
            for (let i = 0; i < data.country.length; i++) {
                let country = data.country[i].country_id;

                natio.push(' ' + CountryByISOCode[country])
            }
            console.log('The nationality of ' + data.name + ' : ' + natio);
            nationalityArea.innerHTML = 'Nationality: ' + natio;

        }

        );


}







submit.addEventListener('click', () => getSexOfThisName(enterName.value));

submit.addEventListener('click', () => getNationalityByName(enterName.value));

submit.addEventListener('click', () => nameArea.innerHTML = 'Name: ' + enterName.value);
submit.addEventListener('click', () => getSexOfThisName(enterName.value));









