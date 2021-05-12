var images = ["ME.png", "Mom.jpg", "dad.jpg", "sister.jpg"];
var names = ["Sachkrit Singh", "Supreet Kaur", "Manpreet Singh", "Nimar Kaur"];

var i = 0;
function change(){
i++;
total_people = 3;
if(i > total_people){
    i = 0;
}
var allimgs = images[i];
var text = names[i];

document.getElementById("theImg").src = allimgs;
document.getElementById("you_know_my_name").innerHTML = text;

}