const el = document.getElementById("main")
const addBtn = document.getElementById("add-user")
const CLICKED_CLASS = "clicked";

function info() {
  fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      for (let val = 0; val < data.length; val++) {
        const els = document.createElement('div');
        els.innerHTML = `<h4>${data[val].id} : ${data[val].title}</h4>`
        el.append(els)
      }

    })

}

addBtn.addEventListener('click', function () {

  const currentClass = addBtn.className;

  if (currentClass !== CLICKED_CLASS) {
    
    info();
    addBtn.className = CLICKED_CLASS;

  } else {

    el.innerHTML = "";
    addBtn.classList.remove(CLICKED_CLASS)

  }


})