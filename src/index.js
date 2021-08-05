// import { result } from 'lodash'
import breeds from './breeds'

// console.log(axios)

//HTTP is a protocal for communication for two computers, who are connected over the network to talk to eachother 
//lambda-times-api.herokuapp.com/ is the ip address of a particular mechine
///friends is a resource on the server

// https://httpie.io/run --> http request is on the top. the first line is the start line. header is next, additional information about the request
// console.log(results) // the data is not here
// console.log('1 about to fetch data with axios')


// //idomatic way

// axios.get('https://lambda-times-api.herokuapp.com/friends')
//   .then(futureData => {
//   //future code, for when the data acutally arrives
//   //freedom to assume the data is here
//   console.log('2 here is the future data',futureData)
//   console.log('here is the RESPONSE BODY', futureData.data)
// })
//   .catch(drama => {
//   //handle the drama
//   console.log(drama)
// })

// // if you want to handle several different promises
// //promise.all([p1, p2, p3]).then([res1, res2, res3])

// console.log('3 we requested data with axios')
// a promise is an object that represents the result of a computation
// we need it so it doesnt block on program 

// Imports at the top of the file!
// We never nest imports inside blocks of code!

//penidng ::: when its waiting to go through
//fulfilled ::: when it successeds
//rejected ::: when it goes straight to the failer
//selected ::: 



// 👉 TASK 1- Test out the following endpoints:

//  https://lambda-times-api.herokuapp.com/friends
//  https://lambda-times-api.herokuapp.com/friends/1
//  https://lambda-times-api.herokuapp.com/quotes
//  https://lambda-times-api.herokuapp.com/cards
//  https://lambda-times-api.herokuapp.com/breeds
//  https://dog.ceo/api/breeds/image/random

//  * With HTTPie (command-line HTTP Client)
//  * With Postman (HTTP Client with GUI)
//  * With Chrome and the Network Tab
//  * With JS using the native fetch [STRETCH]


// 👉 TASK 2- Select the "entry point", the element
// inside of which we'll inject our dog cards 
const entryPoint = document.querySelector('.entry');


// 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// Use this function to build a Card, and append it to the entry point.
function dogCardMaker({ imageURL, breed }) {
  // instantiating the elements
  const dogCard = document.createElement('div')
  const image = document.createElement('img')
  const heading = document.createElement('h3')
  // setting class names, attributes and text
  heading.textContent = `Breed: ${breed}`
  image.src = imageURL
  image.classList.add('dog-image')
  dogCard.classList.add('dog-card')
  // creating the hierarchy
  dogCard.appendChild(image)
  dogCard.appendChild(heading)
  // adding some interactivity
  dogCard.addEventListener('click', () => {
    dogCard.classList.toggle('selected')
  })
  // never forget to return!
  return dogCard
}


// 👉 TASK 4- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//    * Proyects with npm: install it with npm and import it into this file


// 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console put breakpoint
//    * IN ANY CASE: log "done" to the console

// axios.get('https://dog.ceo/api/breed/samoyed/images/random/6')
//   .then(res => { // works
//     // console.log(res)
//     const breed = 'samoyed';
//     const imageURL = res.data.message[0]
//     const dogCard = dogCardMaker({imageURL, breed})
//     entryPoint.append(dogCard)
//   }) 
//   .catch(err => { //doesnt work
//     console.error(err)
//   }) 



// .finally() // will run no matter what




// axios.get('https://dog.ceo/api/breed/husky/images/random/6')
//   .then(res => {
//     const images = res.data.message
//     images.forEach(image => {
//       //make doge card
//       const dogCard = dogCardMaker({imageURL: image, breed: 'husky' })
//       console.log(dogCard)
//       //append it to the DOM
//       entryPoint.append(dogCard)
//     });
// })
//   .catch(err => {
//     // debugger
// })


// fetch('https://dog.ceo/api/breed/husky/images/random/6')
//   .then(res => {
//     // the body is not in yet, only headers
//     return res.json()
//   })
//   .then(parsedJSON => {
//     //here is the data!
//   })
//   .catch (err => {
//     debugger
//   })

// 👉 (OPTIONAL) TASK 6- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)

function getDogs(breed, number) {
  axios.get(`https://dog.ceo/api/breed/${breed}/images/random/${number}`)
  .then(res => { // works
    res.data.message.forEach(imageURL => {
      const dogCard = dogCardMaker({imageURL, breed})
      entryPoint.append(dogCard)
    })
  }) 
  .catch(err => { //doesnt work
    console.error(err)
  }) 
}


getDogs('weimaraner', 3)

// 👉 (OPTIONAL) TASK 7- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`


const btn = document.querySelector('.get-dog');
btn.addEventListener('click', event => {
  const dogs = axios.get('https://lambda-times-api.herokuapp.com/breeds')
    .then(res => {
      res.data.forEach(breed => {
        getDogs(breed, 3)
      });
    }).catch(err => console.error(err))
})



// 👉 (OPTIONAL) TASK 8- Import the breeds from `breeds.js`
// or request them from https://lambda-times-api.herokuapp.com/breeds
// and loop over them, fetching a dog at each iteration


// HTTP VERB
//C - create --> post
//R - read --> get
//U - update --> patch/put
//D - delete --> deletes
