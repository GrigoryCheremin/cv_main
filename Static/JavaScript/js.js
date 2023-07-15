function myImg() {
    let elem = document.getElementById('about_me');
    let style = getComputedStyle(elem);
    if (style.display === 'none') {
        document.getElementById('about_me').style.display = 'block';
    } else if (style.display !== 'none') {
        document.getElementById('about_me').style.display = 'none';
    }
}