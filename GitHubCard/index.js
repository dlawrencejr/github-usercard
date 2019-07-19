/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



axios.get('https://api.github.com/users/dlawrencejr')
.then((data) => {
  console.log('Successfully captured!',data);

  let cards = document.querySelector('.cards');
  cards.appendChild(createCard(data.data));
    
})
.catch(function(err) {
   console.log('Error!!!', err);
 })


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function createCard (data){

  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardsInfo = document.createElement('div');
  const cardName = document.createElement('h3');
  const cardUsername = document.createElement('p');
  const cardLocation = document.createElement('p');
  const cardProfile = document.createElement('p');
  const cardAddress = document.createElement('a');
  const cardFollower = document.createElement('p');
  const cardFollowing = document.createElement('p');
  const cardBio = document.createElement('p');

  card.appendChild(image);
  image.src = data.avatar_url;
  card.classList.add('card');
  
  card.appendChild(cardsInfo);
  cardsInfo.classList.add('card-info');

  cardsInfo.appendChild(cardName);
  cardName.classList.add('name');
  cardName.textContent = data.name;

  cardsInfo.appendChild(cardUsername);
  cardsInfo.classList.add('username');
  cardUsername.textContent = data.login;

  cardsInfo.appendChild(cardLocation);
  cardsInfo.classList.add('location');
  cardsInfo.textContent = `Location:${data.location}`;

  cardsInfo.appendChild(cardProfile);
  cardsInfo.classList.add('profile');
  cardProfile.textContent = `Profile:${cardAddress}`;

  cardsInfo.appendChild(cardAddress);
  const profileAddress = data.url;
  cardAddress.innerHTML = profileAddress.link(data.url);

  cardsInfo.appendChild(cardFollower);
  cardFollower.textContent = `Followers:${data.followers}`;

  cardsInfo.appendChild(cardFollowing);
  cardFollowing.textContent = `Following:${data.following}`;

  cardsInfo.appendChild(cardBio);
  cardBio.textContent = `Bio:${data.bio}`;

  console.log(card)

  return card;
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(data => {
    const card = createCard(data.data)
    const cards = document.querySelector('.cards')
    cards.appendChild(card)
  })
})
