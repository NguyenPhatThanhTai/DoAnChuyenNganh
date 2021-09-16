    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        var y = document.getElementsByClassName("nextCount");
        for (i = 0; i < x.length; i++) {
            y[i].classList.add("active");
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length && myIndex > y.length) {
            myIndex = 1
        }
        x[myIndex - 1].style.display = "block";
        y[myIndex - 1].classList.remove("active");
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }

    var openSide = document.getElementById("openMenu");
    openSide.onclick = function() {
        document.getElementById("Side").classList.add("active");
    }

    var closeMenu = document.getElementById("closeMenu");
    closeMenu.onclick = function() {
        document.getElementById("Side").classList.remove("active");
    }