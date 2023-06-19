import('./rooms.js');

document.addEventListener('DOMContentLoaded', function () {
    let totalVolume = 0;
    let totalWeight = 0;
    let itemCart = {};
    const totalVolumeElement = document.createElement('p');
    const totalWeightElement = document.createElement('p');
    updateTotal();

    function updateTotal() {
        totalVolumeElement.textContent = `Bendras Tūris: ${totalVolume.toFixed(3)} m3`;
        totalWeightElement.textContent = `Bendras Svoris: ${totalWeight.toFixed(2)} kg`;
    }

    // Append total elements to the body
    document.body.appendChild(totalVolumeElement);
    document.body.appendChild(totalWeightElement);


    document.querySelectorAll('.room-button').forEach(button => {
        button.addEventListener('click', function () {
            createItemList(this.id);
        });
    });

    document.getElementById('reset-button').addEventListener('click', function () {
        totalVolume = 0;
        totalWeight = 0;
        itemCart = {}; // Reset the cart when reset button is clicked
        updateTotal();
        const existingList = document.getElementById('item-list');
        if (existingList) {
            existingList.remove();
        }
    });

    function createItemList(room) {
        const items = rooms[room];
        const list = document.createElement('ul');
        list.id = 'item-list';

        const existingList = document.getElementById('item-list');
        if (existingList) {
            existingList.remove();
        }

        items.forEach(item => {
            const listItem = document.createElement('li');
            const itemInfo = document.createElement('div');
            itemInfo.className = 'item-info';
            itemInfo.textContent = `${item.name} `;

            const variationSelect = document.createElement('select');
            item.variations.forEach((variation, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = `${variation.name} (Tūris: ${variation.volume}m3, Svoris: ${variation.weight}kg, Matmenys: ilgis:${variation.dimensions.length}m, plotis:${variation.dimensions.width}m, aukštis:${variation.dimensions.height}m)`;
                variationSelect.appendChild(option);
            });
            itemInfo.appendChild(variationSelect);

            const quantityLabel = document.createElement('span');
            quantityLabel.textContent = ' Quantity: 0';
            itemInfo.appendChild(quantityLabel);

            variationSelect.addEventListener('change', function () {
                const selectedVariationIndex = variationSelect.value;
                const itemCount = itemCart[item.name] && itemCart[item.name][selectedVariationIndex]
                    ? itemCart[item.name][selectedVariationIndex]
                    : 0;
                quantityLabel.textContent = ` Quantity: ${itemCount}`;
            });

            const addButton = document.createElement('button');
            addButton.textContent = '+';
            addButton.addEventListener('click', function () {
                const selectedVariationIndex = variationSelect.value;
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
                quantityLabel.textContent = ` Quantity: ${itemCart[item.name][selectedVariationIndex]}`;
            });
            const removeButton = document.createElement('button');
            removeButton.textContent = '-';
            removeButton.addEventListener('click', function () {
                const selectedVariationIndex = variationSelect.value;
                const selectedVariation = item.variations[selectedVariationIndex];

                if (itemCart[item.name] && itemCart[item.name][selectedVariationIndex] && itemCart[item.name][selectedVariationIndex] > 0) {
                    itemCart[item.name][selectedVariationIndex] -= 1;
                    totalVolume -= selectedVariation.volume;
                    totalWeight -= selectedVariation.weight;
                    updateTotal();
                    quantityLabel.textContent = ` Quantity: ${itemCart[item.name][selectedVariationIndex]}`;
                }
            });
            itemInfo.appendChild(removeButton);
            itemInfo.appendChild(addButton);
            listItem.appendChild(itemInfo);
            list.appendChild(listItem);
        });

        document.body.appendChild(list);
    }


    function updateQuantity(quantityLabel, quantity) {
        quantityLabel.textContent = ' Quantity: ' + quantity;
    }
});