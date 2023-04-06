objectdetector3 = "";
object3 = [];

function preload()
{
    img = loadImage("desk.jpeg");
}


function setup()
{
    canvas = createCanvas(275,183);
    canvas.center();
    objectdetector3 = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status: DETECTING OBJECTS";
}

function modelloaded()
{
    console.log("Model has loaded");
    status = true;
    objectdetector3.detect(img,gresult);
}

function gresult(error,result)
{
    if(error)
    {
        console.error(error);
    }
    console.log(result);
    object3 = result;
}

function draw()
{
    image (img, 0, 0, 275, 183);
    if(status!="")
    {
        for(i=0;i<object3.length;i++)
        {
            document.getElementById("status").innerHTML = "Status: OBJECTS DETECTED";
            document.getElementById("nod").innerHTML = "No. of Objects: " + object3.length;
            fill(255,0,0);
            percent = floor(object3[i].confidence*100);
            text(object3[i].label+" "+percent+"%",object3[i].x,object3[i].y);
            noFill();
            stroke(255,0,0);
            rect(object3[i].x,object3[i].y,object3[i].width,object3[i].height);
        }
    }
}