const addForm = document.getElementById('addForm');
const inventory = document.getElementById('inventory');

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const quantity = document.getElementById('quantity').value;

    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `<span class="item-name">${itemName}</span> <span class="item-quantity">${quantity}</span>`;

    const editItemBtn = document.createElement('button');
    editItemBtn.classList.add('edit-item-btn');
    editItemBtn.textContent = 'Edit Item';
    editItemBtn.addEventListener('click', () => {
        const newItemName = prompt('Enter the new item name:');
        const newQuantity = prompt('Enter the new quantity:');
        if (newItemName !== null && newItemName !== '') {
            newItem.querySelector('.item-name').textContent = newItemName;
        }
        if (newQuantity !== null && newQuantity !== '') {
            newItem.querySelector('.item-quantity').textContent = newQuantity;
        }
    });

    newItem.appendChild(editItemBtn);
    inventory.appendChild(newItem);

    addForm.reset();
});