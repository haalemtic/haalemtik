







function checkSubmenuState() {

    document.getElementById("formation_submenu").classList.toggle("show");
    document.getElementById("chevron").classList.toggle("bi-caret-up-fill");
    if (window.innerWidth < 990) {
        document.getElementById("mobile_submenu1").classList.toggle("show_mobile_submenu");
        document.getElementById("mobile_submenu2").classList.toggle("show_mobile_submenu");
    }
 

}







