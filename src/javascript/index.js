import "./../sass/style.scss";
const CLASS = "opened";
const DATA_ALL = "all-panels";
const acc = document.querySelector(".accordion");
const panels = [...document.querySelectorAll(".accordion__panel")];

acc.addEventListener("click", (evt) => {
  const target = evt.target;

  if (target.type === "button") {
    const data = target.dataset.target;

    if (data === DATA_ALL) {
      panels.forEach((elem) => elem.classList.remove(CLASS));
    } else {
      panels.find((elem) => elem.id === data).classList.toggle(CLASS);
    }
  }
});
