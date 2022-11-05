function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('bird') 
    img1 = document.getElementById('cat')
    img2 = document.getElementById('dog')
    img3 = document.getElementById('rabbit')

    if (results[0].label == "Bird") {
      img.src = 'bird.png';
      img1.src = 'cat.png';
      img2.src = 'dog.png';
      img3.src = 'rabbit.png';
    } else if (results[0].label == "Bark") {
      img.src = 'bird.png';
      img1.src = 'cat.png';
      img2.src = 'dog.png';
      img3.src = 'rabbit.png';
    } else if (results[0].label == "Meow") {
      img.src = 'bird.png';
      img1.src = 'cat.png';
      img2.src = 'dog.png';
      img3.src = 'rabbit.png';
    }else{
      img.src = 'bird.png';
      img1.src = 'cat.png';
      img2.src = 'dog.png';
      img3.src = 'rabbit.png';
    }
  }
}