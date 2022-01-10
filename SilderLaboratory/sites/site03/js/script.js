var width1 = $("#face1").attr("width");
var height2 = $("#face2").attr("height");
var width3 = $("#face3").attr("width");
var height4 = $("#face4").attr("height");
var width5 = $("#face5").attr("width");

$(document).on('input change', '#ranger', function(){
  $("#face1").attr("width",width1 * (ranger.value / 1))
  $("#face2").attr("height",height2 * (ranger.value / 1))
  $("#face3").attr("width",width3 * (ranger.value / 1))
  $("#face4").attr("height",height4 * (ranger.value / 1))
  $("#face5").attr("width",width5 * (ranger.value / 1))
});