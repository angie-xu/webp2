//onload function
$(function() {
  $("body").css("background", "#954535");
  $("h2").css("color", "white");


  $("#author-search").click(function() {
    let searchTerm = $("#author").val()
    $("#fail").text('')
    $("#publications").html('')
    // make sure the searchTerm isn't empty
    if (searchTerm !== '') {
      // here we pass the API the topic as our "query"

      $.getJSON(`https://openlibrary.org/search/authors.json?q=${searchTerm}`, function(data) {
        //but, depending on what we search, we could get thousands of things or nothing
        //so we should account for the first case
        let key = data['docs'][0].key;

        // let booksData;
        $('#by').text('Books By ' + searchTerm + ':')

        $.getJSON(`https://openlibrary.org/authors/${key}/works.json`, function(worksData) {
          let booksData = worksData['entries'];

          if (booksData.length <= 0) {
            $('#fail').text("No authors with that last name.")
        } else {
          for (let i = 0; i < 10; i++) {
            let work = booksData[i]
            $('#publications').append('<li>' + work.title + '</li>');
          }
        }
        }).fail(function() {
          console.log("FAILED");
        })

        // this could return
    }).fail(function() {
      //we can add a "fail" function to our AJAX request to do something if it fails
      $('#fail').text("No authors with that name.")
      console.log("Try a different author.")
      })
    }
    //reset the input
    $('#author').val('')

    $('#search').text('Type another author to search again.')
  })

    let img = $("<img />",
    {
      src: 'img/book1.png',
      id: 'book-image'
    }
  )

  // img.appendTo(".create-image")
  // $("#book-image").click(function() {
  //   $(this).addClass("grayscale")
  // })
  //
  // $("#book-image").hover(
  //
  // $(this).filter(':not(:animated)').animate({
  //    margintop:'10px'
  // },'slow');

})
