let myText = document.getElementById("my-text");
let result = document.getElementById("result");
let limit = 250;
result.textContent = 0 + "/" + limit;

myText.addEventListener('input',function(){
    let textLenght = myText.value.length;
    result.textContent = textLenght + "/" + limit;

    if(textLenght > limit){
        myText.style.borderColor = "#ff2851";
        result.style.color = "#ff2851";

        myText.style.color = "#ff2851";
        result.style.color = "#ff2851";

    }

    else{
        myText.style.borderColor = "#b2b2b2";
        result.style.color = "#737373";

        myText.style.color = "#b2b2b2";
        result.style.color = "#737373";

    }
});

