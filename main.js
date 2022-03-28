 var video="";
var status1="";
objects=[];
 function setup(){
canvas=createCanvas(400,400);
canvas.center();
}

function draw(){
image(video,0,0,400,400);
if(status1!=""){
    objectDetector.detect(video,gotResult);
for(i=0;i,objects.length;i++){
document.getElementById("status").innerHTML="status: objectDetected";
document.getElementById("number_of_objects").innerHTML="Number of objects  detected are:"+objects.length;
fill("#eb4034");
percent=floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
noFill();
stroke("#ed0206");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}  
}
}

function gotResult(error,results){
if(error){
console.log(error);}
console.log(results);
objects=results;
}

function preload(){
video=createVideo("video.mp4");    
video.hide();
}

function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";
    }

    function modelLoaded(){
        console.log("modelLoaded");
        status1=true;
        video.loop();
        video.speed(1);
        video.volume(1);

    }