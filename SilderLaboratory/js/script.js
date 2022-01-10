/* $(document).ready(function(){

});
*/

var bigSlider = document.getElementById("bigSlider");
var output = document.getElementById("output");
var style = document.querySelector('[data="test"]');

setData(bigSlider.value);

bigSlider.oninput = function() {
    setData(this.value);
}

function setData(x){
    output.innerHTML = x;
    style.innerHTML = ".slider::-webkit-slider-thumb { width: " + x + "px !important; height: " + x + "px !important; }";
    $("#bigSlider").css("height", x +'px'); 
    $(".titletext").css("font-size", x +'em');
  }
  