document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);

// var enemy_list = new Array();
// var bullet_list = new Array();

var LEFT = false;
var RIGHT = false;
var UP = false;
var DOWN = false;
var isBiu = false;

var isStart = false;

function keydown(event) {
    // var item = $('.plane');
    // var speed = 14;

    // var curL = parseFloat(item.css("left"));
    // var curT = parseFloat(item.css("top"));

    // console.log(event.keyCode);

    /*TODO: 多个键同时按下且长按的话，只会持续接收后按下的键的输入（后按下的键覆盖前面的输入），从而导致操作僵死*/

    switch (event.keyCode) {
        case 37:
            // alert("left");
            // var cur = item.css("left").replace("px", "");
            // var next = cur - 20;
            // item.css("left", next+"px");

            // if(curL - speed <= 0) break;
            // item.animate({
            //     left: '-=' + speed + 'px'
            // }, 1);
            LEFT = true;
            break;
        case 39:
            // alert("right");
            // if(curL + speed + item.width() >= $(window).width()) break;
            // item.animate({
            //     left: '+=' + speed + 'px'
            // }, 1);
            RIGHT = true;
            break;
        case 38:
            // alert("up");
            // if(curT - speed <= 0) break;
            // item.animate({
            //     top: '-=' + speed + 'px'
            // }, 1);
            UP = true;
            break;
        case 40:
            // alert("down");
            // if(curT + speed + item.height() >= $(window).height()) break;
            // item.animate({
            //     top: '+=' + speed + 'px'
            // }, 1);
            DOWN = true;
            break;


        case 32:
            // alert("space");
            // biubiubiu(item);
            isBiu = true;
            break;

    }
}

function keyup(event) {

    switch (event.keyCode) {
        case 37:
            LEFT = false;
            break;
        case 39:
            RIGHT = false;
            break;
        case 38:
            UP = false;
            break;
        case 40:
            DOWN = false;
            break;
        case 32:
            isBiu = false;

            if (!isStart) {
                isStart = true;
                // var table = $('<table>');
                // table.css("position", "absolute");
                // $('body').append(table);
            }

            break;

        //退出
        case 27:
            isStart = false;
            $('.bullet').remove();
            $('.enemy').remove();
            // $('table').remove();
            $('.plane').css("left", "50%");
            $('.plane').css("top", "50%");
            $('.plane').css("transition", "translate(-50%, -50%)");
            break;
    }
}

//检测放行方向
setInterval(function () {

    if (!isStart) return;


    var item = $('.plane');
    var speed = 14;
    var buf = 30;

    var curL = parseFloat(item.css("left"));
    var curT = parseFloat(item.css("top"));

    if (LEFT && curL - speed - buf > 0) {

        item.animate({
            left: '-=' + speed + 'px'
        }, 15);
    }
    if (RIGHT && curL + speed + item.width() + buf < $(window).width()) {

        item.animate({
            left: '+=' + speed + 'px'
        }, 15);
    }
    if (UP && curT - speed - buf > 0) {

        item.animate({
            top: '-=' + speed + 'px'
        }, 15);
    }
    if (DOWN && curT + speed + item.height() + buf < $(window).height()) {
        item.animate({
            top: '+=' + speed + 'px'
        }, 15);
    }
    if (isBiu) {
        biubiubiu($('.plane'));
    }

}, 30);

//biubiubiu
function biubiubiu(parent) {

    // 同屏子弹不大于
    if ($(".bullet").length > 5) return;

    var bullet = $("<div>");
    bullet.attr("class", "bullet");

    var parentTop = parseFloat(parent.css("top"));
    var parentLeft = parseFloat(parent.css("left"));

    var offsetTop = parentTop - 12;
    var offsetLeft = parentLeft - 3;

    // alert("parentTop:"+parentTop+"/nparentLeft"+parentLeft+"/noffsetTop"+offsetTop+"/noffsetLeft"+offsetLeft);

    bullet.css("top", offsetTop + "px");
    bullet.css("left", offsetLeft + "px");
    bullet.css("position", "absolute");


    $('table').append(bullet);
    // bullet_list.push(bullet);


    bullet.animate({
        top: '-=' + 30 + 'px'
    }, 30);
    bullet.timer = setInterval(() => {
        // if(parseFloat($('.bullet').css("top")) + 10 <= 0) $('.bullet').remove();
        // $('.bullet').animate({
        //     top: '-=' + 4 + 'px'
        // }, 1);

        //边界清除
        if (parseFloat(bullet.css("top")) + 10 <= 0) {
            bullet.remove();
            // bullet_list.splice(0, 1);
        }
        bullet.animate({
            top: '-=' + 30 + 'px'
        }, 30);



    }, 31);
}

// 自动刷新敌人 2s一只
setInterval(function () {

    if (!isStart) return;

    var enemy = $("<div>");
    enemy.attr("class", "enemy");

    var offsetTop = 0;
    var offsetLeft = Math.floor(Math.random() * ($(window).width() - 50 - 30 + 1) + 30);

    // console.log("offsetLeft: " + offsetLeft);

    enemy.css("top", offsetTop + "px");
    enemy.css("left", offsetLeft + "px");
    enemy.css("position", "absolute");

    $('table').append(enemy);
    // enemy_list.push(enemy);


    enemy.animate({
        top: '+=' + 10 + 'px'
    }, 60);
    enemy.timer = setInterval(() => {
        //边界清除
        if ((parseFloat(enemy.css("top")) + 100 >= $(window).height())) enemy.remove();
        //下落动画
        enemy.animate({
            top: '+=' + 10 + 'px'
        }, 60);
        //接触plane
        if (chk_collision(enemy, $('.plane'))){
            isStart = false;
            $('.bullet').remove();
            $('.enemy').remove();
            // $('table').remove();
            $('.plane').css("left", "50%");
            $('.plane').css("top", "50%");
            $('.plane').css("transition", "translate(-50%, -50%)");
        } ;
        //接触bullet

        $('.bullet').each(function () {
            if (chk_collision(enemy, $(this))) {
                enemy.remove();
                $(this).remove();
                return false;
            };
        });

    }, 60);




}, 2000);

//碰撞检测
function chk_collision(obj1, obj2) {

    var x1 = parseFloat(obj1.css("left"));
    var x2 = x1 + obj1.width();
    var y1 = parseFloat(obj1.css("top"));
    var y2 = y1 + obj1.height();

    var a1 = parseFloat(obj2.css("left"));
    var a2 = a1 + obj2.width();
    var b1 = parseFloat(obj2.css("top"));
    var b2 = b1 + obj2.height();


    if ((x1 < a1 && a1 < x2) || (x1 < a2 && a2 < x2)) {
        if ((y1 < b1 && b1 < y2) || (y1 < b2 && b2 < y2)) {
            return true;
        }
    } else {

        return false;
    }

    // console.log(a1 + "   " + a2 + "    " + b1 + "     " + b2  );
}