$(document).ready(function() {
    sideBarOC();
    sideBarClick();
})

function sideBarOC() {
    var btn = document.querySelector("#btn");
    var sideBar = document.querySelector(".sideBar");
    var bxsearch = document.querySelector(".bx-search");

    btn.onclick = function() {
        sideBar.classList.toggle("active");
    }

    bxsearch.onclick = function() {
        sideBar.classList.toggle("active");
    }
}

function sideBarClick() {
    $("#bx-home").click(function() {
        $(".home_content").load('../../View/TrangChu.html')
    })
}