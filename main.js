NoseX=0;
NoseY=0;
rightWristX=0;
leftWristX=0;
difference=0;

function setup()
{
video = createCapture(VIDEO) ;
video.size(500 , 500) ;
video.position(125 , 80)

 canvas= createCanvas(550,550);
   canvas.position(560 , 160);

    poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log('PoseNet Is Initialized') ;
}

function draw()
{
  document.getElementById("square_side").innerHTML =   "Width and Height Of Square Will Be :" + difference + "px" ;
  background('#b0c4de') ;
  fill('#ffa500');
  stroke('#FF0000 ');
square( NoseX, NoseY , difference) ; 
}

function gotPoses(results)
{
if (results.length > 0)
{
  console.log(results) ;
  NoseX= results[0].pose.nose.x ;
  NoseY= results[0].pose.nose.y ;
console.log("noseX= " + NoseX +"noseY=" + NoseY);

leftWristX = results[0].pose.leftWrist.x ;
rightWristX = results[0].pose.rightWrist.x ;
difference = floor(leftWristX - rightWristX);

console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "difference =" + difference);
}
}