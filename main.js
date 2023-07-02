Webcam.set({
    height:300,
    width:350,
    img_format:"png",
    png_quality:100
});

camera=document.getElementById("camera")
Webcam.attach("#camera")

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie' src='"+data_uri+"'/>"
    });
}

console.log("ml5 version ",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json",modelLoaded)
function modelLoaded(){
    console.log("Model is loaded")
}

function check(){
    img=document.getElementById("selfie")
    classifier.classify(img,gotResult)
}

function gotResult(error,result){
    if(error){
        console.log(error)
    }

    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_accuracy").innerHTML=(result[0].confidence*100).toFixed(2)+"%";
    }
}
