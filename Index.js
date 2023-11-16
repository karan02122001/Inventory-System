const inventory = {
    items : [],
    addItem: function(name, quantity) {
        this.items.push({ name, quantity});
    },
    removeItem: function(index) {
        if(index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        }
    },

    displayInventory: function() {
        const inventoryList = document.getElementById('inventoryList');
        inventoryList.innerHTML = ' ';

        this.items.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - Quantity: ${item.quantity}`;
            inventoryList.appendChild(listItem);
        });


    //update the remove item dropdown list
    const removeItemSelect = document.getElementById('removeItem');
    removeItemSelect.innerHTML = ' ';
    this.items.forEach((item,index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = item.name;
        removeItemSelect.appendChild(option);
    });

    }
};


  // function to add a new item to the inventory

  function addItem() {
    const itemName = document.getElementById('itemName').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    if (itemName && !isNaN(quantity)) {
        inventory.addItem(itemName, quantity);
        inventory.displayInventory();   
    }
  }

  // function to remove an item from the inventory

  function removeItem() {
    const selectedIndex = document.getElementById('removeItem').value;
    inventory.removeItem(selectedIndex);
    inventory.displayInventory();
  }