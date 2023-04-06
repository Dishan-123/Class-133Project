objectdetector4 = "";
object4 = [];

function preload()
{
    img = loadImage("bottles.jpeg");
}


function setup()
{
    canvas = createCanvas(1500, 1125);
    canvas.center();
    objectdetector4 = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status: DETECTING OBJECTS";
}

function modelloaded()
{
    console.log("Model has loaded");
    status = true;
    objectdetector4.detect(img,gresult);
}

function gresult(error,result)
{
    if(error)
    {
        console.error(error);
    }
    console.log(result);
    object4 = result;
}

function draw()
{
    image (img, 0, 0, 1500, 1125);
    if(status!="")
    {
        for(i=0;i<object4.length;i++)
        {
            document.getElementById("status").innerHTML = "Status: OBJECTS DETECTED";
            document.getElementById("nod").innerHTML = "No. of Objects: " + object4.length;
            fill(255,0,0);
            percent = floor(object4[i].confidence*100);
            text(object4[i].label+" "+percent+"%",object4[i].x,object4[i].y);
            noFill();
            stroke(255,0,0);
            rect(object4[i].x,object4[i].y,object4[i].width,object4[i].height);
        }
    }
}