$(function () {
    $(window).scroll(function () {
        if (window.scrollY > 100) {          /* 要滑動到選單的距離 */
            $('#nav').addClass('navFixed');   /* 幫選單加上固定效果 */
        } else {
            $('#nav').removeClass('navFixed'); /* 移除選單固定效果 */
        }
    });
});
$(document).ready(function () {
    if (screen.width <= 700) {
        document.getElementById('nav').removeAttribute("class");
        document.getElementById('nav').setAttribute("class", "navFixed ui text menuBk center aligned two column grid top menu menuFont");
        document.getElementById('students').removeAttribute("class");
        document.getElementById('students').setAttribute("class", "ui one column grid");
    }
});