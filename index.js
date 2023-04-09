const monsterUrl = 'http://localhost:3000/monsters'
const monsterList = document.querySelector('.monster-list')
const monsterForm = document.querySelector('#monster-form')
const loadMoreButton = document.querySelector('#load-more')

let page = 1
const limit = 50

function fetchMonsters() {
  fetch(`${monsterUrl}?_page=${page}&_limit=${limit}`)
    .then(response => response.json())
    .then(monsters => {
      monsters.forEach(monster => {
        const li = document.createElement('li')
        li.innerHTML = `
          <h3>${monster.name}</h3>
          <p>Age: ${monster.age}</p>
          <p>Description: ${monster.description}</p>
        `
        monsterList.appendChild(li)
      })
    })
}

function createMonster(event) {
  event
