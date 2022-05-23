var $ = document.querySelector.bind(document);

var authorLink = $('.author-link');
// console.log(`🚀 - authorLink`, authorLink);

var angular = 0;
setInterval(() => {
  authorLink.style.filter = `hue-rotate(${angular}deg)`;
  angular+=20;
  if (angular > 360) angular = 0;
}, 500);


