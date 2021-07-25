
var name = prompt("what is your fav sport")

alert("hey, nice to know your fav sport is " + name )

var favsport = prompt("what is you fav football team? realmadrid or FC Barcelona or juventus")

while(favsport !="realmadrid" && favsport != "FC Barcelona"&& favsport !="juventus"){

favsport = prompt("what is you fav football team? realmadrid or FC Barcelona or juventus")

}

var number=prompt("put the number of pic you want to see");

if(favsport == "realmadrid"){
  for(i=0;i<number;i++)
document.write(
  "<div>" + "<h3>" + favsport+"</h3>"
+ "<img  src='https://www.realmadrid.com/img/horizontal_940px/comunicado-oficial_20201229035034.jpg' width='400' height='200'     />" + "</div>")
}
else if (favsport =="FC Barcelona"){
   for(i=0;i<number;i++)
document.write(
  "<div>" + "<h3>" + favsport+"</h3>"
+ "<img  src='https://yt3.ggpht.com/UUUBRjUs2lBdKGgtOfsHifIXscTWf8HVf5xm0qUQsHPTDyGWqqKivQUmIKopoGYRIlU7W26lGA=s900-c-k-c0x00ffffff-no-rj'  width='400' height='200'      />" + "</div>")
}
else if(favsport =="juventus"){
   for(i=0;i<number;i++)
document.write(
  "<div>" + "<h3>" + favsport+"</h3>"
+ "<img  src='http://1.bp.blogspot.com/-dC9788ERT9c/VNevbdU3N3I/AAAAAAAAl0k/-vgPkrFkyYk/s1600/juventus-logo.jpg'  width='400' height='200'       />" + "</div>")
}

  var rates = prompt("What star rating would you give, 1-5?")

function rate(){
  while(rates>5){
    rates =prompt("please repeate your rate from 1-5")
  }

    return rate;
}
rate();
