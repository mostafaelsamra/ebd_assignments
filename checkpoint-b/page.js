// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";


/**
 * Draws the items into the list, replacing the old content.
 */
export function renderItems(list) {
  const ul = document.querySelector("#list");

  // Remove all previous items
  ul.innerHTML = "";

  // Create one list item for each product
  list.forEach(item => {
    const li = document.createElement("li");

    li.classList.add("entry");
    li.textContent = item.name;

    ul.append(li);
  });
}

/**
 * Returns only items costing less than 100 EGP.
 */
export function matching() {
  return items.filter(item => item.price < 100);
}

/**
 * Sets up the page and the filter button.
 */
export function start() {
  // Display all items when the page opens
  renderItems(items);

  // Filter the list when the button is clicked
  document.querySelector("#run-filter").addEventListener("click", () => {
    renderItems(matching());
  });
}


