
/**
 * Reads what is currently typed into the two boxes.
 */
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);

  return { name, price };
}

/**
 * Empties both boxes.
 */
export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

/**
 * Draws the list from an array of items.
 */
export function renderList(items) {
  const list = document.querySelector("#list");

  // Remove the old cards first
  list.innerHTML = "";

  // Create a card for every item
  items.forEach(item => {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceParagraph = document.createElement("p");
    priceParagraph.classList.add("price");
    priceParagraph.textContent = `${item.price} EGP`;

    card.append(heading, priceParagraph);
    list.append(card);
  });
}

/**
 * Connects the form to the page.
 */
export function wireForm() {
  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");

  // This array stores the products
  const items = [];

  form.addEventListener("submit", event => {
    // Stop the browser from reloading the page
    event.preventDefault();

    const { name, price } = readForm();
    const priceInput = document.querySelector("#price").value.trim();

    // Check that the name is not empty
    if (name === "") {
      error.textContent = "Give the product a name.";
      return;
    }

    // Check that the price is valid and greater than zero
    if (
      priceInput === "" ||
      !Number.isFinite(price) ||
      price <= 0
    ) {
      error.textContent = "Give the product a price.";
      return;
    }

    // Everything is valid
    error.textContent = "";

    items.push({ name, price });

    renderList(items);
    clearForm();
  });
}
