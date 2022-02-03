//Här nedan har jag lagt in i Javascript att det ska komma upp en ruta när man trycker på "skicka" som berättar för användaren att mailet har skickats//
function verificationMessage(){
    alert("Ditt mail har skickats, tack!")
}

//Här nedan har jag lagt in att texten Yummy! ska synas//
function showYummy() {
    document.getElementById("yummytext").style.visibility = "visible";
}

//Här har jag lagt in att texten yummy! inte ska synas//
function hideYummy() {
    document.getElementById("yummytext").style.visibility = "hidden";
}

//Här har jag lagt in text som ligger under headern på förstasidan och där texten ändras beroende på tid (if, else if, else)//
const hour = new Date().getHours();
let massage;
if(hour < 12)
{
    message = "God morgon! Hoppas du hittar ett frukost- eller brunchställe som passar dig";
}
else if(hour <= 17)
{
    message = "God Eftermiddag! Hoppas du hittar ett frukost- eller brunchställe som passar dig";
}
else
{
    message = "God kväll! Hoppas du hittar ett frukost- eller brunchställe som passar dig";
}
document.getElementById("ifelse").innerHTML =message;