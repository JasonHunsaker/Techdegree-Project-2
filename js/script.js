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
function showPage (list, page) {
  const indexStart = (page * 9) - 9;
  const indexEnd = page * 9; 
  studentList.innerHTML = '';
  // loop over the length of the `list` parameter
   for (i=0; i < studentList.length; i++) {
      if (i >= indexStart && i <= indexEnd) {
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
       studentList.insertAjacentHTML("beforeend", studentInfo);
         }
      };
   }
   
    // inside the loop create a conditional to display the proper students
      // inside the conditional:
        // create the elements needed to display the student information
        // insert the above elements

  
   



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
 var numOfPages = math.ceil(list.length/9);
  // select the element with a class of `link-list` and assign it to a variable
   
  // set the innerHTML property of the variable you just created to an empty string
linkList.innerHTML = ''
  // loop over the number of pages needed
    // create the elements needed to display the pagination button
    // insert the above elements
   for (i = 1; i < linkList.length; i++) {
      if (i <= numOfPages.length) {
         let button = `<li>
            <button type="button">${i}</button>
         </li>`
      linkList.insertAdjacentHTML("beforeend", button);
      }
   }
  // give the first pagination button a class of "active"

  // create an event listener on the `link-list` element
    // if the click target is a button:
      // remove the "active" class from the previous button
      // add the active class to the clicked button
      // call the showPage function passing the `list` parameter and page to display as arguments
   }





// Call functions
