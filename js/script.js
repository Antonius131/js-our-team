/**
 * 
 *    - Devo creare un array di oggetti che rappresenti i membri del team e le loro caratteristiche
 *             Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
               Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
               Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
               Angela Lopez	Social Media Manager	  angela-lopez-social-media-manager.jpg
               Scott Estrada	Developer	           scott-estrada-developer.jpg
               Barbara Ramos	Graphic Designer	     barbara-ramos-graphic-designer.jpg

      - 
 * 
 */

// creating teamMembers array
const teamMembers = [
   {
      name: 'Wayne Barrett',
      role: 'Founder & CEO',
      image: '../img/wayne-barnett-founder-ceo.jpg'
   },
   {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: '../img/angela-caroll-chief-editor.jpg'
   },
   {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: '../img/walter-gordon-office-manager.jpg'
   },
   {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: '../img/angela-lopez-social-media-manager.jpg'
   },
   {
      name: 'Scott Estrada',
      role: 'Developer',
      image: '../img/scott-estrada-developer.jpg'
   },
   {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: '../img/barbara-ramos-graphic-designer.jpg'
   },
];



// Printing in console Keys Values 

// for (let i=0; i<teamMembers.length; i++) {
//    for (let key in teamMembers[i]) {
//       console.log(`${key}: ${teamMembers[i][key]}`)
//    }
// }



// Printing in DOM array objetcs

// const membersList = document.getElementById('members-list');

// for (let i=0; i<teamMembers.length; i++) {

//    for (let key in teamMembers[i]) {
//       membersList.innerHTML += `
//                               ${key}
//                               ${teamMembers[i][key]}`;
//    }

// }


const cardWrapper = document.querySelector('.card-wrapper');

let i = 0;
while (i<teamMembers.length) {

   for (let key in teamMembers[i]) {
      cardWrapper.innerHTML +=  `<div class="col-6 p-2">
                                    <div class="card p-3">
                                       <img src="${teamMembers[i].image}" alt="member-img" class="card-img-top mb-2">
                                       <h4 class="card-title">${teamMembers[i].name}</h4>
                                       <pre class="card-subtitle">${teamMembers[i].role}</pre>
                                    </div>
                                 </div>`;
   }

   console.log(teamMembers[i]);
   i++


}