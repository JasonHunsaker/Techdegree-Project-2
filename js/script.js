/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// variables to refrence HTML elements
const studentList = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
  const indexStart = (page * 9) - 9;
  const indexEnd = page * 9; 
  studentList.innerHTML = '';
   for(let i = 0; i < list.length; i++) {
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
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
 let numOfPages = Math.ceil(list.length / 9);
 linkList.innerHTML = ''
   for(let i = 1; i <= numOfPages; i++) {
        let button = `<li>
           <button type="button">${i}</button>
        </li>`;
     linkList.insertAdjacentHTML("beforeend", button);
     document.querySelector('BUTTON').classList.add('active');
     linkList.addEventListener('click', (e) => {
        if(e.target.tagName === "BUTTON") {
           document.querySelector('.active').className = '';
           e.target.classList.add('active');
           showPage(list, e.target.textContent)
        }
     });
   }
};






// Call functions
showPage(data, 1)
addPagination(data)

