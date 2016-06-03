// album page js
var albumListStr = '<div class="row">';
albumGroup.forEach(function(element,idx) {
  albumListStr += `
  <div class="albums">
  <img src="${element.cover}" alt="${element.title}" />
  <h3>${element.title}</h3>
  </div>
  `

});

$('.main-container').append(albumListStr);


// photo index js
// // debugger
// var photoListStr = '<div class="row">';
// albumGroup[0].pictures.forEach(function(element,idx) {
//     // console.log("THIS IS ME", element)
//   photoListStr += `
//   <div class="thumbnail">
//   <img src="${element.pic}" alt="" />
//   <h3></h3>
//   </div>
//   `
// });
//
// $('.album-container').append(photoListStr);


$('.albums').on('click',function(event) {


  var clicked = $(this).find('h3').text()
  window.curr = albumGroup.filter(function(element) {
     return element.title === clicked;

  });
});
