objectdetector5 = "";
object5 = [];

function preload()
{
    img = loadImage("fruitbasket.jpeg");
}


function setup()
{
    canvas = createCanvas(400,400);
    canvas.position(550,250);
    objectdetector5 = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status: DETECTING OBJECTS";
}

function modelloaded()
{
    console.log("Model has loaded");
    status = true;
    objectdetector5.detect(img,gresult);
}

function gresult(error,result)
{
    if(error)
    {
        console.error(error);
    }
    console.log(result);
    object5 = result;
}

function draw()
{
    image (img, 0, 0, 400, 400);
    if(status!="")
    {
        for(i=0;i<object5.length;i++)
        {
            document.getElementById("status").innerHTML = "Status: OBJECTS DETECTED";
            document.getElementById("nod").innerHTML = "No. of Objects: " + object5.length;
            fill(255,0,0);
            percent = floor(object5[i].confidence*100);
            text(object5[i].label+" "+percent+"%",object5[i].x,object5[i].y);
            noFill();
            stroke(255,0,0);
            rect(object5[i].x,object5[i].y,object5[i].width,object5[i].height);
        }
    }
}