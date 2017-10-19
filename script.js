$(document).ready(function(){

  $(".recherche").click(function(){
        $("recherche").toggle(1000);

});

$.getJSON("https://api.airtable.com/v0/apploRqA5suojS81Q/musics?api_key=keyrIlRdQy0VIxqqR",
					function(data) {
              console.log(data);
              $.each(data.records, function(key,val) {
                  console.log(val.fields.title)
                  $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#musiques');

});

});

$.getJSON("https://api.airtable.com/v0/apploRqA5suojS81Q/musics?api_key=keyrIlRdQy0VIxqqR",
					function(data) {
              $.each(data.records,function(key,val) {
              $(val.fields.title).appendTo('#hardrock');
              $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#hardrock');
            });
});


$('#search').on("click",function() {
      $('#hardrock').html('');
      $.getJSON("https://api.airtable.com/v0/apploRqA5suojS81Q/musics?api_key=keyrIlRdQy0VIxqqR",
      function(data) {
      $.each(data.records,function(key,val) {
        if (val.fields.hashtags == $('#barre').val()) {
          $(val.fields.title).appendTo('#hardrock');
          $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart frameborder='0' allowtransparency='true'></iframe>").appendTo('#hardrock');

      }})})})
});
