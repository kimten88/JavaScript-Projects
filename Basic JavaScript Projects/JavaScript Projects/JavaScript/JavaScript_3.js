function displayType(player) {
    var playerType = player.getAttribute("data-player-type");
    alert(playerType + " plays for the " + player.innerHTML);
}