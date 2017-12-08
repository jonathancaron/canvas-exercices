let canvas = document.getElementById('canvas');
let c2d = canvas.getContext("2d");
let rectangle = canvas.getContext("2d");

c2d.fillStyle="#FF0000";
c2d.fillRect(0,0,500,800);

rectangle.rect(20,20, 200, 100);
rectangle.fillStyle = "#d29d7b";
rectangle.fill();
rectangle.lineWidth = 10;
rectangle.strokeStyle = "white";
rectangle.stroke();

/*
FAQ :
- Que se passe-il lorsque le rectangle est plus grand que le canvas ?
  -> Le rectange se coupe au bord de la limite.
*/
