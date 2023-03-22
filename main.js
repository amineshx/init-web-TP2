

    function changeFrame(url) {
        // Get a reference to the frame 2 element
        var frame2 = window.parent.frames["main"];
        // Update the src attribute of frame 2
        frame2.location.href = url;
    }


    function changeOrder(url) {
        var frame3 = window.parent.frames["top-right"];
        frame3.location.href = url ;
    }