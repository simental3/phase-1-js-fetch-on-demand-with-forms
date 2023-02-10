// Fetch On Demand With Forms Code-Along Lab Notes

/* 
Learning Goals
    - Practice using forms to trigger fetch requests
    - Add content to the DOM based on user input
    - Override default form behavior using JavaScript
*/
// ADD EVENT LISTENERS TO CAPTURE FORM DATA AND OVERRIDE THE FORM'S BEHAVIOR

// By default, HTML form elements will refresh when a Submit input is clicked. Before we can run the code for fetching data, we need to override this behavior. we can do this by adding an event listener:
// We want to make sure the JavaScript we write executes when the DOM is fully loaded.
// >>> Any code related to DOM manipulation should either go in initialization or in a function called within initialization. <<<

// retrieves data based on user input:
const initialization = () => {
    const inputForm = document.querySelector('form');   // we want to add an event listener to the form element. We would 1st target the DOM element we want

    inputForm.addeventListener('submit', (event) => {   // we added an event listener to the form (input.Form) that takes 2 arguments: the TYPE of event ('submit'), & the LISTENER (callback function) that will 'handle' the event
        event.preventDefault();                         // calling this inside our callback will stop the page from refreshing and allow us to do something else instead
        console.log(event);                             // confirms everything is working 
    })  // we only need 1 thing: if we're fetching data based off a user input, we need to get the value of whatever the user entered; whatever you just entered into the form.
}       // there are 2 ways we can get this value: 1. The event object actually contains the value we need OR 2. We can select the specific DOM element and get its value

document.addEventListener('DOMContentLoaded', initialization);

// ACCESS INPUT VALUE FROM AN EVENT OBJECT
const initiliazation1 = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(event);
        
        event.target                // accesses this element via its index:
        // => <form>..</form>
        event.target.children       // event.target has a property, children, that returns an HTMLCollection Links to an external site.containing all the nested elements of the event.target element.
        // => HTMLCollection(3) [label, input#searchByID, input, searchByID: input#searchByID]
        event.target.children[1]    // accesses this element via its index:
        // => <input id="searchByID" type="text" placeholder="Enter ID here">
        event.target.children[1].value  // gets the input value by using the value attribute
        // => whatever you typed into the input
    })
}

// ACCESS INPUT DIRECTLY
// We'll always need to use event.preventDefault() to stop the page from refreshing. However, we don't necessarily need to use the event to get the value we need. We can also choose to access the input element directly.
const initiliazation2 = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const input = document.querySelector('input#searchByID')
    })
}
// Both options work for getting the value we need. For now, we'll use the code above.
// With this data, and the default form behavior overridden, we can set up a fetch request.


/*
Looking at the form, we can see we want to access the second element:
    <form>
        <label for="searchByID">Search By ID</label>
        <input id="searchByID" type="text" placeholder="Enter ID here"/>
        <input type="submit" />
    </form>
*/


// // FETCH DATA BASED ON USER INPUT
// const initialization3 = () => {
//     const inputForm = document.querySelector('form');

//     inputForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const input = document.querySelector('input#searchByID');

//         console.log(input.value);

//         fetch('http://localhost:3000/movies')
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//         // LOG: (3) [{…}, {…}, {…}]
//     });
// }

// document.addEventListener('DOMContentLoaded', initialization3);
// If everything is working, you should see an array of three objects logged in the console using the code above.
// These three objects represent the three 'records' available from the movies API

const initialization4 = () => {
    const inputForm = document.querySelector('form');
// modify the URL we pass to our fetch function based on the input typed into the HTML form. Using interpolation, we can adapt our existing code to do this:
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        });
    });
}

document.addEventListener('DOMContentLoaded', initialization4);


// Display Fetched Data on the Page
    fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
            const title = document.querySelector('section#movieDetails h4');    // replaces the Title and Summary with data retrieved from our server
            const summary = document.querySelector('section#movieDetails p');   // accesses the DOM & stores the 2 elements in JavaScript
        });

// Next, we want to change the contents of our title & summary elements based on the retrieved data. We can do this by setting their innerText values to the appropriate values in our data:
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

            title.innerText = data.title;
            summary.innerText = data.summary;
        });

// In this lesson, we've gone through the basic mechanisms for providing a better experience. By capturing user input via event listeners, using fetch requests, and DOM manipulation, we can update page content as a user requests it. Although this won't be the case for all events, we also overrode HTML's default behavior.


// My Solution


/*
Deliverables
When a user inputs a valid ID, the movie information should appear on the page.
    1. Add event listeners to capture form data & override a form's default behavior
    2. Fetch data based on what the user types into that form
    3. Display that data on the page
*/




// Lab Solution
