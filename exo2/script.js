var c2 = document.getElementById('canvas').getContext('2d');
c2.fillStyle = '#f00';
c2.beginPath();
c2.moveTo(50,50);
c2.lineTo(20, 20);
c2.lineTo(60, 20);
c2.lineTo(80, 40);
c2.lineTo(60, 80);
c2.lineTo(20, 80);
c2.lineTo(0, 40);


c2.closePath();
c2.fill();

c2.lineWidth = 4;
c2.strokeStyle = "blue";
c2.stroke();
