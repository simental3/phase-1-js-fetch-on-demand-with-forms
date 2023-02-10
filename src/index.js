// Fetch On Demand With Forms Code-Along Lab

// Add Event Listeners to Capture Form Data and Override the Form's Behavior
// const initialization = () => {
//     const inputForm = document.querySelector('form');
    
//     inputForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         console.log(event);
//     })
// }

// document.addEventListener('DOMContentLoaded', initialization);


// // Access Input Value from an Event Object
// const initiliazation1 = () => {
//     const inputForm = document.querySelector('form');

//     inputForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         console.log(event);
        
//         event.target.children[1].value;
//     })
// }


// // Access Input Value Directly
// const initiliazation2 = () => {
//     const inputForm = document.querySelector('form');

//     inputForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const input = document.querySelector('input#searchByID');

//         console.log(input.value);
//     });
// };


// // Fetch Data Based on User Input
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

// // document.addEventListener('DOMContentLoaded', initialization3);

// const initialization4 = () => {
//     const inputForm = document.querySelector('form');
// // modify the URL we pass to our fetch function based on the input typed into the HTML form. Using interpolation, we can adapt our existing code to do this:
//     inputForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const input = document.querySelector('input#searchByID');

//         fetch(`http://localhost:3000/movies/${input.value}`)
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data)
//         });
//     });
// }

// document.addEventListener('DOMContentLoaded', initialization4);


// DISPLAY FETCHED DATA ON THE PAGE
// const initialization5 = () => {
//     const inputForm = document.querySelector('form');

//     inputForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const input = document.querySelector('input#searchByID');

//         fetch(`http://localhost:3000/movies/${input.value}`)
//         .then((response) => response.json())
//         .then((data) => {
//             const title = document.querySelector('section#movieDetails h4');
//             const summary = document.querySelector('section#movieDetails p');
//         });
//     })
// }

// document.addEventListener('DOMContentLoaded', initialization5);


const initialization6 = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
        
            title.innerText = data.title;
            summary.innerText = data.summary;
        });
    })
}

document.addEventListener('DOMContentLoaded', initialization6);