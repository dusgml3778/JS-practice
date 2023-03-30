const el = document.getElementById("main")
const addBtn = document.getElementById("add-user")
const doubleBtn = document.getElementById("double")
const CLICKED_CLASS = "clicked";
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

function info(value) {

  fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then((data) => {
      if (isEmpty(value)) {
        for (let val = 0; val < data.length; val++) {
          const els = document.createElement('div');
          els.innerHTML = `<h4>${data[val].id} : ${data[val].name} : ${data[val].address.city}</h4>`
          el.append(els)
        }
      } else if (!isEmpty(value)) {
        const els = document.createElement('div');
        els.innerHTML = `<h4>${data[value].id} : ${data[value].name} : ${data[value].address.city}</h4>`
        el.append(els)

      }

    })

}

function isEmpty(str) {

  if (typeof str == "undefined" || str == null || str == "")
    return true;
  else
    return false;
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

doubleBtn.addEventListener('click', function () {

  el.innerHTML = "";
  const els = document.createElement('input')
  els.setAttribute('type', 'text')
  els.setAttribute('id', 'searchVal')
  const button = document.createElement('button')
  button.setAttribute('id', 'searchId')
  button.innerHTML = '아이디 입력'
  el.append(els);
  el.append(button);

  const searchVal = document.getElementById("searchVal")
  const searchId = document.getElementById("searchId")

  searchId.addEventListener('click', function () {

    info(searchVal.value);

  })
})



open.addEventListener("click", function () {

  modal.style.display = "flex"

})
