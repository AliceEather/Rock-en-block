function filterMusic(genre, div) {
  $.getJSON("https://api.airtable.com/v0/apploRqA5suojS81Q/musics?api_key=keyrIlRdQy0VIxqqR",
  function(data) {
  $.each(data.records,function(key,val) {
    console.log("Je lis la ligne " + val.fields.title);
    if (genre == 'All' || val.fields.hashtags == genre) {

      console.log("Je suis du bon genre (" + genre + "), donc je m'affiche");
      $(val.fields.title).appendTo(div);
      $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart 'frameborder='0' allowtransparency='true'></iframe>").appendTo(div);

  }})})
}

$(document).ready(function(){

  //$(".recherche").click(function(){
        //$("recherche").toggle(1000);

  //});

// On la met de côté pour ne pas la perdre

// $.getJSON("https://api.airtable.com/v0/apploRqA5suojS81Q/musics?api_key=keyrIlRdQy0VIxqqR",
// 					function(data) {
//               console.log(data);
//               $.each(data.records, function(key,val) {
//                   console.log(val.fields.title)
//                   $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#musiques');
//
// });

// $.getJSON("https://api.airtable.com/v0/apploRqA5suojS81Q/musics?api_key=keyrIlRdQy0VIxqqR",
// 					function(data) {
//               $.each(data.records,function(key,val) {
//               $(val.fields.title).appendTo('#hardrock');
//               $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#hardrock');
//             });
// });




$('#search').on("click",function() {
      $('#musiques').html(''); //Va chercher l'article #musiques
      filterMusic($('#barre').val(), '#musiques'); //filterMusic appel la fonction en haut du fichier et rempli musique selon le genre de search.

});


    filterMusic('New', '#nouveau');

});
