var container = document.getElementById("container");
container = document.querySelector("#container");
const second_list_items = document.getElementsByClassName("second");
const third_list_item = document.querySelector("ol .third");
// container.innerText = "Hello"
const footer = document.querySelector(".footer")
footer.classList.add("main")
footer.classList.remove("main")
const li_element = document.createElement("li")
li_element.innerText = "four";
const ul = document.querySelector("ol");
ul.appendChild(li_element);
const ol_list_items = document.querySelectorAll("ol li");
for (li_item of ol_list_items) {
    li_item.style.backgroundColor = "green";
}
footer.remove()
