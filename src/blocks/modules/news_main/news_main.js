const TabsBlock = class TabsBlock {
    constructor({buttonsArray}){
        this.selected = 'all';
        this.buttonsArray = buttonsArray;
    }
    setSelected(selected) {
        this.selected = selected;
    }
}

export default TabsBlock;