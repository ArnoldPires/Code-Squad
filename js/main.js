function btnColor(btn) {
    var property = document.getElementById(btn);
    property.className = 'toggled' == property.className ? '' : 'toggled';
}
