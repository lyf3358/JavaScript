function move(obj2,attr,target,speed,callback) {
    //关闭上一个定时器,给每一个按钮绑定一个定时器属性
    clearInterval(obj2.start)
    //获取元素的目前位置
    var current = parseInt(getStyle(obj2,attr));
    //判断速度的正负值
    //如果从0向800移动，则speed为正值，如果从800向0移动，speed为负值
    if(current>target){
        //此时速度应为负值
        speed = -speed;
    }
    //开启一个定时器，用来执行动画效果
    obj2.start = setInterval(function () {
        var oldValue = parseInt(getStyle(obj2, attr));
        //创建个新值，在旧值的基础上增加
        var newValue = oldValue + speed;
        //判断newValue是否大于800
        //当向左移动时，需要判断newValue是否小于target
        //向右移动时，需要判断newValue是否大于target
        if (speed < 0 && newValue < target || speed > 0 && newValue > target) {
            newValue = target;
        }
            //将新值设置给box1
        obj2.style[attr] = newValue + "px";
        //判断newValue是否等于800，如果等于就结束定时器
        if(newValue == target){
            clearInterval(obj2.start);
            callback && callback()
        }
    }, 50)
}
function getStyle(obj, name) {
    // if(window.getComputedStyle){
    //     //如果是判断getComouted他会去每一层作用域找，但是他是没有的变量所以会报错，
    //     //使用window.会作用window的属性，就不报错
    //     return getComputedStyle(obj,null)[name];
    // }else{
    //     return obj.currentSryle[name];
    // }
    return window.getComputedStyle ? getComputedStyle(obj, null)[name] : obj.correntStyle[name];
}
