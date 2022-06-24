const MainHeader = class MainHeader {
    constructor(){
        this.isMobileMenuOpened = false;
        this.isUserOpened = false;
    }
    toogleMobileMenu() {
        this.isMobileMenuOpened = !this.isMobileMenuOpened;
    }
    toogleUser() {
        this.isUserOpened = !this.isUserOpened;
    }
    setEventListener() {
        if (!document.querySelector('.burger__icon')) return;
        document.querySelector('.burger__icon').addEventListener('click', () => {
            this.toogleMobileMenu();
        });
        if (!document.querySelector('.user_h__icon')) return;
        document.querySelector('.user_h__icon').addEventListener('click', () => {
            this.toogleUser();
        }) 
    }
    init() {
        this.setEventListener();
    }
}

export default MainHeader;