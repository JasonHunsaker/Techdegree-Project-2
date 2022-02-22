/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// variables to refrence HTML elements
const studentList = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');
const header = document.querySelector('.header')
/*
This function will create and insert/append the elements needed to display a "page" of nine students.  It pulls the information from the data.js file to display various bits of info
for each student.  it is set up to loop through the data.js & add the corresponding HTML elements.
*/
function showPage(list, page) {
   const indexStart = (page * 9) - 9;
   const indexEnd = page * 9;
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++) {
      if (i >= indexStart && i < indexEnd) {
         let studentInfo = `<li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src= ${list[i].picture.thumbnail} alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Date joined ${list[i].registered.date}</span>
         </div>
       </li>`;
         studentList.insertAdjacentHTML("beforeend", studentInfo);
      }
   };
};
    
/*
This function will create and insert/append the elements needed for the pagination buttons.  The function is set up to show 9 students per page & auto calculate how many pages 
would be needed if the data.js file had students added/removed. 
*/
function addPagination(list) {
   let numOfPages = Math.ceil(list.length / 9);
   linkList.innerHTML = ''
   for (let i = 1; i <= numOfPages; i++) {
      let button = `<li>
           <button type="button">${i}</button>
        </li>`;
      linkList.insertAdjacentHTML("beforeend", button);
      document.querySelector('BUTTON').classList.add('active');
      linkList.addEventListener('click', (e) => {
         if (e.target.tagName === "BUTTON") {
            document.querySelector('.active').className = '';
            e.target.classList.add('active');
            showPage(list, e.target.textContent)
         }
      });
   }
};

// Call functions
showPage(data, 1);
addPagination(data);

/*
Exceeds Expectations attempt - search function - The search function will allow a user to begin typing a name & have that information filtered out of the full list
*/
//add search HTML
let insertSearch = `<label for="search" class="student-search">
            <input id="search" placeholder="Search by name...">
            <button id="submit" type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
          </label>`;
header.insertAdjacentHTML("beforeend", insertSearch);

//HTML for no students displayed
let noStudents = `<h1><strong>Sorry, no students match with that information</strong></h1>`

// variables for search function
let searchInput = document.querySelector("#search")
let searchButton = document.querySelector("#submit")
//search function
function studentSearch() {
   let userInput = searchInput.value.toUpperCase();
   let searchArray = [];
   if (userInput.value !== '') {
      for (i = 0; i < data.length; i++) {
         let firstName = data[i].name.first.toUpperCase();
         let lastName = data[i].name.last.toUpperCase();

         if (firstName.includes(userInput) || lastName.includes(userInput)) {
            searchArray.push(data[i]);
         }
      }
      showPage(searchArray, 1);
      addPagination(searchArray);
   } else {
      showPage(data, 1);
      addPagination(data);
   }
   if (searchArray.length === 0) {
      studentList.innerHTML = noStudents;
      linkList.innerHTML = '';
   }
};

//realtime filter of data
searchInput.addEventListener('keyup', (e) => {
   studentSearch();
});

searchButton.addEventListener('click', (e) => {
   studentSearch();
});