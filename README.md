# Making Chrome App with VanilaJS!

---

1. Making a JS Clock
2. Saving the User Name
3. Making a To Do List
4. Image Background
5. Getting the Weather

---

## 1. Making a JS Clock

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

## Problem

I have to refresh to update the date.

It's not cool.

There's a key to solve this problem!

It's 'setInterval'
