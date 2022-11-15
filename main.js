function startClassification() 
{
     navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Vz26RKKeV/model.json', modelReady);} 
function modelReady()
{
     classifier.classify( gotResults); 
}
var Dog = 0;
var Cow = 0 ;
var Lion = 0 ;
var Cat = 0 ;
function gotResults(error,results) {
     if (error) {
          console.log(error)
     }
     else{console.log(results); 
          random_number_r = Math.floor(Math.random() * 255) + 1;
          random_number_g = Math.floor(Math.random() * 255) + 1;
          random_number_b = Math.floor(Math.random() * 255) + 1;
          
        document.getElementById("result_label").innerHTML = "detected voice is off" +results[0].label;
        document.getElementById("result_count").innerHTML = "detected dog - " + Dog + "detected cat" + Cat + "detected lion" + Lion + "detected cow" + Cow ;
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+"," +random_number_g+ "," +random_number_b+")";
        document.getElementById("result_count").style.color = "rgb("
        +random_number_r+"," +random_number_g+ "," +random_number_b+ ")";
    
        img = document.getElementById('image');
        if (results[0]=="Bark-Dog") {
          img.src ="https://cdn-icons-png.flaticon.com/512/616/616554.png"
          Dog = Dog+1;
        }
        else  if (results[0]=="Meow-Cat") {
          img.src ="https://cdn-icons-png.flaticon.com/512/220/220124.png"
          Cat = Cat+1;
        }
        else  if (results[0]=="Moo-Cow") {
          img.src ="https://assets.webiconspng.com/uploads/2017/09/Cow-PNG-Image-67701.png"
          Cow = Cow+1;
        }
        else  {
          img.src ="https://cdn-icons-png.flaticon.com/512/2219/2219730.png"
          Lion = Lion+1;
        }
     }
}


