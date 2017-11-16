function $$(id) {
    return document.getElementById(id);
}

//以下是俄罗斯方块相关的代码
//游戏的面板
var tab;

//board是一个18*10的数组,也和页面的table对应
//用来标注那些方格已经被占据. 初始时都为0, 如果被占据则为1
//从左上角开始，y是从上向下，x是从左向右
var board=new Array(18);
for(var i=0;i<18;i++){
    board[i] = new Array(10);
}
for(var i=0;i<18;i++){
    for(var j=0;j<10;j++){
        board[i][j] = 0;
    }
}
//当前活动的方块, 它可以左右下移动, 变型
var activeBlock;
//当前活动的方块的颜色
var activeBlockColor;
//定时器, 定时器内将做moveDown操作
var timer;
//游戏得分
var score=0;
//游戏状态 0: 未开始;1 运行; 2 中止;
var status = 0;

//生产方块形状, 有7种基本形状，返回值是某种形状
function generateBlock() {
    //每一种图形都由个四方块构成，最后一个元素代表颜色，这样每种图形对应不同的颜色
    var block=new Array(5);
    //随机产生一种形状
    var t = (Math.floor(Math.random()*20)+1)%7;
    switch (t){
        case 0:{
            //生产o型的方块
            block[0] = {x:0, y:4};
            block[1] = {x:1, y:4};
            block[2] = {x:0, y:5};
            block[3] = {x:1, y:5};
            block[4] = '#ffff00';
            break;
        }
        case 1:{
            //生产型的方块
            block[0] = {x:0, y:3};
            block[1] = {x:0, y:4};
            block[2] = {x:0, y:5};
            block[3] = {x:0, y:6};
            block[4] = '#64ffff';
            break;
        }
        case 2:{
            block[0] = {x:0, y:5};
            block[1] = {x:1, y:4};
            block[2] = {x:1, y:5};
            block[3] = {x:2, y:4};
            block[4] = '#ff66cc';
            break;
        }
        case 3:{
            block[0] = {x:0, y:4};
            block[1] = {x:1, y:4};
            block[2] = {x:1, y:5};
            block[3] = {x:2, y:5};
            block[4] = '#00ff00';
            break;
        }
        case 4:{
            block[0] = {x:0, y:4};
            block[1] = {x:1, y:4};
            block[2] = {x:1, y:5};
            block[3] = {x:1, y:6};
            block[4] = '#cc00ff';
            break;
        }
        case 5:{
            block[0] = {x:0, y:4};
            block[1] = {x:1, y:4};
            block[2] = {x:2, y:4};
            block[3] = {x:2, y:5};
            block[4] = '#0000ff';
            break;
        }
        case 6:{
            block[0] = {x:0, y:5};
            block[1] = {x:1, y:4};
            block[2] = {x:1, y:5};
            block[3] = {x:1, y:6};
            block[4] = '#ffcc00';
            break;
        }
    }
    return block;
}

//更新最新的board
function updateBoard() {
    for(var i=0;i<4;i++){
        //根据x，y坐标，
        board[activeBlock[i].x][activeBlock[i].y]=1;
    }
}

//重绘整个面板
function paintBoard() {
    for (var i = 0; i < 18; i++) {
        for (var j = 0; j < 10; j++) {
            if (board[i][j] == 1) {
                tab.rows[i].cells[j].style.backgroundColor = '#646464';
            }
        }
    }
}

//绘活动图形
function paint(color){
    for(var i=0; i<4; i++){
        tab.rows[activeBlock[i].x].cells[activeBlock[i].y].style.backgroundColor=color;
    }
}

//向下移动
function moveDown() {
    //检查底边界
    if(checkBottomBorder()){
        //没有到达底部
        //没有触底, 则擦除当前图形,
        erase();

        //更新当前图形坐标
        for(var i=0;i<4;i++){
            activeBlock[i].x = activeBlock[i].x + 1;
        }
        //重画当前图形
        paint(activeBlock[4]);
    }else{
        //到达底部
        //停止当前的定时器, 也就是停止自动向下移动
        clearInterval(timer);
        //更新board数组
        updateBoard();

        //重绘面板,图形触底后自动变成了灰色
        paintBoard();

        //消行
        var lines = deleteLine();

        //计算新的得分
        if(lines>0){
            //一次消多行则分数加倍
            if(lines==2){
                lines=3;
            }else if(lines==3){
                lines=6;
            }else if(lines==4){
                lines=10;
            }
            score = score + lines;
            //更新分数
            updateScore();
            //擦除整个面板
            eraseBoard();
            //重绘面板
            paintBoard();
        }

        //产生一个新图形并判断是否可以放在最初的位置.
        if(!validateBlock(nextBlock)){
            alert("游戏结束!");
            status = 2;//游戏中止
            return;
        };
        activeBlock = nextBlock;
        nextBlock = generateBlock();
        paint(activeBlock[4]);//绘活动图形

        // applyPreview();
        // paintPreview();
        //定时器, 每隔一秒执行一次moveDown
        timer = setInterval(moveDown,500);
    }

}

//左移动
function moveLeft(){
    if(checkLeftBorder()){
        erase();//擦除当前图形
        for(var i=0; i<4; i++){
            activeBlock[i].y = activeBlock[i].y - 1;
        }
        paint(activeBlock[4]);//绘活动图形
    }
}

//检查左边界,尝试着朝左边移动一个,看是否合法.
function checkLeftBorder() {
    for(var i=0;i<4;i++){
        if(activeBlock[i].y==0){
            return false;
        }
        if(!isCellValid(activeBlock[i].x, activeBlock[i].y-1)){
            return false;
        }
    }
    return true;
}

