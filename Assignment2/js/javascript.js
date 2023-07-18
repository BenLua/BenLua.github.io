/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function NavBarMenu() {
    var x = document.getElementById("navBar");
    if (x.className === "TopNav") {
      x.className += " responsive";
    } 
    else {
      x.className = "TopNav";
    }
}