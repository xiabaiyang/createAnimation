window.onload = function () {
    function init() {
        // 创建一个画布
        stage = new createjs.Stage("demoCanvas");
        // 创建一个形状
        circle = new createjs.Shape();
        circle.graphics.beginFill("red").drawCircle(0, 0, 40);
        // 形状实例的设置位置
        circle.x = circle.y = 50;
        // 添加形状实例到舞台显示列表
        stage.addChild(circle);
        // 更新阶段将呈现下一帧
        // stage.update();

        // 更新阶段将呈现下一帧
        createjs.Ticker.addEventListener("tick", handleTick); // 一个全局心跳

        function handleTick() {
            // 圆圈将移动10个单位的权利。
            circle.x += 10;
            // 会导致圆来包回
            if (circle.x > stage.canvas.width) { circle.x = 0; }
            stage.update();
        }
    }

    init();
};