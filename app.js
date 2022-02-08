import { Book, Stores, Ui } from "./utils.js";

const store = new Stores();

function reloadTrash() {
  let ui = new Ui(
    JSON.parse(localStorage.getItem("books")),
    document.querySelector(".books-container-list")
  );
  setTimeout(() => {
    let trashs = document.querySelectorAll(".fa-trash-alt");
    trashs.forEach((el) => {
      el.addEventListener("click", (e) => {
        ui.delete(document.getElementById(e.target.id));
        store.deleteStore(e.target.id);
      });
    });
  }, 500);
}

window.addEventListener("load", () => {
  if (localStorage.getItem("books")) {
    let ui = new Ui(
      JSON.parse(localStorage.getItem("books")),
      document.querySelector(".books-container-list")
    );
    ui.display();
    reloadTrash();
  }
});

let inputs = document.querySelectorAll(".form-group input");
inputs.forEach((el) => {
  el.addEventListener("input", (e) => {
    el.setAttribute("content", e.target.value);
  });
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    formTitle.getAttribute("content") != "" &&
    formAuthor.getAttribute("content") != "" &&
    formIsbn.getAttribute("content") != ""
  ) {
    let title = formTitle.getAttribute("content");
    let author = formAuthor.getAttribute("content");
    let isbn = formIsbn.getAttribute("content");
    let book = new Book(title, author, isbn);
    store.addStore(book);
    let ui = new Ui(
      JSON.parse(localStorage.getItem("books")),
      document.querySelector(".books-container-list")
    );
    ui.add(book);
    inputs.forEach((el) => {
      el.value = "";
      el.setAttribute("content", "");
    });
    reloadTrash();
    Swal.fire({
        title: 'Added !',
        text: 'Book added to your List',
        icon: 'success',
        background: 'rgb(47, 47, 243)',
        color: 'whitesmoke',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    })
  } else {
    Swal.fire({
        title: 'Error!',
        text: 'Please complete the form',
        icon: 'error',
        background: 'rgb(47, 47, 243)',
        color: 'whitesmoke',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    })
  }
});
