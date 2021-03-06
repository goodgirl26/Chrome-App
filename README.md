# Making Chrome App with VanilaJS!

---

1. Making a JS Clock
2. Saving the User Name
3. Making a To Do List
4. Image Background
5. Getting the Weather

---

### 1. Making a JS Clock

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

#### setInterval

I have to refresh to update the date.

It's not cool.

There's a key to solve this problem!

It's 'setInterval'

`function init() { getTime(); // get current Time setInterval(getTime, 1000); // set time per seconds }`

#### ternary operator

It's similar to if/else statement.

`clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${ minutes < 10 ?`0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;`

(condition) ? true : false

### 2. Saving the User Name

#### Local Storage

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
