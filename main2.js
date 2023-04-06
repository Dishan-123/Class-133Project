objectdetector2 = "";
object2 = [];

function preload()
{
    img = loadImage("tvac.jpeg");
}


function setup()
{
    canvas = createCanvas(800,500);
    canvas.position(400,250);
    objectdetector2 = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status: DETECTING OBJECTS";
}

function modelloaded()
{
    console.log("Model has loaded");
    status = true;
    objectdetector2.detect(img,gresult);
}

function gresult(error,result)
{
    if(error)
    {
        console.error(error);
    }
    console.log(result);
    object2 = result;
}

function draw()
{
    image (img, 0, 0, 800, 500);
    if(status!="")
    {
        for(i=0;i<object2.length;i++)
        {
            document.getElementById("status").innerHTML = "Status: OBJECTS DETECTED";
            document.getElementById("nod").innerHTML = "No. of Objects: " + object2.length;
            fill(255,0,0);
            percent = floor(object2[i].confidence*100);
            text(object2[i].label+" "+percent+"%",object2[i].x,object2[i].y);
            noFill();
            stroke(255,0,0);
            rect(object2[i].x,object2[i].y,object2[i].width,object2[i].height);
        }
    }
}