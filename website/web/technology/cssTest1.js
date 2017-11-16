function $$(id) {
    return document.getElementById(id);
}

//练习1：利用canvas绘制矩形
//绘制图形
function canvasTest1(backgroundColor1) {
    //利用canvas绘制矩形
    //1.取得页面上画布对象
    var c1=$$('myCanvas1');
    //2.创建context对象
    var ctx1=c1.getContext('2d');
    //3.绘制矩形
    ctx1.shadowBlur=0;//添加阴影
    ctx1.shadowColor="#ffffff";
    ctx1.shadowOffsetX=0;
    ctx1.shadowOffsetY=0;

    ctx1.fillStyle='#ffffff';
    ctx1.fillRect(0,0,300,200);//绘制实心矩形

    ctx1.fillStyle=backgroundColor1;
    ctx1.fillRect(20,20,260,160);//绘制实心矩形
    ctx1.lineWidth=8; //设置线条宽度
    ctx1.strokeStyle='rgb(255,153,255)';//设置线条颜色
    ctx1.strokeRect(20,20,260,160);//绘制空心矩形
    //绘制文字
    ctx1.font="40px Arial";
    ctx1.textAlign="center";
    ctx1.fillStyle='green';
    ctx1.shadowBlur=5;//文字添加阴影
    ctx1.shadowColor="black";//文字添加阴影颜色
    ctx1.shadowOffsetX=5;
    ctx1.shadowOffsetY=5;
    ctx1.fillText("CSS",150,100);
}

//利用滑动条得到rgb颜色
function colorChange() {
    //获取页面上的颜色
    var red=$$('rgbR').value;
    var green=$$('rgbG').value;
    var blue=$$('rgbB').value;
    var color='rgb('+red+','+green+','+blue+')';

    //把颜色显示到页面上
    $$('rgbFont').innerText=color;
    $$('rgbShow').style.backgroundColor=color;
}

//按钮[单击按钮矩形背景色]压下时调用
$$('but1').onclick=function () {
    canvasTest1($$('rgbFont').innerText);
}

//页面加载完毕，各画布初期化
function init() {
    canvasTest1('#ffffff');
}

window.addEventListener('load',init,false);