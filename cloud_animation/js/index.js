$(document).ready(function ()
{

    var cloud1 = $("#cloud1");
    var cloud2 = $("#cloud2");
    var cloud1a = $("#cloud1a");
    var cloud2a = $("#cloud2a");
    var timeLine1 = new TimelineMax({repeat: -1});



    var timeLinestart = new TimelineMax();
    startTimeline();
    cloudPassage();
    function startTimeline()
    {
        timeLinestart
            .set(cloud2,{scaleX:2.1,scaleY:4.1}, "cloud")
            .set(cloud2,{x:150,y:-75}, "cloud")
            .set(cloud1,{scale:4.0}, "cloud")
            .set(cloud1,{x:-200}, "cloud")
            .to(cloud1, 400, {x: 1600, y: 150}, "cloud")
            //.to(cloud1, 4, {scaleY: 4.05, repeat:50,yoyo: true}, "cloud")
            .to(cloud1, 8, {opacity: 0.8, repeat:25,yoyo: true}, "cloud")
            .to(cloud2, 250, {x: 1200, y: 50}, "cloud")
            .to(cloud2, 5, {scaleX: 2.11, scaleY: 4.15, yoyo: true}, "cloud")
            .to(cloud2, 4, {opacity: 0.9, yoyo: true }, "cloud")
    }

    function cloudPassage()
    {
        console.log("cloud1Passage...");
        timeLine1.delay(10);
        timeLine1
            .set(cloud1a, {x: -1000, y: 0},"cloud")
            .set(cloud2a,{x:-1350,y:-75}, "cloud")
            .set(cloud1a,{scale:4.0}, "cloud")
            .set(cloud2a,{scaleX:2.1,scaleY:4.1}, "cloud")
            .set(cloud1a,{opacity:1}, "cloud")
            .set(cloud2a,{opacity:1}, "cloud")
            .to(cloud1a, 200, {x: 1600, y: 150}, "cloud")
            .to(cloud1a, 8, {opacity: 0.8, repeat:25,yoyo: true}, "cloud")
            .to(cloud2a, 150, {x: 1200, y: 50}, "cloud")
            .to(cloud2a, 5, {scaleX: 2.11, scaleY: 4.15, yoyo: true}, "cloud")
            .to(cloud2a, 4, {opacity: 0.9, yoyo: true }, "cloud")
    }

    $("#playButton").click(function ()
    {

        timeLinestart.seek(0);
        timeLine1.seek(0);
    });

});