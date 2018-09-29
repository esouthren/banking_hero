/* Order of slides:

Intro - no app on screen 

personalise
quest
rules
spendmoney
savemoney
completequest


*/

function personalise() {
    console.log("Personlising!");
    var new_slide_text = "";
    new_slide_text += "<h1>Slide Title</h1>";
    new_slide_text += addNextSlideButton('Add Quest', 'setQuest');
    setPresentationText(new_slide_text);
    
}

function setQuest() {
    console.log("Setting quest");
}

function addRules() {
    console.log("Adding rules");
}

function spendMoney() {
    console.log("spending money");
}

function saveMoney() {
    console.log("saving money");
}

function completeQuest() {
    console.log("Complete quest");
}

function setPresentationText(text) {
    console.log("setting text");
     $(".presentation_text_cell").html(text);
}

function addNextSlideButton(name, nextSlideFunction) {
    return '<div class="next_slide"><div class="button" onclick="' + nextSlideFunction + '()">' + name + ' ></div>'
}

