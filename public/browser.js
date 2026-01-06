console.log("Frontend JS ishga tushdi");

function itemTemplate(item) {
  return `<li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="item-text" >${item.reja}</span>
            <div class="btn-group btn-group-sm">
              <button data-id="${item._id}" class="edit-me btn btn-outline-primary">수정</button>
              <button data-id="${item._id}" class="delete-me btn btn-outline-danger">삭제</button>
            </div>
          </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();
  if (createField.value.trim() !== "") {
    axios
      .post("/create-item", { reja: createField.value })
      .then((res) => {
        document
          .getElementById("item-list")
          .insertAdjacentHTML("beforeend", itemTemplate(res.data));
        createField.value = "";
        createField.focus();
      })
      .catch((err) =>
        console.log("Iltimos qaytadan harakat qilib koring...", err)
      );
  } else {
    alert("Reja yozing...");
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-me")) {
    if (confirm("삭제?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((res) => {
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Iltimos qaytadan harakat qilib koring...", err);
        });
    }
  }
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "O'zgartirish kiriting",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );

    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((res) => {
          //   console.log(res);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("Iltimos qaytadan harakat qilib koring...");
        });
    }
  }
});

document.getElementById("clean-all").addEventListener("click", function () {
  const deleteCheck = confirm(`Hamma rejalar o'chirilisinmi?`);
  if (deleteCheck) {
    axios
      .post("/delete-all", { delete_all: true })
      .then((res) => {
        document.location.reload();
      })
      .catch((err) => {
        console.log("Iltimos qaytadan harakat qilib koring...");
      });
  }
});
