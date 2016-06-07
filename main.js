$(document).ready(function() {
  albumPage.init();
})
var albumPage = {
   init: function() {
   albumPage.styling();
   albumPage.events();
},

styling: function() {
   $('.main-container row').html("");
    albumGroup.forEach(function(element,idx) {
      var albumListStr = albumPage.htmlGenerator(albumTemplate.albumTmpl,element);
       $('.main-container .row').append(albumListStr);
    });
  },
events: function() {


},






templification: function(template) {
     return _.template(template);
 },


 htmlGenerator: function(template,data) {
    var tmpl = albumPage.templification(template);
    return tmpl(data);
  }
};

// album page js
// var albumListStr = '<div class="row">';
// albumGroup.forEach(function(element,idx) {
//   albumListStr += `
//   <div class="albums" id="${idx}">
//   <img src="${element.cover}" alt="${element.title}" />
//   <h3>${element.title}</h3>
//   </div>
//   `
//
// });
//
// $('.main-container').append(albumListStr);


// blue- angels album click event

$("body").on("click",'.albums',function(event){
  event.preventDefault();
  console.log("THING I CLICKED", this);
  window.glob = $(this)
  glob.find('h3').text().trim()
  // console.log(window.glob);
  var photoListStr = '<div class="row">';
  var photoList = albumGroup.find(function(element) { return element.title === glob.find('h3').text().trim() });
  console.log(photoList.pictures);
  photoList.pictures.forEach(function(element,idx){
    photoListStr += `
    <div class="thumbnail">
    <img src="${element.pic}" alt="" />
    <h3></h3>
    </div>
    `
    console.log(photoListStr);
    $(".album-container").removeClass("hidden")
    $(".album-selector").removeClass("hidden")
    $('header').removeClass('active').addClass('hidden')
    $('.main-container').removeClass('active').addClass('hidden');
  });

$('.album-container').append(photoListStr);
});
