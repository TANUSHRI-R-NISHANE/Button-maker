let bgColorEl=document.getElementById("bgColor");
let fontColorEl=document.getElementById("fontColor");
let fontSizeEl=document.getElementById("fontSize");
let fontWeightEl=document.getElementById("fontWeight");
let paddingEl=document.getElementById("padding");
let borderRadiusEl=document.getElementById("borderRadius");
let onCustomBtnEl=document.getElementById("onCustomBtn");


function onApplybtn(){

onCustomBtnEl.style.backgroundColor=bgColorEl.value;

onCustomBtnEl.style.color=fontColorEl.value;

onCustomBtnEl.style.fontSize=fontSizeEl.value;

onCustomBtnEl.style.fontWeight=fontWeightEl.value;

onCustomBtnEl.style.padding=paddingEl.value;

onCustomBtnEl.style.borderRadius=borderRadiusEl.value

}

