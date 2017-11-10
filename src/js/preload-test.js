window.onload = function () {
    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on("complete", handleComplete, this);
    queue.loadFile({id:"sound", src:"http://path/to/sound.mp3"});
    queue.loadManifest([
        {id: "myImage", src:"path/to/myImage.jpg"}
    ]);
    function handleComplete() {
        createjs.Sound.play("sound");
        var image = queue.getResult("myImage");
        document.body.appendChild(image);
    }
};