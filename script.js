//아직 이해 못함
const el = document.querySelector("#module");
el.addEventListener("mousemove", (e) => {
el.style.backgroundPositionX = -e.offsetX + "px";
el.style.backgroundPositionY = -e.offsetY + "px";
});

//공 튀기기
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var l = canvas.getContext('2d');

//x 와 x는 원의 좌표
//vx와 vy는 각각의 스피드
var x = Math.floor(Math.random()*innerWidth);
var y = Math.floor(Math.random()*innerHeight);
var vx = Math.floor(Math.random()*20);
var vy = Math.floor(Math.random()*20);
var radius = 20;
//Math.floor(x): 인수보다 작거나 같은 수 중에서 가장 큰 정수를 반환합니다. (인수?)
//Math.random: 0과 1 사이의 난수를 반환합니다. (난수?)

move();

function move(){
// (?) requestAnimationFrame
    requestAnimationFrame(move);
// (?) It clears the specified pixels within  
// (?) the given rectangle 
    l.clearRect(0,0,1000,600);
// (?) clearRect(x, y, width, height): 특정 부분을 지우는 직사각형이며, 이 지워진 부분은 완전히 투명해집니다.
//  공만들기
    l.beginPath();
   // l.strokeStyle = "black";
    l.arc(x,y,10,0,Math.PI*2,false); // 원 x, y좌표, width, height
    l.fill();
    l.fillStyle = "pink"
// (?) Conditions so that the ball bounces
// (?) from the edges
    if(radius + x > innerWidth)
        vx = 0 - vx;
    if(x - radius < 0)
        vx = 0 - vx;
    if(y + radius > innerHeight)
        vy = 0 - vy;
    if(y - radius < 0)
        vy = 0 - vy;
        
        x = x + vx;
        y = y + vy;
}




/* 짱나는 이슈: 
   1. padding 값 조절시 전체 크기 무너짐 현상 ->margin값 시도해보기
   2. 캔버스가 맨 앞 쪽에 깔리면서 마우스 오버 인식 못함
   3. 자바스크립트 공튀기기 렉이 자주 걸림!!! 
   4. Canvas x,y 좌표를 어떻게 알아내는가?
   5. 속도가 매번 다르다
   6. 복붙 없이 코드로 공 여러개 만드는 방법은?
   7. 가끔 일직선으로만 튀김..
   8. 왜 검정색으로 시작?
*/
