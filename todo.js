const input = document.querySelector(".input");
const btn = document.querySelector(".addTask button");
const notCompleted = document.querySelector(".notCompleted");
const Completed = document.querySelector(".Completed");

function addList() {
  //   creating element section
  const newList = document.createElement("li");
  const checkBtn = document.createElement("button");
  const trashBtn = document.createElement("button");
  const arrowBtn = document.createElement("button");
  //   pushing to inner html
  checkBtn.innerHTML = '<i class="fa fa-check">';
  trashBtn.innerHTML = '<i class="fa fa-trash-o">';
  arrowBtn.innerHTML = '<i class="fa fa-arrow-circle-up">';
  if (input.value !== "") {
    newList.textContent = input.value;
    input.value = "";

    // appending section
    notCompleted.appendChild(newList);
    newList.appendChild(checkBtn);
    newList.appendChild(trashBtn);
    newList.appendChild(arrowBtn);

    arrowBtn.style.display = "none";
  }

  // button function
  /*******check button**********/
  checkBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
    Completed.appendChild(parent);
    checkBtn.style.display = "none";
    arrowBtn.style.display = "block";
  });

  /*******delete button function**********/
  function Delete() {
    newList.remove();
  }
  trashBtn.addEventListener("click", Delete);

  /*****************arrow up function *****************/
  function moveUp() {
    newList.remove();
    notCompleted.appendChild(newList);
    arrowBtn.style.display = "none";
    checkBtn.style.display = "block";
  }

  arrowBtn.addEventListener("click", moveUp);
}

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    addList();
  }
});

btn.addEventListener("click", addList);
