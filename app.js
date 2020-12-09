window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM Ready!!');

    var secOne = document.getElementById("one");
    var secTwo = document.getElementById("two");
    var em = document.getElementById("em");
    var px = document.getElementById("px");

    setTimeout(firstSectionAnimation, 5000);

    function firstSectionAnimation() {
        secOne.style.display = 'none';
        secTwo.style.display = 'flex';
    }

    em.addEventListener('keyup', function (e) {
        e.preventDefault();
        var inputValue = e.target.value;
        if (inputValue === '' || inputValue === "0") {
            px.value = "";
        } else {
            var result = (inputValue * 16);
            px.value = result;
        }
    });


});
