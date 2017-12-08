function loadImg()
{
  base_image = new Image();
  base_image.src = 'img.jpg';
  base_image.onload = function(){
    context.drawImage(base_image, 0, 0, 1306,720);
  }
}

var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');

var context = canvas.getContext('2d');


      context.beginPath();
      context.arc(330, 240, 50, 0, 2 * Math.PI, false);

      context.fillStyle = 'rgba(255, 0, 0, 0.5)';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#a77b7b';
      context.globalCompositeOperation="destination-over";
      context.stroke();





loadImg();
