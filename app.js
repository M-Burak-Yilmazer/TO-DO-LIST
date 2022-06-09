const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector(".tasks");

const footer = document.querySelector(".footer");
const removeAll = document.createElement("button");
removeAll.className = "footer-btn";
removeAll.textContent = "Clear All";

footer.appendChild(removeAll);

window.onload = () => {
  input.focus();
};
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = input.value;

  const task_el = document.createElement("div");
  task_el.className = "task";

  const task_content_el = document.createElement("div");
  task_content_el.className = "content";

  task_el.appendChild(task_content_el);

  const task_checkbox_el = document.createElement("input");
  task_checkbox_el.setAttribute("id", "checkbox");
  task_checkbox_el.type = "checkbox";
  task_content_el.appendChild(task_checkbox_el);

  const task_input_el = document.createElement("input");
  task_input_el.className = "text";
  task_input_el.type = "text";
  task_input_el.value = task;
  task_input_el.setAttribute("readonly", "readonly");
  task_content_el.appendChild(task_input_el);

  const task_buttons_el = document.createElement("div");
  task_buttons_el.className = "buttons";

  const task_edit_el = document.createElement("button");
  task_edit_el.className = "edit";
  task_edit_el.textContent = "Edit";

  const task_delete_el = document.createElement("button");
  task_delete_el.className = "delete";
  task_delete_el.textContent = "Delete";

  task_buttons_el.appendChild(task_edit_el);
  task_buttons_el.appendChild(task_delete_el);

  task_el.appendChild(task_buttons_el);
  list.appendChild(task_el);

//   const footer = document.querySelector(".footer");
//   const removeAll = document.createElement("button");
//   removeAll.className = "footer-btn";
//   removeAll.textContent = "Clear All";

//   footer.appendChild(removeAll);

  input.value = "";

  const task_list_el = document.querySelector(".task-list");

  task_edit_el.addEventListener("click", (e) => {
    if (task_edit_el.innerText.toLowerCase() == "edit") {
      task_edit_el.innerText = "Save";
      task_input_el.removeAttribute("readonly");
      task_input_el.focus();
    } else {
      task_edit_el.innerText = "Edit";
      task_input_el.setAttribute("readonly", "readonly");
    }
  });

  task_delete_el.addEventListener("click", (e) => {
    list.removeChild(task_el);
  });
  removeAll.addEventListener("click", (e) => {
    task_list_el.removeChild(list);
    window.location.reload();
  });
});
