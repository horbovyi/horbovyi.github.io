function openNav() {
  document.getElementById("side_panel_menu").style.height = "100vh";
  document.getElementById("side_panel_menu").style.opacity = "1";
  document.getElementById("side_panel_menu").style.top = "0";
}
function closeNav() {
  document.getElementById("side_panel_menu").style.height = "0";
  document.getElementById("side_panel_menu").style.opacity = "0";
  document.getElementById("side_panel_menu").style.top = "-100vh";
} 
