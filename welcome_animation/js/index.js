$(document).ready(function ()
{

    var TimeLine = new TimelineMax();
    TimeLine
        .to($("#myBall7"), 0, {opacity: 1},"-=0.5")
        .to($("#myBall7"), 0.3, {x: 900, rotation: 1080,ease:Bounce.easeOut},"-=0.4")
        .to($("#myBall7"), 0.05, {scaleX: 0.9,scaleY:1.1})
        .to($("#myBall7"), 0.05, {scaleX: 1.0,scaleY:1.0})

        .to($("#myBall6"), 0, {opacity: 1},"-=0.5")
        .to($("#myBall6"), 0.3, {x: 800, rotation: 1080,ease:Bounce.easeOut},"-=0.4")
        .to($("#myBall6"), 0.05, {scaleX: 0.9,scaleY:1.1})
        .to($("#myBall6"), 0.05, {scaleX: 1.0,scaleY:1.0})

        .to($("#myBall5"), 0, {opacity: 1},"-=0.5")
        .to($("#myBall5"), 0.3, {x: 700, rotation: 1080,ease:Bounce.easeOut},"-=0.4")
        .to($("#myBall5"), 0.05, {scaleX: 0.9,scaleY:1.1})
        .to($("#myBall5"), 0.05, {scaleX: 1.0,scaleY:1.0})

        .to($("#myBall4"), 0, {opacity: 1},"-=0.5")
        .to($("#myBall4"), 0.3, {x: 600, rotation: 1080,ease:Bounce.easeOut},"-=0.4")
        .to($("#myBall4"), 0.05, {scaleX: 0.9,scaleY:1.1})
        .to($("#myBall4"), 0.05, {scaleX: 1.0,scaleY:1.0})

        .to($("#myBall3"), 0, {opacity: 1},"-=0.5")
        .to($("#myBall3"), 0.3, {x: 500, rotation: 1080,ease:Bounce.easeOut},"-=0.4")
        .to($("#myBall3"), 0.05, {scaleX: 0.9,scaleY:1.1})
        .to($("#myBall3"), 0.05, {scaleX: 1.0,scaleY:1.0})

        .to($("#myBall2"), 0, {opacity: 1},"-=0.5")
        .to($("#myBall2"), 0.3, {x: 400, ease:Bounce.easeOut},"-=0.4")
        .to($("#myBall2"), 0.05, {scaleX: 0.9,scaleY:1.1})
        .to($("#myBall2"), 0.05, {scaleX: 1.0,scaleY:1.0})

        .to($("#myBall1"), 0, {opacity: 1})
        .to($("#myBall1"), 0.3, {x: 300,ease:Bounce.easeOut},"-=0.4")
        .to($("#myBall1"), 0.05, {scaleX: 0.9,scaleY:1.1})
        .to($("#myBall1"), 0.05, {scaleX: 1.0,scaleY:1.0,})

        .to($("#allBalls"),0,{transformOrigin: "700px 50px 0"})
        .to($("#allBalls"),0.3,{rotation: "-12.2_short",ease:Bounce.easeOut})
        .to($("#allBalls"),0,{transformOrigin: "0px 50px 0"})
        .to($("#allBalls"),1,{x:-18, rotation: "0_short",ease:Bounce.easeOut})

        .to($("#myBall7"), 3, {x: 1700, rotation: 3240})
        .to($("#myBall6"), 3, {x: 1600, rotation: 3240},"-=3")
        .to($("#myBall5"), 3, {x: 1500, rotation: 3240},"-=3")
        .to($("#myBall4"), 3, {x: 1400, rotation: 3240},"-=3")
        .to($("#myBall3"), 3, {x: 1300, rotation: 3240},"-=3")
        .to($("#myBall2"), 3, {x: 1200, rotation: 3240},"-=3")
        .to($("#myBall1"), 3, {x: 1100, rotation: 3240},"-=3")

    $("#playButton").click(function()
    {
       console.log("button clicked...");
        TimeLine.timeScale(1).seek(0);
    });


});