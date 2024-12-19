const oBegin = document.getElementById("begin");
const oTimeInp = document.getElementById("timeInp");
const oScore = document.getElementById("scoreInp");
const oCount = document.getElementById("countInp");
const omsgScore = document.getElementById("msg_score");
const oMsg = document.getElementById("msg");
const aImg = document.getElementsByTagName("img"); //[img,img,img]
let time = 10;
let count = 0;
let score = 0;
let timer2 = null;
oBegin.onclick = function () {
  let timer2 = setInterval(showMouse, 1000);
  function showMouse() {
    let i = Math.round(Math.random() * 15); //0-15
    aImg[i].style.display = "block";
    //显示0.6秒之后隐藏
    setTimeout(function () {
      aImg[i].style.display = "none";
    }, 600);
  }
  function timing() {
    let timer1 = setInterval(function () {
      time--;
      oTimeInp.value = time;
      if (time === 0) {
        clearInterval(timer1);
        clearInterval(timer2);
        //游戏结束 弹出条幅
        omsgScore.innerHTML =  score ;
        oMsg.style.display = "block";
      }
    }, 1000);
  }
  //倒计时
  timing();
};
for (let i = 0; i < aImg.length; i++) {
  aImg[i].onclick = function () {
    if (this.style.display === "block") {
      count++;
      score += 5;
      oCount.value = count;
      oScore.value = score;
    }
  };
}
