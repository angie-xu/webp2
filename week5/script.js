//onload function
$(function() {
  $("body").css("background", "#954535");
  $("h2").css("color", "white");


  $("#author-search").click(function() {
    let searchTerm = $("#author").val()
    $("#fail").text('')
    // make sure the searchTerm isn't empty
      if (searchTerm !== '') {
        // here we pass the API the topic as our "query"
        $.getJSON(`https://openlibrary.org/search/authors.json?q=${searchTerm}`, function(data) {
          //but, depending on what we search, we could get thousands of things or nothing
          //so we should account for the first case
          if (data.works.length <= 0) {
              $('#fail').text("No authors with that last name.")
          } else {
            for (let i = 0; i < 10; i++) {
              let work = data.works[i]
              $('#publications').append('<li>' + work.title + ' by ' + work.authors[0].name + '</li>')
            }
          }

          // this could return
      }).fail(function() {
        //we can add a "fail" function to our AJAX request to do something if it fails
        $('#fail').text("No authors with that last name.")
        console.log("Try a different author.")
      })
    }
    //reset the input
    $('#author').val('')
  })

    let img = $("<img />",
    {
      src: 'img/book1.png',
      id: 'landscape-image'
    }
  )

  img.appendTo(".create-image")
  $("#landscape-image").click(function() {
    $(this).addClass("grayscale")
  })

})