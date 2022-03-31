function setup() {
    c1 = createCanvas(500, 500)
    c1.position(760, 100)
    v1 = createCapture(VIDEO)
    pn = ml5.poseNet(v1, modelLoaded)
    pn.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("PoseNet is on")

}
nosex = 0
nosey = 0
rwristx = 0
lwristx = 0
rwristy = 0
lwristy = 0
distance=0

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        nosex = results[0].pose.nose.x
        nosey = results[0].pose.nose.y
        rwristx = results[0].pose.rightWrist.x
        lwristx = results[0].pose.leftWrist.x
        rwristy = results[0].pose.rightWrist.y
        lwristy = results[0].pose.leftWrist.y
        distance= round(lwristx - rwristx)
        console.log("the size of wrist is",distance)
        console.log("nosex=" + nosex, "nosey=" + nosey)
        console.log("leftwristx=" + lwristx, "leftwristy=" + lwristy)
        console.log("rightwristx=" + rwristx, "rightwristy=" + rwristy)
    }
}

function draw() {
    background("black")
    fill("red")
    square(nosex, nosey, distance)



}
