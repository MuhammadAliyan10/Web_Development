function togglePopup() {
    var popup = document.getElementById("popupForm");
    var body = document.getElementsByTagName("body")[0];
    if (popup.style.display === "none") {
        popup.style.display = "block";
        body.classList.add("blur");
    } else {
        popup.style.display = "none";
        body.classList.remove("blur");
    }
}