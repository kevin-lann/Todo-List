// populate date text
const dateText = document.querySelector("#date strong");
dateText.textContent = new Date().toISOString().slice(0,10);

// Apply delete entry functionality to existing list entries
for(x_btn of document.querySelectorAll(".x_btn")) {
    applyRemovability(x_btn);
}

// New entry functionality
const add_btn = document.querySelector("#add");
const entry_list = document.querySelector("#list");
const main_container = document.querySelector("#main_container");

add_btn.addEventListener("click", () => {
    const input_box = document.querySelector("#input_text");
    let text = input_box.value;

    if (!text) {
        alert("Please Enter Some Text");
        return;
    }
    if(text.length > 32) {
        alert("Text too long.");
        return;
    }
    if(entry_list.children.length < 20) {
        setupNewEntry(text);
    }
    else {
        alert("Too many entries. Please delete some.");
    }
});



// apply removabilitty from X btns
function applyRemovability(btn) {
    btn.addEventListener("click", () => {
        entry_list.removeChild(btn.parentElement);
        changeMargin(-1);
    });
}

function setupNewEntry(text){
    const new_entry = document.createElement("div");

    new_entry.classList.add("list_item");

    new_entry.innerHTML = `<button class="x_btn"> </button>
    <li>${text}</li>`

    applyRemovability(new_entry.firstChild); // firstChild is x_btm

    entry_list.insertBefore(new_entry, entry_list.firstCHild);

    changeMargin(1);
}

// use factor of 1 to increase margin, use -1 to decrease
function changeMargin(factor=1) {
    var new_margin = Number(main_container.style.marginTop.slice(0, -2)) + factor * 41;
    console.log(new_margin);
    main_container.style.marginTop = new_margin + "px";
}

