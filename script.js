import("./rooms.js");

document.addEventListener("DOMContentLoaded", function () {
  let totalVolume = 0;
  let totalWeight = 0;
  let itemCart = {};
  const totalVolumeElement = document.createElement("p");
  const totalWeightElement = document.createElement("p");
  updateTotal();

  function updateTotal() {
    totalVolumeElement.textContent = `Bendras Tūris: ${totalVolume.toFixed(
      3
    )} m3`;
    totalWeightElement.textContent = `Bendras Svoris: ${totalWeight.toFixed(
      2
    )} kg`;
  }

  // Append total elements to the body
  document.body.appendChild(totalVolumeElement);
  document.body.appendChild(totalWeightElement);

  document.querySelectorAll(".room-button").forEach((button) => {
    button.addEventListener("click", function () {
      createItemList(this.id);
    });
  });

  document
    .getElementById("reset-button")
    .addEventListener("click", function () {
      totalVolume = 0;
      totalWeight = 0;
      itemCart = {}; 
      updateTotal();
      const existingList = document.getElementById("item-list");
      if (existingList) {
        existingList.remove();
      }
    });

  function createItemList(room) {
    const items = rooms[room];
    const list = document.createElement("ul");
    list.id = "item-list";

    const existingList = document.getElementById("item-list");
    if (existingList) {
      existingList.remove();
    }

    items.forEach((item) => {
      const listItem = document.createElement("li");
      const itemInfo = document.createElement("div");
      const itemName = document.createElement("p");

      itemInfo.className = "item-info";
      itemName.textContent = `${item.name}`;
      itemName.className = "item-name";
      console.log(itemName);

      const radioContainer = document.createElement("div");
      radioContainer.className = "radio-container";
      item.variations.forEach((variation, index) => {
        const radioLabel = document.createElement("label");
        radioLabel.textContent = `${variation.name} (Tūris: ${variation.volume}m3, Svoris: ${variation.weight}kg, Matmenys: ilgis:${variation.dimensions.length}m, plotis:${variation.dimensions.width}m, aukštis:${variation.dimensions.height}m)`;

        const radio = document.createElement("input");
        const itemCountElement = document.createElement("span"); 
        itemCountElement.className = "item-count"; 
        radio.type = "radio";
        radio.name = item.name; 
        radio.value = index;
        radio.addEventListener("change", function () {
          const selectedVariationIndex = radio.value;
          const itemCount =
            itemCart[item.name] && itemCart[item.name][selectedVariationIndex]
              ? itemCart[item.name][selectedVariationIndex]
              : 0;
          updateQuantity(quantityLabel, itemCount);
        });

        radioLabel.appendChild(radio);
        radioContainer.appendChild(radioLabel);
        radioContainer.appendChild(itemName);
        radioLabel.appendChild(itemCountElement);
      });
      itemInfo.appendChild(radioContainer);

      const quantityLabel = document.createElement("span");
      quantityLabel.textContent = " Kiekis: 0";
      itemInfo.appendChild(quantityLabel);

      const addButton = document.createElement("button");
      addButton.textContent = "+";
      addButton.addEventListener("click", function () {
        const selectedVariationIndex =
          radioContainer.querySelector("input:checked").value;
        const selectedVariation = item.variations[selectedVariationIndex];

        if (!itemCart[item.name]) {
          itemCart[item.name] = { [selectedVariationIndex]: 1 };
        } else if (!itemCart[item.name][selectedVariationIndex]) {
          itemCart[item.name][selectedVariationIndex] = 1;
        } else {
          itemCart[item.name][selectedVariationIndex] += 1;
        }
        totalVolume += selectedVariation.volume;
        totalWeight += selectedVariation.weight;
        updateTotal();
        updateQuantity(
          quantityLabel,
          itemCart[item.name][selectedVariationIndex],
          item.name,
          selectedVariationIndex
        );
      });

      const removeButton = document.createElement("button");
      removeButton.textContent = "-";
      removeButton.addEventListener("click", function () {
        const selectedVariationIndex =
          radioContainer.querySelector("input:checked").value;
        const selectedVariation = item.variations[selectedVariationIndex];

        if (
          itemCart[item.name] &&
          itemCart[item.name][selectedVariationIndex] &&
          itemCart[item.name][selectedVariationIndex] > 0
        ) {
          itemCart[item.name][selectedVariationIndex] -= 1;
          totalVolume -= selectedVariation.volume;
          totalWeight -= selectedVariation.weight;
          updateTotal();
          updateQuantity(
            quantityLabel,
            itemCart[item.name][selectedVariationIndex],
            item.name,
            selectedVariationIndex
          );
        }
      });

      itemInfo.appendChild(removeButton);
      itemInfo.appendChild(addButton);
      listItem.appendChild(itemInfo);
      list.appendChild(listItem);
    });

    document.body.appendChild(list);
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.addEventListener("change", function () {
        document.querySelectorAll("label").forEach((label) => {
          label.style.outline = "";
          label.style.fontSize = "";
          label.style.boxShadow = "";
        });

        if (this.checked) {
          const label = this.parentNode;
          label.style.boxShadow = "0 0 5px #03A9F4";
        }
      });
    });
  }

  function updateQuantity(quantityLabel, quantity, itemName, variationIndex) {
    quantityLabel.textContent = " Kiekis: " + quantity;
    const itemCountElements = document.querySelectorAll(".item-count"); 
    itemCountElements.forEach((itemCountElement) => {
      if (
        itemCountElement.parentNode.querySelector("input").name === itemName && 
        itemCountElement.parentNode.querySelector("input").value ==
          variationIndex
      ) {
        itemCountElement.textContent =
          quantity > 0 ? ` (Krepšelyje: ${quantity})` : ""; 
      }
    });
  }
});
