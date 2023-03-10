const el = document.getElementById("main")
const addBtn = document.getElementById("add-user")
const CLICKED_CLASS = "clicked";
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");



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

open.addEventListener("click", function () {

  modal.style.display = "flex"
})
