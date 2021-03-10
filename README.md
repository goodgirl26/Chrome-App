# Making Chrome App with VanilaJS ❤

---

✔ Making a JS Clock : clock.js

✔ Saving the User Name : greeting.js

✔ Making a To Do List : todo.js

✔ Image Background : bg.js

✔ Getting the Weather : weather.js

---

### 1️⃣ Making a JS Clock

◾ Let's make functions!

init() 👉 getTime()

#### ❗ new Date()

first, you can get date from "new Date()".

`const date = new Date();`

you can get current hour from date.
`const hours = date.getHours();`

you can get current Minutes from date.
`const minutes = date.getMinutes();`

you can get current Secomds from data.
`const seconds = date.getSeconds() `

And, put them to html!

`clockTitle.innerText = `${hours}:${minutes}:${seconds}`;`

#### ❗ setInterval

I have to refresh to update the date.

It's not cool.

There's a key to solve this problem!

It's 'setInterval'

`function init() { getTime(); // get current Time setInterval(getTime, 1000); // set time per seconds }`

#### ❗ ternary operator

It's similar to if/else statement.

`clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${ minutes < 10 ?`0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;`

(condition) ? true : false

### 2️⃣ Saving the User Name

#### ❗ Local Storage

Local Storage is that saving your user's info into their computer.

In this case, first time you visit this page, it will ask your name and you will press the enter key.

And then, your browser will save your name into your Local Storage.

Next time, you don't have to submit your name again!

because your name already saved in your Local Storage.

first of all, get localstorage info with 'localStorage.getItem()'

` const currentUser = localStorage.getItem(USER_LS);`

first time you visit, Local Storage will return 'null'

`if (currentUser === null) { askForName(); } `

if you not , browser will paint your info

`else { paintGreeting(currentUser); }`

### 3️⃣ Making a Todo List

◾ Let's make functions!

handleSubmit() 👉 loadToDos() 👉 paintToDo() 👉 saveToDos() 👉 deleteToDo()

#### ❗ JSON.stringify() / JSON.parse()

LocalStorage can't save Javascript Object data.

You should convert Javascript object data to stirng data

JSON.stringify() : Javascript data into string data.

JSON.parse() : String data into Javascript data.

#### ❗ array.forEach()

` parsedToDos.forEach(function (toDo) { paintToDo(toDo.text); });`

The forEach() method executes a provided function once for each array element.

#### ❗ array.filter()

`const cleanToDos = toDos.filter(function (toDo) { return toDo.id !== parseInt(li.id);`

The filter() method creates a new array with all elements that pass the test implemented by the provided function.

### 4️⃣ Image Background

◾ Let's make funtions!

init() 👉 genRandom() 👉 paintImage()

#### ❗ Math.random()

The Math.random() method brings you a random number.

If you want to get a random number under 5,

`Math.random() * 5`

then it will return like 1.12535486465 or 4.52654321635

#### ❗ Math.floor()

If you want to get a floor number,

`Math.floor(Math.random() * 5)`

### 5️⃣ Getting the Weather

◾ Let's make functions!

init() 👉 loadCoords() 👉 askForCoords() 👉 handleGeoSuccess() 👉 handleGeoError() 👉 saveCoords() 👉 getWeather()

#### ❗ navigator.geolocation.getCurrentPosition()

The navigator.geolocation.getCurrentPosition() method require two functions. One is when you success to bring your geolocation and the other is when you failed.

success : `function handleGeoSuccess(position) { const latitude = position.coords.latitude; const longitude = position.coords.longitude; const coords = { latitude: latitude, longitude: longitude, }; saveCoords(coords); }`

failed: `function handleGeoError() { console.log("Cant access geolocation"); }`

Don't forget convert your Javascript Object data to string data
😁

`JSON.stringify(coords)`

#### ❗ Javascript expression

`const coords = { latitude: latitude, longitude: longitude, }`

it is same to

` const coords = { latitude, longitude, }`

#### ❗ fetch()

The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.

`fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
)`

A basic fetch request is really simple to set up.

`fetch('http://example.com/movies.json') .then(response => response.json()) .then(data => console.log(data));`

This is just an HTTP response, not the actual JSON. To extract the JSON body content from the response, we use the json() method (defined on the Body mixin, which is implemented by both the Request and Response objects.)

---

### Try it out

https://goodgirl26.github.io/Chrome-App/
