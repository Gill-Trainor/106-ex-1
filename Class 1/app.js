function createTodo() {
    // console.log("btn pressed");

    //using jQuery below you get the text
    var text2 = $("#txtText").val();
    // console.log("jq way", text2);

    // create an li
    var li = '<li>' + text2 + ' <button>Done!</button></li>';

    //ad the li to the ul
    $("#pending").append(li);

    // clear the input field
    $("#txtText").val("");
    
    //set the focus to the field
    $("txtText").focus();
}




//this is fn
function init() {
   /*  console.log("TODO app working!");
    console.log($); */
    //get text from the input field below 
    /* JS way below
    var text = document.getElementById("txtText").value;
    console.log("JS Way", text);
    */


    //hook events
    // ENG: when a click happens on elem btnSave, exec creatTodo fn
    $("#btnSave").click(createTodo);
    $("#txtText").keypress( function(e){   //inline function entirely
        // console.log(e);
        if(e.key == "Enter"){
            createTodo();
        }
    });
}



//when the browser finish rendering all HTML elements
//will execute a function called init
window.onload = init;










//removed code for later reference

/* var input = document.getElementById("txtTest");
console.log(input);
console.log(input.value);

    sayHello();

}

function sayHello(){
    console.log("Gill Trainor")
} */