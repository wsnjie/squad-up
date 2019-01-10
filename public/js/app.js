//https://stackoverflow.com/questions/34261365/retain-scrollbar-position-even-after-reloading-using-javascript

$(window).scroll(function () {
    sessionStorage.scrollTop = $(this).scrollTop();
});

$(document).ready(function () {
    if (sessionStorage.scrollTop != "undefined") {
        $(window).scrollTop(sessionStorage.scrollTop);
    }
});