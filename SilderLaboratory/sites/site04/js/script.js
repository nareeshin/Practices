// 1. water
$(document).on('input change', '#water_ranger', function(){
  var water = $("#water_ranger").val(); 
  $("#image_water").css("transform", 'translate(' + water * (water_ranger.value / -1) +'px, 0px)')
});

// 2. window
$(document).on('input change', '#window_ranger', function(){
  var window = $(this).val();
  $('.window img:nth-child(1)').css("margin-left", - window * 20 + '%')
});

// 3. spider plant
$(document).on('input change', "#spider_ranger", function(){
  var spider = $("#spider_ranger").val(); 
  $("#image_spider").css("transform", 'rotateY(' + spider * (spider_ranger.value / 20) +'deg)')
});

// 4. background
$(document).on('input change', '#bgi_ranger', function(){
  var window = $(this).val();
  $('.bgi img:nth-child(1)').css("margin-left", - window * 3 + '%')
});

// 5. sun
$(document).on('input change', "#sun_ranger", function(){
  var sun = $("#sun_ranger").val(); 
  $("#image_sun").css("transform", 'translateY(' + sun * (sun_ranger.value / 1) +'px)')
});

// 6. background gradient
$(document).on('input change', "#sun_ranger", function(){
  var sun = $("#sun_ranger").val(); 
  $("#image_sun").css("transform", 'translateY(' + sun * (sun_ranger.value / 1) +'px)')
});

// 곤충 날라가게 
var sliderValue;
var insect_canvas = document.getElementById("insect_canvas");
ctx = insect_canvas.getContext("2d");

function onSliderChange(_value) {
  sliderValue = _value;
}

function raf() {
  window.requestAnimationFrame(render)
}

function render() {
  raf();
  ctx.clearRect(0,0,insect_canvas.width, insect_canvas.height);
  // important code here
  var flyImg = document.getElementById("flyImg");
  var x = sliderValue * 3;
  var y = Math.sin(sliderValue * 0.05);
  var y1 = Math.sin(sliderValue * 0.1);
  var y2 = Math.sin(sliderValue * 0.07);
  var y3 = Math.sin(sliderValue * 0.2);
  var y4 = Math.sin(sliderValue * 0.3);
  ctx.drawImage(flyImg, x, insect_canvas.height /2 + y * 100, 15,15);
  ctx.drawImage(flyImg, x, insect_canvas.height /2 + y1 * 80, 10,10);
  ctx.drawImage(flyImg, x, insect_canvas.height /2 + y2 * 70, 20,20);
  ctx.drawImage(flyImg, x, insect_canvas.height /2 + y3 * 60, 22,22);
  ctx.drawImage(flyImg, x, insect_canvas.height /2 + y4 * 50, 13,13);
}

raf();

// 7. blur
$(document).on('input change', "#blur_ranger", function(){
  var blur = $("#blur_ranger").val(); 
  $("#image_linearis").css("filter", 'blur(' + blur * (blur_ranger.value / 300) +'px)')
});

// 8. cosmos
$(document).on('input change', '#cosmos_ranger', function(){
  var cosmos = $(this).val();
  $('.cosmos img:nth-child(1)').css("margin-left",-slider * 20 + '%')
});
