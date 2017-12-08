var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  context.beginPath();
  context.lineWidth="2";
  context.arc(100, 100, 90, 0, 2 * Math.PI);
  context.stroke();
