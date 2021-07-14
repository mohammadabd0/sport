
var name = prompt("what is your fav sport")

alert("hey, wlecome to my website " + name )

var favCar = prompt("what is you fav football team?")


if(favCar == "realmadrid"){
document.write(
  "<div>" + "<h3>" + favCar+"</h3>"
+ "<img  src='https://www.realmadrid.com/img/horizontal_940px/comunicado-oficial_20201229035034.jpg' width='400' height='200'     />" + "</div>")
}
else if (favCar =="FC Barcelona"){
document.write(
  "<div>" + "<h3>" + favCar+"</h3>"
+ "<img  src='https://yt3.ggpht.com/UUUBRjUs2lBdKGgtOfsHifIXscTWf8HVf5xm0qUQsHPTDyGWqqKivQUmIKopoGYRIlU7W26lGA=s900-c-k-c0x00ffffff-no-rj'  width='400' height='200'      />" + "</div>")
}
else if(favCar =="mercedes"){
document.write(
  "<div>" + "<h3>" + favCar+"</h3>"
+ "<img  src='http://1.bp.blogspot.com/-dC9788ERT9c/VNevbdU3N3I/AAAAAAAAl0k/-vgPkrFkyYk/s1600/juventus-logo.jpg'  width='400' height='200'       />" + "</div>")
}
else{
  alert('are not here page')
}