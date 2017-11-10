window.onload = function () {
    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.on("fileload", this.loadHandler, this);
    createjs.Sound.registerSound("path/to/mySound.ogg", "sound");
    function loadHandler(event) {
        // 这会引发针对每个已注册的声音。
        var instance = createjs.Sound.play("sound");  // 发挥使用ID。也可以使用完整的源路径或event.src。
        instance.on("complete", this.handleComplete, this);
        instance.volume = 0.5;
    }
};