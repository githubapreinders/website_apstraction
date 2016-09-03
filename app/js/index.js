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

                .to(cloud1, 600, {x: 1600, y: 150}, "cloud")
                .to(cloud1, 8, {opacity: 0.8, repeat:25,yoyo: true}, "cloud")
                .to(cloud2, 375, {x: 1200, y: 50}, "cloud")
                .to(cloud2, 5, {scaleX: 2.11, scaleY: 4.15, yoyo: true}, "cloud")
                .to(cloud2, 4, {opacity: 0.9, yoyo: true }, "cloud")
        }

        function cloudPassage()
        {
            console.log("cloud1Passage...");
            timeLine1.delay(20);
            timeLine1
                .set(cloud1a, {x: -1400, y: 0},"cloud")
                .set(cloud2a,{x:-1350,y:-75}, "cloud")
                .set(cloud1a,{scale:5.0}, "cloud")
                .set(cloud2a,{scaleX:2.1,scaleY:4.1}, "cloud")
                .set(cloud1a,{opacity:1}, "cloud")
                .set(cloud2a,{opacity:1}, "cloud")

                .to(cloud1a, 1200, {x: 1600, y: 150}, "cloud")
                .to(cloud1a, 8, {opacity: 0.8, repeat:25,yoyo: true}, "cloud")
                .to(cloud2a, 1000, {x: 1200, y: 50}, "cloud")
                .to(cloud2a, 4, {opacity: 0.9, yoyo: true }, "cloud")
        }



        $( window ).scroll(function()
        {
            if(timeLinestart.isActive())
            {
                timeLinestart.pause();
            }

            if(timeLine1.isActive())
            {
                timeLine1.pause();
            }

            console.log("animation paused...");

            clearTimeout( $.data( this, "scrollCheck" ) );
            $.data( this, "scrollCheck", setTimeout(function()
            {
                if(timeLinestart.paused())
                {
                    console.log("animation start resumed...");
                    timeLinestart.resume();
                }

                if(timeLine1.paused())
                {
                    console.log("animation 1 resumed...");
                    timeLine1.resume();
                }
            }, 200) );
        });






});
