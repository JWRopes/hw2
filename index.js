// Your code goes here:


//Found this function on stack exchange to combine the click on the image with
//the function
$( "img" ).click(function() {

  //first I assign a variable to the change event (the image click)
  let smallImage = $(this)

    //now that we have the variable of the current action, we can assign another variable to be the source.
    let src = smallImage.attr("src")

      //now set the source attribute in the main image to the variable
      $("#main-image").attr("src",src)

});
