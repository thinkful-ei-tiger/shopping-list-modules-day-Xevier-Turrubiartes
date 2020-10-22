import item from './item.js';

const items= [];
const hideCheckedItems = false;

function findById(id) {
    return this.items.find(item => item.id===id);
};

function addItem(name) {
    try{
        item.validateName(name);
        this.items.push(item.create(name));
    } catch(e) {
        console.log(`ERROR! ${e.message}`);
    }
};

function findAndToggleChecked(id) {
    let toToggle = this.findById(id);
    toToggle.checked = !toToggle.checked;
}

function findAndUpdateName(id, newName) {
    try{
        item.validateName(newName);
        this.findById(id).name = newName;
    } catch(e){
        console.log(`Cannot update name: ${error.message}`)
    }
}

function findAndDelete(id) {
    let index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
}

function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
    items, 
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
};
