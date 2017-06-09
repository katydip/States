(function() {

  $(function() {


    $.get("http://localhost:1337/user", function(data) {
      // console.log(data[0]);

//this .each is looping through each index of my data and storing the requested info in variables I assigned below
      $.each(data, function(index, data) {
        var state = data.state;
        var capital = data.state_capital;
        var abbreviation = data.state_abbreviation;
        var statehood = data.statehood_date;
        var votes = data.electoral_votes;
        var nickname = data.state_nickname;
        var zone = data.time_zone;
        var city = data.largest_city;
        var animal = data.state_animal;
        var fish = data.state_fish;
        var insect = data.state_insect;
        var tree = data.state_tree;
        var id = data.id;

//this function appends the table body while in the .each so its looping through the info for each row.
//I added a button with bootstrap styling in the last column for each row. providing a data attribute allows me to grab on to the buttons
        //  $("tbody").append("<tr><td>" + state + "</td><td>" + capital + "</td></tr>"...ETC.);
        //concatenating gives faster results than the template literals I used below.  next time..
        $("tbody").append(`<tr><td>${state}</td><td>${capital}</td><td>${abbreviation}</td><td>${statehood}</td><td>${votes}</td><td>${nickname}</td><td>${zone}</td><td>${city}</td><td>${animal}</td><td>${fish}</td><td>${insect}</td><td>${tree}</td><td><button type="button" data="${data.id}" class="btn btn-primary btn-sm">Delete</button></td></tr>`);
      }); //ends my each
    }); //ends my get

//new function for the button click. removes the closest row in the table body from the DOM
//idclick is keeping track of which ID from the data that button is targeting
    $("tbody").on('click', '.btn.btn-primary', function() {
      $(this).closest('tr').remove();
      var idclick = $(this).attr("data")

//creating variable for my url to make sure I am targeting the correct id url before I delete
      var url = ('http://localhost:1337/user' + "/" + idclick);
      console.log(url);

//this is like the $.get(url) - but for delete.  targeting the specific id URL that was recorded by the click
//this deletes just like clicking delete in postman- record is gone from the api.
//might be a good idea to alert: "are you sure?"
      $.ajax({
        url: url,
        type: 'DELETE'
      });

    });







  })
})();
