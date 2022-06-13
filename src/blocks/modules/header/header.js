const MainHeader = class MainHeader {
    constructor(){
        this.isMobileMenuOpened = false;
    }
    toogleMobileMenu() {
        this.isMobileMenuOpened = !this.isMobileMenuOpened;
    }
    setEventListener() {
        if (!document.querySelector('.burger__icon')) return;
        document.querySelector('.burger__icon').addEventListener('click', () => {
            this.toogleMobileMenu();
        }) 
    }
    init() {
        this.setEventListener();
    }
}

export default MainHeader;