bark=0;
meow=0;
moo=0;
roar=0;

function start(){navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/GRfMWrq-p/model.json",modelLoaded);
}
function modelLoaded(){
    console.log("MODEL IS LOADED!!")
    classifier.classify(gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255);
        g=Math.floor(Math.random()*255);
        b=Math.floor(Math.random()*255);
        
        label_0=results[0].label;
        if(label_0=="Background Noise"){
            label=results[1].label;
            document.getElementById("name").innerHTML=label;
            percent=(results[1].confidence*100).toFixed(2);
            console.log(percent);
            document.getElementById("percent").innerHTML=percent+"%";
            document.getElementById("name").style.color="rgb("+r+","+g+","+b+")";
            document.getElementById("percent").style.color="rgb("+r+","+g+","+b+")";
        }
        else{
            label=results[0].label;
            document.getElementById("name").innerHTML=label;
            percent=(results[0].confidence*100).toFixed(2);
            console.log(percent);
            document.getElementById("percent").innerHTML=percent+"%";
            document.getElementById("name").style.color="rgb("+r+","+g+","+b+")";
            document.getElementById("percent").style.color="rgb("+r+","+g+","+b+")";
        }

        img=document.getElementById("animal");
        text=document.getElementById("name").value;
        if(text=="Barking"){

            bark=bark+1;
            img.src="Dog.png";
            document.getElementById("dDog").innerHTML=bark;
        }
        if(text=="Meow"){

            meow=meow+1;
            img.src="Cat.png";
            document.getElementById("dCat").innerHTML=meow;
        }
        if(text=="moo"){

            moo=moo+1;
            img.src="moo.png";
            document.getElementById("dCow").innerHTML=moo;
        }
        if(text=="roar"){

            roar=roar+1;
            img.src="roar.png";
            document.getElementById("dRoar").innerHTML=roar;
        }
        
    }
}