//右移动
function moveRight(){
    if(checkRightBorder()){
        erase();//擦除当前图形
        for(var i=0; i<4; i++){
            activeBlock[i].y = activeBlock[i].y + 1;
        }
        paint(activeBlock[4]);//绘活动图形
    }
}

//检查右边界,尝试着朝右边移动一个,看是否合法.
function checkRightBorder() {
    for(var i=0;i<4;i++){
        if(activeBlock[i].y==9){
            return false;
        }
        if(!isCellValid(activeBlock[i].x, activeBlock[i].y+1)){
            return false;
        }
    }
    return true;
}

//辅助函数，拷贝一个图形。
function copyBlock(old){
    var o = new Array(4);
    for(var i=0; i<4; i++){
        o[i] = {x:0, y:0};
    }
    for(var i=0; i<4; i++){
        o[i].x = old[i].x;
        o[i].y = old[i].y;
    }
    return o;
}

//旋转, 因为旋转之后可能会有方格覆盖已有的方格.
//先用一个tmpBlock,把activeBlock的内容都拷贝到tmpBlock,
//对tmpBlock尝试旋转, 如果旋转后检测发现没有方格产生冲突,则
//把旋转后的tmpBlock的值给activeBlock.
function rotate(){
    var tmpBlock = copyBlock(activeBlock);
    //先算四个点的中心点，则这四个点围绕中心旋转90度。
    var cx = Math.round((tmpBlock[0].x + tmpBlock[1].x + tmpBlock[2].x + tmpBlock[3].x)/4);
    var cy = Math.round((tmpBlock[0].y + tmpBlock[1].y + tmpBlock[2].y + tmpBlock[3].y)/4);
    //旋转的主要算法. 可以这样分解来理解。
    //先假设围绕源点旋转。然后再加上中心点的坐标。

    for(var i=0; i<4; i++){
        tmpBlock[i].x = cx+cy-activeBlock[i].y;
        tmpBlock[i].y = cy-cx+activeBlock[i].x;
    }
    //检查旋转后方格是否合法.
    for(var i=0; i<4; i++){
        if(!isCellValid(tmpBlock[i].x,tmpBlock[i].y)){
            return;
        }
    }
    //如果合法, 擦除
    erase();
    //对activeBlock重新赋值.
    for(var i=0; i<4; i++){
        activeBlock[i].x = tmpBlock[i].x;
        activeBlock[i].y = tmpBlock[i].y;
    }
    //重画.
    paint(activeBlock[4]);
}

//擦除掉整个面板，即把每个方块的背景色设置为白色
function eraseBoard(){
    for(var i=0;i<18;i++){
        for(var j=0;j<10;j++){
            tab.rows[i].cells[j].style.backgroundColor='#ffffff';
        }
    }
}

//擦除当前图形
function erase(){
    for(var i=0; i<4; i++){
        tab.rows[activeBlock[i].x].cells[activeBlock[i].y].style.backgroundColor="#ffffff";
    }
}

//产生一个新图形并判断是否可以放在最初的位置.
function validateBlock(block){
    if(!block){
        //alert("next block is null.");
        return false;
    }
    for(var i=0; i<4; i++){
        if(!isCellValid(block[i].x, block[i].y)){
            //alert("a cell is invalid.");
            return false;
        }
    }
    return true;
}

//检查底边界,尝试着朝下边移动一个,看是否合法.
function checkBottomBorder() {
    for(var i=0;i<activeBlock.length-1;i++){
        if(activeBlock[i].x==17){
            return false;
        }
        //看一下当前位置的向下一个位置是否有效
        if(!isCellValid(activeBlock[i].x+1,activeBlock[i].y)){
            return false;
        }
    }
    return true;
}

//检查坐标(x,y)的是否在board里已经存在，存在说明方块不合法
function isCellValid(x,y) {
    if(x<0||x>17||y<0||y>9){
        return false;
    }
    if(board[x][y]==1){
        return false;
    }
    return true;
}

//消行
function deleteLine(){
    var lines=0;
    for(var i=0; i<18; i++){
        var j=0;
        for(;j<10;j++){
            if(board[i][j]==0){
                break;
            }
        }
        if(j==10){
            lines++;//消除1行

            //整个游戏区域向下移动一行
            if(i!=0){
                for(var k=i-1; k>=0; k--){
                    board[k+1] = board[k];
                }
            }

            //在游戏区域的第1行添加空行
            board[0] = generateBlankLine();
        }
    }
    return lines;
}

//更新分数
function updateScore(){
    $$("score").innerText=" " + score;
}

//产生一个空白行.
function generateBlankLine(){
    var line = new Array(10);
    for(var i=0; i<10; i++){
        line[i] = 0;
    }
    return line;
}

//键盘控制
function keyControl() {
    if(status!=1){
        //如果游戏不是进行时状态，则键盘无效
        return;
    }
    var code = event.keyCode;
    switch(code){
        case 37:{
            //向左按钮压下
            moveLeft();
            event.preventDefault();
            break;
        }
        case 38:{
            //向上按钮压下
            rotate();
            event.preventDefault();
            break;
        }
        case 39:{
            //向右按钮压下
            moveRight();
            event.preventDefault();
            break;
        }
        case 40:{
            //向下按钮压下
            moveDown();
            event.preventDefault();
            break;
        }
    }
}

//[开始]按钮压下
function begin(e) {
    //游戏状态 0: 未开始;1 运行; 2 中止;
    status = 1;
    // e.disabled = true;
    //得到游戏面板对象
    tab = $$("board");
    //产生一个图形的俄罗斯方块
    activeBlock = generateBlock();
    nextBlock = generateBlock();
    //绘制活动图形
    paint(activeBlock[4]);
    timer = setInterval(moveDown,500);
}

document.onkeydown=keyControl;