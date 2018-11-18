function showMenu() {
    var navMenu = document.querySelectorAll('li:not(.menu)');

    for (var i = 0; i < navMenu.length; i++) {
        if (navMenu[i].style.display == 'none'){
        navMenu[i].style.display = 'flex';}
        else{
            navMenu[i].style.display = 'none'
        }
    }
}

// hides menu in case client clicks off of it
/*
window.onclick = function(event){
    if (!event.target.matches('button.navMenu')){
        var navMenu = document.querySelectorAll('li:not(.menu)');
        for (var i = 0; i < navMenu.length; i++) {
                navMenu[i].style.display = 'none'
        }
    }
}
*/