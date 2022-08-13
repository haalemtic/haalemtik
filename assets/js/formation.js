







function bodyAction(scrollState){

        document.getElementById("searchBar").style.display="none";
        document.getElementById("search_btn").style.display="block";
        document.getElementById("formation_link").style.display="block";
        document.getElementById("startut_link").style.display="block";
      
}



function checkSubmenuState() {

    document.getElementById("formation_submenu").classList.toggle("show");
    document.getElementById("chevron").classList.toggle("bi-caret-up-fill");
    if (window.innerWidth < 990) {
        document.getElementById("mobile_submenu1").classList.toggle("show_mobile_submenu");
        document.getElementById("mobile_submenu2").classList.toggle("show_mobile_submenu");
    }
 

}


function displaySearchBar(){
   if(window.innerWidth>990){

    document.getElementById("search_btn").classList.toggle("hide_search_btn");
    document.getElementById("formation_link").classList.toggle("hide_menu");
    document.getElementById("startut_link").classList.toggle("hide_menu");
    document.getElementById("searchBar").classList.toggle("display_search_bar");
   }
}





