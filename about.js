window.onscroll = function () { updateProgressBar() };

function updateProgressBar() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    document.getElementById("progress-bar").style.width = scrollPercent + "%";
}
