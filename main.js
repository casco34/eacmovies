
$(document).ready(function(){



    // this .on(click) function will make the ajax call
    $("#find-movie").on("click", function(event){
        event.preventDefault(); //This event.prevent, Prevents the submit button from submitting a form when clicked
                                //event.prevent is used to prevent an events default behavior
    
        let movie = $("#movie-input").val(); // here we are grabbing the text from the input box
        console.log(movie);
        //now we make our URL
        let queryURL = "https://www.omdbapi.com/?s=" + movie+ "&y=&plot=short&apikey=8b3c560b";
    
    
        $.ajax({
            url:queryURL,
            method: "GET"
        }).then(function(response){
            
            console.log(response);
    
            let results = response.data;
            
            let imgURL = response.Poster;
            let movieDiv = $("<div class = 'cols-md-4'>");
            let showImage = $("<img>").attr("src", imgURL);
            movieDiv.append(showImage);
            $("#movie-view").prepend(movieDiv);
    
    
        
        });
    
    });
    }); 
    
    