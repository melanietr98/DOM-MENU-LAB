var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

// Task 1.0
let mainEl = document.querySelector('main')

// Task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)'

// Task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'

// Task 1.3
mainEl.classList.add('flex-ctr')

// Task 2.0
let topMenuEl = document.querySelector('#top-menu')

// Task 2.1
topMenuEl.style.height = "100%"

// Task 2.2
topMenuEl.classList.add('flex-around')

// Task 2.3
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

// Task 3.1
for(let i = 0; i < menuLinks.length; i++){
    let link = menuLinks[i]
    let a = document.createElement("a")
    a.setAttribute("href", link.href)
    a.innerHTML = link.text
    topMenuEl.appendChild(a)
}
