Webcam.set({
    width: 310,
    height: 300,
    image_format: "png",
    png_quality: 90,
    constraints: {
        facingMode: "environment"
    }
});
cam = document.getElementById("cam");
Webcam.attach('#cam');

function capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img src="' + data_uri + '" id="i">'
    });
}
console.log("ml5 version=" + ml5.version);
classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
    console.log("modelLoaded");
}

function identify() {
    img = document.getElementById("i");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("objectname").innerHTML = results[0].label;
    }
}