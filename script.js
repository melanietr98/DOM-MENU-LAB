// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

// task 1.1
let mainEl = document.querySelector('main')


mainEl.style.backgroundColor = 'var(--main-bg)'

//task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'

//task 1.3
mainEl.classList.add('flex-ctr')

//task 2.0
let topMenuEl = document.querySelector('#top-menu')

//task 2.1
topMenuEl.style.height = "100%"

//task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

//task 2.3
topMenuEl.classList.add('flex-around')



console.log(menuLinks)
for(let i = 0; i < menuLinks.length; i++){
    // console.log(menuLinks[i].text)
    let link = menuLinks[i]
    let a = document.createElement("a")
    // topMenuEl.innerHTML += link.text
    a.setAttribute("href", link.href)
    a.innerHTML = link.text
    topMenuEl.appendChild(a)
}
console.log(topMenuEl)