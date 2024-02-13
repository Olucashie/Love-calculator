function show(){ 
var ololufe1 = male.value;
var ololufe2 = female.value;
var reject = new Audio("DL6NBR8-funny-jumper.mp3");
var  poorLaugh = new Audio("mixkit-crowd-laugh-424.wav");
var  excellent = new Audio("mixkit-cartoon-positive-sound-2255.wav");
var  lessThanSeventy = new Audio("mixkit-trombone-disappoint-744.wav");
var  lessThanFifty = new Audio("mixkit-sad-game-over-trombone-471.wav");
var  lessThanThirty = new Audio("mixkit-cartoon-voice-laugh-343.wav");
var  lessThanTwenty = new Audio("mixkit-laughing-cartoon-creature-414.wav");
var  lessThanTen = new Audio("mixkit-crowd-laugh-424.wav");
var randomNumber = Math.round(Math.random()*100)

if (ololufe1 == "" || ololufe2 == "") {
    display.innerHTML = `
    <h1 class="display-6">Werey Fill inputs jare </h1>
        `
    reject.play()
}else if (randomNumber >= 70) {
    display.innerHTML = `
    <h1 class="display-6"> <b style="font-size:1em;"> ✔✔✔</b>
        <br>
            <p style="color:green; animation: blinker 2s linear infinite;">${ololufe1} and ${ololufe2} match</P> 
            <b style="font-size:1em;">${randomNumber}%</b>
            <p style="color:green; animation: blinker 2s linear infinite;">So This Is Love🙈 💗${ololufe1}</P> 
        </h1>
    `
    male.value = ""
    female.value = ""
    excellent.play()
}else if (randomNumber <= 70 && randomNumber > 50) {
    display.innerHTML = `
    <h1 class="display-6"> <b style="font-size:1em;"> ⚠⚠⚠</b>
        <br>
            <p style="color:yellow; animation: blinker 2s linear infinite;">${ololufe1} and ${ololufe2} match</P> 
            <b style="font-size:1em;">${randomNumber}%</b>
            <p style="color:yellow; animation: blinker 2s linear infinite;">${ololufe1}!! Anu Re Se Mi</P> 
        </h1>
    `
    male.value = ""
        female.value = ""
    lessThanSeventy.play()
}else if (randomNumber <= 50 && randomNumber >30) {
        display.innerHTML = `
        <h1 class="display-6"> <b style="font-size:1em;"> 😈😈😈</b>
            <br>
                <p style="color:yellow; animation: blinker 2s linear infinite;">${ololufe1} and ${ololufe2} match</P> 
                <b style="font-size:1em;">${randomNumber}%</b>
                <p style="color:yellow; animation: blinker 2s linear infinite;">Don't trust ${ololufe1}, ${ololufe2} U go dey trust for love😈😈😈 oju re abo</P> 
            </h1>
        `
        male.value = ""
        female.value = ""
        lessThanFifty.play()
}else if (randomNumber <= 30 && randomNumber >20) {
        display.innerHTML = `
        <h1 class="display-6"> <b style="font-size:1em;"> 😆😆😆</b>
            <br>
                <p style="color:red; animation: blinker 2s linear infinite;">${ololufe1} and ${ololufe2} match</P> 
                <b style="font-size:1em;">${randomNumber}%</b>
                <p style="color:red; animation: blinker 2s linear infinite;">Iku Ife Pae 😆😆</P> 
            </h1>
        `
        male.value = ""
        female.value = ""
        lessThanThirty.play()
}else if (randomNumber <= 20 && randomNumber >10) {
        display.innerHTML = `
        <h1 class="display-6"> <b style="font-size:1em;">🚩🚩🚩</b>
            <br>
                <p style="color:red; animation: blinker 2s linear infinite;">${ololufe1} and ${ololufe2} match</P> 
                <b style="font-size:1em;">${randomNumber}%</b>
                <p style="color:red; animation: blinker 2s linear infinite;">Oya 😁😁 Sope OtIlOr</P> 
            </h1>
        `
        male.value = ""
        female.value = ""
        lessThanTwenty.play()
}else if (randomNumber <= 10) {
        display.innerHTML = `
        <h1 class="display-6"> <b style="font-size:1em;"> 😀😀😁</b>
            <br>
                <p style="color:red; animation: blinker 2s linear infinite;">${ololufe1} and ${ololufe2} match</P> 
                <b style="font-size:1em;">${randomNumber}%</b>
                <p style="color:red; animation: blinker 2s linear infinite;">Breakfast on d bed 😁</P> 
            </h1>
        `
        male.value = ""
        female.value = ""
        lessThanTen.play()
}
}
// function showw(){
//     window.location.href = "Calculator.html"
// }



