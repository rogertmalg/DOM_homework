document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    document.querySelector('#watchlist-form').addEventListener('submit', handleFormSubmit);
  })

  const handleFormSubmit = function (event) {
    event.preventDefault();
  
    const newTitle = `${event.target.title.value}`;
    const newType = `${event.target.type.value}`;
    const newPlatform = `${event.target.platform.value}`;
    const newListItem = document.createElement('li');
    newListItem.classList.add("single-item")
    const list = document.querySelector('#watchlist');
    // newListItem.textContent = `Title: ${newTitle} Author: ${newAuthor} Category: ${newCategory}`;
    newListItem.innerHTML = `<h2>${newTitle}</h2><br><h3>${newType}</h3><br><h4>${newPlatform}</h4>`;
    list.appendChild(newListItem);
    this.reset()
  };