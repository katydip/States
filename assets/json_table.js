(function() {

  $(function() {


    $.get("http://localhost:1337/user", function(data) {
      // console.log(data[0]);

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

        //  $("tbody").append("<tr><td>" + state + "</td><td>" + capital + "</td></tr>");
        $("tbody").append(`<tr><td>${state}</td><td>${capital}</td><td>${abbreviation}</td><td>${statehood}</td><td>${votes}</td><td>${nickname}</td><td>${zone}</td><td>${city}</td><td>${animal}</td><td>${fish}</td><td>${insect}</td><td>${tree}</td><td><button type="button" data="${data.id}" class="btn btn-primary btn-sm">Delete</button></td></tr>`);
      });
    });


    $("tbody").on('click', '.btn.btn-primary', function() {
      $(this).closest('tr').remove();
      var idclick = $(this).attr("data")

      var url = ('http://localhost:1337/user' + "/" + idclick);
      console.log(url);

      $.ajax({
        url: url,
        type: 'DELETE'
      });

    });







  })
})();
