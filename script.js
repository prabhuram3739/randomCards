/* Initializing the card data array */
var cardData = [{
    id: '1',
    color: '#6F98A8'
  },
  {
    id: '2',
    color: '#72C3DC'
  },
  {
    id: '3',
    color: '#2F454E'
  },
  {
    id: '4',
    color: '#72C3DC'
  },
  {
    id: '5',
    color: '#2F454E'
  },
  {
    id: '6',
    color: '#BFBFBF'
  },
  {
    id: '7',
    color: '#BFBFBF'
  },
  {
    id: '8',
    color: '#6F98A8'
  },
  {
    id: '9',
    color: '#2F454E'
  }
];

// Determine the screen to be a desktop or a mobile, to change the view
var container = (window.innerWidth > 576)? document.getElementById('row'): document.getElementById('mobileRow');
constructCards(cardData);

/* Function to construct the cards from 1 to 9 based on the array value */
function constructCards(arr) {
arr.forEach((result, idx) => {
  // Create card element
  const card = document.createElement('div');
  card.classList = 'card-body';

  // Construct card content
  const content = `
  <div class="column">
    <div class="card" style="background-color: ${result.color}; color: #FFF;">
    <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#row">
      <div class="card-body">
        <h5>${result.id}</h5>
      </div>
      </div>
      </div>
      <div class="mobile-card" style="background-color: #EFEFEF; color: #00;">
      <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#row">
      <div class="card-body">
      <span class="mobile-color" style="border: 3px solid ${result.color};display: inline;"></span>
        <h5>${result.id}</h5>
      </div>
      </div>
      </div>
  </div>
  `;
  // Append newly created card element to the container
  container.innerHTML += content;
});
return container;
}

/* Function to clear the cards existing already each time when shuffle is clicked */
function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

/* Function to shuffle the cards when the shuffle button is clicked*/
var shuffleData = ((arr) => {
    var currentIndex = arr.length, temp, randomIndex;
    var temp = [];
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temp = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  temp = [...arr];
  cardData.length = 0;
  removeElementsByClass('column');
  container = constructCards(temp);
  cardData = temp;

  return container;
});

/* Funtion to Sort the elements of the card data */
var sortData = ((arr) => {
     var temp = [];

     //Sort the elements
    arr.sort(function(a,b) {
        if(a.id > b.id) return 1;
        if(a.id < b.id) return -1;
        return 0;
    });
    temp = [...arr];
  cardData.length = 0;
  removeElementsByClass('column');
  // calling the constructcards to display the sorted cards
  container = constructCards(temp);
  cardData = temp;

  return container;
});