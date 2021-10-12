    var myIndex = 0;
    carousel();
    handel();

    function carousel() {
        // var i;
        // var x = document.getElementsByClassName("mySlides");
        // var y = document.getElementsByClassName("nextCount");
        // for (i = 0; i < x.length; i++) {
        //     y[i].classList.add("active");
        //     x[i].style.display = "none";
        // }
        // myIndex++;
        // if (myIndex > x.length && myIndex > y.length) {
        //     myIndex = 1
        // }
        // x[myIndex - 1].style.display = "block";
        // y[myIndex - 1].classList.remove("active");
        // setTimeout(carousel, 2000); // Change image every 2 seconds

        var mySlides = document.querySelectorAll(".mySlides");
        var count = document.getElementsByClassName("nextCount");
        count[0].classList.add("active");
        var i = 0;
        setInterval(function() {
            mySlides[i].style = "margin-left: -100%;";
            i++;
            if (i < mySlides.length) {
                count[i].classList.add("active");
            }
            if (i == mySlides.length) {
                i = 0;
                mySlides[0].style = "margin-left: 0;";
                mySlides[1].style = "margin-left: 0;";
                mySlides[2].style = "margin-left: 0;";
                count[1].classList.remove("active");
                count[2].classList.remove("active");
            }
        }, 2000);
    }

    function handel() {
        $('.course').click(function() {
            if (this.id == "Html") {
                $(".loadHere").load('../../View/ds_baihoc.html')
            }
        })
    }