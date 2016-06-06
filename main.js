// album page js
var albumListStr = '<div class="row">';
albumGroup.forEach(function(element,idx) {
  albumListStr += `
  <div class="albums" id="${idx}">
  <img src="${element.cover}" alt="${element.title}" />
  <h3>${element.title}</h3>
  </div>
  `

});

$('.main-container').append(albumListStr);


// blue- angels album click event

$(".albums").on("click",function(event){
  event.preventDefault();
  console.log(albumGroup[event.currentTarget.id]);
var photoListStr = '<div class="row">';
albumGroup[0].pictures.forEach(function(element,idx) {
    // console.log("THIS IS ME", element)
  photoListStr += `
  <div class="thumbnail">
  <img src="${element.pic}" alt="" />
  <h3></h3>
  </div>
  `
  // debugger
  $(".album-container").removeClass("hidden")
  $(".album-selector").removeClass("hidden")
  $('.main-container').removeClass('active').addClass('hidden');
  $('header').removeClass('active').addClass('hidden');
  // console.log(photoListStr);
});
$('.album-container').append(photoListStr);
});


// artwork click event

$(".albums").on("click",function(event){
var photoListStr = '<div class="row">';
albumGroup[1].pictures.forEach(function(element,idx) {
    // console.log("THIS IS ME", element)
  photoListStr += `
  <div class="thumbnail">
  <img src="${element.pic}" alt="" />
  <h3></h3>
  </div>
  `
  // debugger
  $(".album-container").removeClass("hidden")
  $(".album-selector").removeClass("hidden")
  $('.main-container').removeClass('active').addClass('hidden');
  // console.log(photoListStr);
});
$('.album-container').append(photoListStr);
});


// storms click event


$(".albums").on("click",function(event){
var photoListStr = '<div class="row">';
albumGroup[2].pictures.forEach(function(element,idx) {
    // console.log("THIS IS ME", element)
  photoListStr += `
  <div class="thumbnail">
  <img src="${element.pic}" alt="" />
  <h3></h3>
  </div>
  `
  // debugger
  $(".album-container").removeClass("hidden")
  $(".album-selector").removeClass("hidden")
  $('.main-container').removeClass('active').addClass('hidden');
  // console.log(photoListStr);
});
$('.album-container').append(photoListStr);
});


// russia click event

$(".albums").on("click",function(event){
var photoListStr = '<div class="row">';
albumGroup[3].pictures.forEach(function(element,idx) {
    // console.log("THIS IS ME", element)
  photoListStr += `
  <div class="thumbnail">
  <img src="${element.pic}" alt="" />
  <h3></h3>
  </div>
  `
  // debugger
  $(".album-container").removeClass("hidden")
  $(".album-selector").removeClass("hidden")
  $('.main-container').removeClass('active').addClass('hidden');
  // console.log(photoListStr);
});
$('.album-container').append(photoListStr);
});


//surfing click event

$(".albums").on("click",function(event){
var photoListStr = '<div class="row">';
albumGroup[4].pictures.forEach(function(element,idx) {
    // console.log("THIS IS ME", element)
  photoListStr += `
  <div class="thumbnail">
  <img src="${element.pic}" alt="" />
  <h3></h3>
  </div>
  `
  // debugger
  $(".album-container").removeClass("hidden")
  $(".album-selector").removeClass("hidden")
  $('.main-container').removeClass('active').addClass('hidden');
  // console.log(photoListStr);
});
$('.album-container').append(photoListStr);
});


//drone click event

$(".albums").on("click",function(event){
  event.preventDefault();
var photoListStr = '<div class="row">';
albumGroup[5].pictures.forEach(function(element,idx) {
    // console.log("THIS IS ME", element)
  photoListStr += `
  <div class="thumbnail">
  <img src="${element.pic}" alt="" />
  <h3></h3>
  </div>
  `
  // debugger
  $(".album-container").removeClass("hidden")
  $(".album-selector").removeClass("hidden")
  $('.main-container').removeClass('active').addClass('hidden');
  // console.log(photoListStr);
});
$('.album-container').append(photoListStr);
});


// large photo click event

$(".thumbnail").on("click",function(event){
  event.preventDefault();
  var clicked = $(this).find('<img>').text();

  console.log("this is me",clicked);
  $(".album-selector").removeClass("active").addClass('hidden');
  $('.album-container').removeClass('active').addClass('hidden');

  });
  // var photStr = '<div class="photo-title">';
//   photoStr += `
//   <div class="thumbnail">
//   <img src="${element.pic}" alt="" />
//   <h3></h3>
//   </div>
//   `
//   // debugger
//   // $(".album-container").removeClass("hidden")
//   // $(".album-selector").removeClass("hidden")
//   // $('.photo-container').removeClass('active').addClass('hidden');
//   console.log(photoListStr);

// $('.photo-container').append(photoStr);



// $('.albums').on('click',function(event) {
//   event.preventDefault();
//
//   var clicked = $(this).find('h3').text()
//   window.curr = albumGroup.filter(function(element) {
//     // console.log(clicked);
//     //  return element.title === clicked;
//        var ourClassToShow = "." + clicked.toLowerCase();
//        $(ourClassToShow).removeClass('hidden');
//        $('main-container').removeClass('active').addClass('hidden');
//     //  console.log(ourClassToShow);
//
//        var photoListStr = '<div class="row">';
//        albumGroup.forEach(function(element,idx) {
//          photoListStr += `
//          <div class="albums">
//          <img src="${element.pictures}" alt="" />
//          <h3></h3>
//          </div>
//        `
// console.log(photoListStr);
//      });
//
//   });
// });
