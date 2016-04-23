function nuit(){

   // document.body.style.backgroundImage = 'linear-gradient(#000033, #33007F);';

    var MAXW = document.body.scrollWidth;
    var MAXH = document.body.scrollHeight + 120;

    var t = 0;
    var r = 0;
    var id = 0;
    var s = "";

    var lastPosX = 0;
    var lastPosY = 0;

    var numEtoile = Math.floor((Math.random() * 120) + 80);

    for (i = 0; i < numEtoile; i++) { 

        t = Math.floor((Math.random() * MAXH) + 2);
        r = Math.floor((Math.random() * MAXW) + 1);

        var span = document.createElement('span');
        span.innerHTML = "*";
        id = "etoile-" + i;
        span.setAttribute('class', 'etoile');
        span.setAttribute('id', id);

        if (Math.random() > 0.6) {
            span.setAttribute('class', 'scin');
            s = "top:" + t + "px; left: " + r + "px; ";
        } else {
            span.setAttribute('class', 'etoile');
            s = "top:" + t + "px; left: " + r + "px; opacity : " + Math.random() + ";";
        }

        span.setAttribute('style', s);
        document.body.appendChild(span);

    }

    /*
    document.addEventListener("mousemove", function(e) {

        if (lastPosX != e.pageX) {
            for (i = 0; i < numEtoile; i++) { 
                id = "etoile-" + i;
                elmt = document.getElementById(id).style.left;
                elmt = parseInt(elmt) + 10 + "px";
                console.log(id + " : " + elmt);
            }
            lastPosX = e.pageX;
        } else if (lastPosY != e.pageY) {
            for (i = 0; i < numEtoile; i++) { 
                id = "etoile-" + i;
                elmt = document.getElementById(id).style.top;
                elmt = parseInt(elmt) + 10 + "px";                    }
            lastPosY = e.pageY;
        }

    });*/
}
        
function jour() {
    var numCloud = Math.floor((Math.random() * 12) + 8);
    var MAXH = document.body.scrollHeight + 120;

    var t = 0;
    var size = 0;
    var c = "";
    var time = 100;

    for (i = 0; i < numCloud; i++) { 

        t = t+60;
        time = Math.floor((Math.random() * 50) + 60);
        size = Math.floor((Math.random() * 3));
        if (size==1){c="cloud small"} else if (size==2) {c="cloud normal"} else if (size==3){c="cloud large"} else {c="cloud tiny"}


        var div = document.createElement('div');
        div.innerHTML = "<div></div><div></div><div></div><div></div>";
        id = "cloud-" + i;
        div.setAttribute('class', c);
        div.setAttribute('id', id);

        s = "margin-left: " + Math.floor((Math.random() * 100)) + "%; top : " + t + "px; animation-duration: " + time + "s;";


        div.setAttribute('style', s);
        document.body.appendChild(div);           
    }
}

function SummerHour() {
    var now = new Date();

    var hNight = 20;

    var m = now.getMonth()+1;

    if (m >= 11 || m <=4) {
        hNight = 19;
    } else {
        hNight = 21;
    }
    return hNight;
}