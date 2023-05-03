var leftwristx,leftwristy,rightwristx,rightwristy,leftWristScore,rightWristScore

function preload() {
    song = loadSound("music.mp3")
    song2 = loadSound("music2.mp3")
}

function setup() {
    canvas = createCanvas(600, 500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotResults)
}

function draw(){
    image(video, 0, 0, 600, 500)
    console.log(leftWristScore)
    fill("red")
    if(leftWristScore>0.2){
        circle(leftwristx,leftwristy,20)
        song2.stop()
        if(song1=false){
            song1.play()
            document.getElementById("songName").innerHTML = songName

        }
        
        

    }
}

function modelLoaded() {
    console.log("hi")
}

function gotResults(results) {
    if (results.length > 0) {
        //console.log(results)
        leftwristx = results[0].pose.leftWrist.x
        leftwristy = results[0].pose.leftWrist.y
        rightwristx = results[0].pose.rightWrist.x
        rightwristy = results[0].pose.rightWrist.y
        //console.log(leftwristx, leftwristy, rightwristx, rightwristy)

        leftWristScore = results[0].pose.keypoints[9].score
        rightWristScore = results[0].pose.keypoints[10].score

        
    }
}