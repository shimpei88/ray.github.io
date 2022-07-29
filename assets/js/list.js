const init = () => {
  const listNumber = 8
  const listDom = document.querySelector('.list')
  const ul = document.createElement('ul');

  for (let i = 0; i < listNumber; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const pageId = i + 1
    a.href = `./arts/${pageId}`
    a.innerText = pageId
  
    li.appendChild(a)
  
    ul.appendChild(li)
  }

  listDom.appendChild(ul)
}

init()