/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// variables to refrence HTML elements
const studentList = document.querySelector('.studentList');
const linkList = document.querySelector('.link-list');



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage (list, page) {
  // create two variables which will represent the index for the first and last student on the page
  const indexStart = (page * 9) - 9;
  const indexEnd = page * 9; 
  // select the element with a class of `student-list` and assign it to a variable
  //I did that in global scope
  // set the innerHTML property of the variable you just created to an empty string
  studentList.innerHTML = '';
  // loop over the length of the `list` parameter
   for (i=0; i < studentList.length; i++) {
      if (i >= indexStart && i <= indexEnd) {
         let studentInfo = ``
      }
   }
    // inside the loop create a conditional to display the proper students
      // inside the conditional:
        // create the elements needed to display the student information
        // insert the above elements

  
   
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
