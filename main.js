
$(document).ready(function(){



    // this .on(click) function will make the ajax call
    $("#find-movie").on("click", function(event){
        event.preventDefault(); //This event.prevent, Prevents the submit button from submitting a form when clicked
                                //event.prevent is used to prevent an events default behavior
    
        let movie = $("#movie-input").val(); // here we are grabbing the text from the input box
        console.log(movie);
        //now we make our URL
        let queryURL = "https://www.omdbapi.com/?s=" + movie+ "&y=&plot=short&apikey=trilogy";
    
    
        $.ajax({
            url:queryURL,
            method: "GET"
        }).then(function(response){
            
            console.log(response);
    
            let results = response.Search;

            for (let i = 0; i <results.length; i++){ // making a for loop for all images to be displayed
                
            let movieDiv = $("<div class = 'col-md-3'>");
            let imgURL = results[i].Poster;
            let showImage = $("<img>").attr("src", imgURL);


            movieDiv.append(showImage); //putting together the movieDiv with showImage
            $("#movie-view").prepend(movieDiv);// this will display the images.
    
    
        }
        });
    
    });
    }); 
    
    