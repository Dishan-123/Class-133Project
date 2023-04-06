objectdetector1 = "";
object1 = [];

function preload()
{
    img = loadImage("bedroom.jpeg");
}


function setup()
{
    canvas = createCanvas(286,176);
    canvas.center();
    objectdetector1 = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status: DETECTING OBJECTS";
}

function modelloaded()
{
    console.log("Model has loaded");
    status = true;
    objectdetector1.detect(img,gresult);
}

function gresult(error,result)
{
    if(error)
    {
        console.error(error);
    }
    console.log(result);
    object1 = result;
}

function draw()
{
    image (img, 0, 0, 286, 176);
    if(status!="")
    {
        for(i=0;i<object1.length;i++)
        {
            document.getElementById("status").innerHTML = "Status: OBJECTS DETECTED";
            document.getElementById("nod").innerHTML = "No. of Objects: " + object1.length;
            fill(255,0,0);
            percent = floor(object1[i].confidence*100);
            text(object1[i].label+" "+percent+"%",object1[i].x,object1[i].y);
            noFill();
            stroke(255,0,0);
            rect(object1[i].x,object1[i].y,object1[i].width,object1[i].height);
        }
    }
}