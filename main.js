

prediction1 = "";
prediction2 = "";

Webcam.set({
    width :350 ,
    height :300,
    image_format : "png",
png_quality : 90 
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='capturedPic' src='"+data_uri+"'>'";
    });
}

console.log(ml5.version);

classifier = ml5.imageClassifier ("https://teachablemachine.withgoogle.com/models/K_hBMrVnx/model.json",modelloaded);

function modelloaded(){
    console.log("modelloaded isss loaded");
}

function speech(){
speaker = window.speechSynthesis;
speak_data_1 = " The first prediction is " + prediction1;
speak_data_2 = " The second prediction is " + prediction2;
utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
 speaker.speak(utterThis);
}

function moodCheck(){
img = document.getElementById("capturedPic");
classifier.classify(img,gotResult);
}
function gotResult(error,result){
    if(error){ 
        console.log(error) ;
    }
    else{
console.log(result);
document.getElementById("result_emotion_name").innerHTML = result[0].label;
document.getElementById("result_emotion_name2").innerHTML = result[1].label;

prediction1 = result[0].label ; 
prediction2 = result[1].label ;

speech() ;

if(result[0].label == "HAPPY"){
    document.getElementById("mood_p").innerHTML = "&#128512";
}

if(result[0].label == "SAD"){
    document.getElementById("mood_p").innerHTML = "&#128579";
}

if(result[0].label == "ANGRY"){
    document.getElementById("mood_p").innerHTML = "&#128545";
}


if(result[1].label == "HAPPY"){
    document.getElementById("mood2_p").innerHTML = "&#128512";
}

if(result[1].label == "SAD"){
    document.getElementById("mood2_p").innerHTML = "&#128579";
}

if(result[1].label == "ANGRY"){
    document.getElementById("mood2_p").innerHTML = "&#128545";
}

    }

}


