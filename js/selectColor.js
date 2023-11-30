let lastSelectedMaleDataValue = null;
let lastSelectedFemaleDataValue = null;
document.addEventListener("DOMContentLoaded", () => {
const chickenIcons = document.querySelectorAll('.malechickselpic-icon, .femalechickselpic-icon');
chickenIcons.forEach((icon) => {
icon.addEventListener('mouseover', (event) => {
const chickenName = icon.getAttribute('alt');
// Create a tooltip element
const tooltip = document.createElement('div');
tooltip.classList.add('chicken-tooltip');
tooltip.textContent = chickenName;
// Append the tooltip to the icon's parent (the container)
icon.parentElement.appendChild(tooltip);
// Position the tooltip under the mouse cursor
const mouseX = event.clientX;
const mouseY = event.clientY;
tooltip.style.left = mouseX + 'px';
tooltip.style.top = mouseY + 'px';
// Remove the tooltip when the mouse leaves the icon
icon.addEventListener('mouseout', () => {
icon.parentElement.removeChild(tooltip);
});
});
});
//Handle button change color
function handleButtonClick(event) {
console.log('Button clicked'); 
console.log('Button clicked');
console.log('Button clicked');
// Remove active class from all buttons
colorButtons.forEach(button => {
button.classList.remove('color-button-active');
});
// Add active class to the clicked button
event.currentTarget.classList.add('color-button-active');
// Extract content ID from the button ID
const contentId = event.currentTarget.id.replace('ButtonM', 'M').replace('ButtonF', 'F');
// Update content
updateContent(contentId);
}
// Get all the color buttons
const colorButtons = document.querySelectorAll('.color-button');
// Add click event listener to each button
colorButtons.forEach(button => {
button.addEventListener('click', handleButtonClick);
});
// -------
function updateContent(content) {
document.getElementById("content").textContent = content;
}
updateContent("default");
// Event listener for Silver button
document.getElementById("SilverButtonM").addEventListener("click", () => {
updateContent("SilverM");
});
// Event listener for Gold button
document.getElementById("GoldButtonM").addEventListener("click", () => {
updateContent("GoldM");
});
document.getElementById("RedButtonM").addEventListener("click", () => {
updateContent("RedM");
});
document.getElementById("LemonButtonM").addEventListener("click", () => {
updateContent("LemonM");
});
// Event listener for Silver button
document.getElementById("SilverButtonF").addEventListener("click", () => {
updateContent("SilverF");
});
// Event listener for Gold button
document.getElementById("GoldButtonF").addEventListener("click", () => {
updateContent("GoldF");
});
document.getElementById("RedButtonF").addEventListener("click", () => {
updateContent("RedF");
});
document.getElementById("LemonButtonF").addEventListener("click", () => {
updateContent("LemonF");
});
function updateContent(color) {
let containerm = document.querySelector(".calmale-right");
let containerf = document.querySelector(".calfemale-right");
// Change the innerHTML based on the color
switch (color) {
case "GoldM":
containerm.innerHTML = `
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/zwartgoudberken.JPG" alt="Black Gold" data-value='E:E^R/E^R'>
   <span class="hover-text">Black Gold</span>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/zwartgoudberkenkoekoek.JPG" alt="Gold Cuckoo" data-value='E:E^R/E^R,B:B/(B)'>
   <span class="hover-text">Gold Cuckoo</span>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/zwartgoudkoekoek.JPG" alt="Crele" data-value='E:e+/e+,B:B/(B)'>
   <span class="hover-text">Crele</span>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/zwartgoudpatrijs.JPG" alt="Partridge, Light brown" data-value='E:e+/e+'>
   <span class="hover-text">Partridge, Light brown</span>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/zwartgoudpatrijsporselein.JPG" alt="Light Brown Mottled" data-value='E:e+/e+,Mo:mo/mo'>
   <span class="hover-text">Light Brown Mottled</span>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/zwartgoudpatrijs.JPG" alt="Wheaten" data-value='E:E^Wh/E^Wh'>
   <span class="hover-text">Wheaten</span>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/zwartroodberken.JPG" alt="Black Copper" data-value='E:E^R/E^R,Mh:Mh/Mh'>
   <span class="hover-text">Black Copper</span>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/zwartgoudcolumbia.JPG" alt="Buff Columbian" data-value='E:e^b/e^b,Co:Co/Co'>
   <span class="hover-text">Buff Columbian</span>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mzwartgoudcolumbiakoekoek.JPG" alt="Buff Cuckoo" data-value='E:e^b/e^b,Co:Co/Co,B:B/(B)'>
   <span class="hover-text">Buff Cuckoo</span>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mzwartgoudgeloverd" alt="Spangled" data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg,Ml:Ml/Ml'>
   <span class="hover-text">Spangled</span>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mzwartgoudgezoomd.JPG" alt="Gold laced (Blacktail)" data-value='E:e^b/e^b,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml'>
   <span class="hover-text">Gold laced (Blacktail)</span>
</div>
<div class="image-wrapper">
<img class="malechickselpic-icon" src="img/male/Mzwartgoudgezoomd.JPG" alt="Gold laced (Sebright)" data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml'>
<span c
</a>
`;
break;
case "RedM":
containerm.innerHTML = `
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mwitroodcolumbia.JPG" alt="White Trimmed Red" data-value='E:E^Wh/E^Wh,Co:Co/Co,Mh:Mh/Mh,I:I/i+'>
   <span class="hover-text">White Trimmed Red</span>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mwitroodgezoomddubbel.jpg" alt="Jubilee (Indian game)" data-value='E:e^b/e^b,Pg:Pg/Pg,Ml:Ml/Ml,Mh:Mh/Mh,I:I/i+'>
   <span class="hover-text">Jubilee (Indian game)</span>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mwitroodporselein.JPG" alt="Red Mottled" data-value='E:E^Wh/E^Wh,Mh:Mh/Mh,Co:Co/Co,Mo:mo/mo'>
   <span class="hover-text">Red Mottled</span>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mzwartroodcolumbiakoekoek.JPG" alt="Red Barred" data-value='E:E^Wh/E^Wh,Co:Co/Co,B:B/(B),Mh:Mh/Mh'>
   <span class="hover-text">Red Barred</span>
</div>
</a>`;
break;
case "LemonM":
containerm.innerHTML = `
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/MFzwartgeelpatrijs.JPG" alt="Cream Light Brown" data-value='E:e+/e+,Ig:ig/ig'>
   <div class="hover-text">Cream Light Brown</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/MFzwartgeeltarwe.jpg" alt="Cream Wheaten" data-value='E:E^Wh/E^Wh,S:S/(s+)'>
   <div class="hover-text">Cream Wheaten</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mzwartgeelporselein.JPG" alt="Lemon Porcelaine" data-value='E:e^b/e^b,Co:Co/Co,Mo:mo/mo,Ig:ig/ig'>
   <div class="hover-text">Lemon Porcelaine</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mparelgrijsgeelporselein.JPG" alt="Porcelain" data-value='E:e^b/e^b,Co:Co/Co,Mo:mo/mo,Lav:lav/lav'>
   <div class="hover-text">Porcelain</div>
</div>
</a>`;
break;
case "GoldF":
containerf.innerHTML = `
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/Fzwartgoudberken.JPG" alt="Black Gold" data-value='E:E^R/E^R'>
   <div class="hover-text">Black Gold</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/Fzwartgoudberkenkoekoek.JPG" alt="Gold Cuckoo" data-value='E:E^R/E^R,B:B/(B)'>
   <div class="hover-text">Gold Cuckoo</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/Fzwartgoudkoekoek.JPG" alt="Crele" data-value='E:e+/e+,B:B/(B)'>
   <div class="hover-text">Crele</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/Fzwartgoudpatrijs.JPG" alt="Partridge, Light brown" data-value='E:e+/e+'>
   <div class="hover-text">Partridge, Light brown</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/Fzwartgoudpatrijsporselein.JPG" alt="Light brown mottled" data-value='E:e+/e+,Mo:mo/mo'>
   <div class="hover-text">Light brown mottled</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/Fzwartgoudtarwe.JPG" alt="Wheaten" data-value='E:E^Wh/E^Wh'>
   <div class="hover-text">Wheaten</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/Fzwartroodberken.JPG" alt="Black Copper" data-value='E:E^R/E^R,Mh:Mh/Mh'>
   <div class="hover-text">Black Copper</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartgoudcolumbia.JPG" alt="Buff Columbian" data-value='E:e^b/e^b,Co:Co/Co'>
   <div class="hover-text">Buff Columbian</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartgoudcolumbiakoekoek.JPG" alt="Buff Cuckoo" data-value='E:e^b/e^b,Co:Co/Co,B:B/(B)'>
   <div class="hover-text">Buff Cuckoo</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartgoudgeloverd.jpg" alt="Spangled" data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg,Ml:Ml/Ml'>
   <div class="hover-text">Spangled</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartgoudgezoomd.JPG" alt="Gold laced (Blacktail)" data-value='E:e^b/e^b,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml'>
   <div class="hover-text">Gold laced (Blacktail)</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartgoudgezoomd.JPG" alt="Gold laced (Sebright)" data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml'>
   <div class="hover-text">Gold laced (Sebright)</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartgoudkwartel.JPG" alt="Quail" data-value='E:e+/e+,Co:Co/Co,Ml:Ml/Ml'>
   <div class="hover-text">Quail</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartgoudlakenvelder.JPG" alt="Vorwerk-Gold Lakenvelder" data-value='E:e^b/e^b,Co:Co/Co,Cha:cha/cha'>
   <div class="hover-text">Vorwerk-Gold Lakenvelder</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartgoudmeervoudiggezoomd.JPG" alt="Laced Partridge" data-value='Pg:Pg/Pg'>
   <div class="hover-text">Laced Partridge</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartgoudpel.jpg" alt="Gold (Campine)" data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg'>
   <div class="hover-text">Gold (Campine)</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartgoudpel.jpg" alt="Gold Quill" data-value='E:e^b/e^b,Db:Db/Db,Pg:Pg/Pg'>
   <div class="hover-text">Gold Quill</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartgoudpel.jpg" alt="Gold (Campine)" data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg'>
   <div class="hover-text">Gold (Campine)</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartgoudpel.jpg" alt="Millefleur" data-value='E:e^b/e^b,Co:Co/Co,Mo:mo/mo'>
   <div class="hover-text">Millefleur</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/Fblauwgoudberken.jpg" alt="Blue Gold" data-value='E:E^R/E^R,Bl:Bl/bl+'>
   <div class="hover-text">Blue Gold</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/Fblauwgoudpatrijs.jpg" alt="Blue Light Brown" data-value='E:e+/e+,Bl:Bl/bl+'>
   <div class="hover-text">Blue Light Brown</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/bruingoudcolumbia.jpg" alt="Buff" data-value='E:E^Wh/E^Wh,Co:Co/Co,Db:Db/Db,Mh:Mh/Mh,Di:Di/Di'>
   <div class="hover-text">Buff</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/Fwitgoudpatrijs.jpg" alt="Red pyle" data-value='E:e+/e+,I:I/i+'>
   <div class="hover-text">Red pyle</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/witgoudgezoomd.jpg" alt="Ochre White Millefleur" data-value='E:E^Wh/E^Wh,Co:Co/Co,I:I/i+,Mo:mo/mo'>
   <div class="hover-text">Ochre White Millefleur</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/witgoudpel.JPG" alt="White Patterned Gold Quill" data-value='E:e^b/e^b,Db:Db/Db,Pg:Pg/Pg,I:I/I'>
   <div class="hover-text">White Patterned Gold Quill</div>
</div>
</a>
`;
break;
case "RedF":
containerf.innerHTML = `
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/witroodcolumbia.JPG" alt="White Trimmed Red" data-value='E:E^Wh/E^Wh,Co:Co/Co,Mh:Mh/Mh,I:I/i+'>
   <div class="hover-text">White Trimmed Red</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/witroodgezoomddubbel.jpg" alt="Jubilee (Indian game)" data-value='E:e^b/e^b,Pg:Pg/Pg,Ml:Ml/Ml,Mh:Mh/Mh,I:I/i+'>
   <div class="hover-text">Jubilee (Indian game)</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/witroodporselein.JPG" alt="Red Mottled" data-value='E:E^Wh/E^Wh,Mh:Mh/Mh,Co:Co/Co,Mo:mo/mo'>
   <div class="hover-text">Red Mottled</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartroodcolumbiakoekoek.JPG" alt="Red Barred" data-value='E:E^Wh/E^Wh,Co:Co/Co,B:B/(B),Mh:Mh/Mh'>
   <div class="hover-text">Red Barred</div>
</div>
</a>`;
break;
case "LemonF":
containerf.innerHTML = `
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/Fzwartgeelpatrijs.JPG" alt="Cream Light Brown" data-value='E:e+/e+,Ig:ig/ig'>
   <div class="hover-text">Cream Light Brown</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/Fzwartgeeltarwe.jpg" alt="Cream Wheaten" data-value='E:E^Wh/E^Wh,S:S/(s+)'>
   <div class="hover-text">Cream Wheaten</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartgeelporselein.JPG" alt="Lemon Porcelaine" data-value='E:e^b/e^b,Co:Co/Co,Mo:mo/mo,Ig:ig/ig'>
   <div class="hover-text">Lemon Porcelaine</div>
</div>
<div class="image-wrapper">
<img class="femalechickselpic-icon" src="img/female/parelgrijsgeelporselein.JPG" alt="Porcelain" data-value='E:e^b/e^b,Co:Co/Co,Mo:mo/mo,Lav:lav/lav'>
<div class="hover-text">Porcelain</div></a>`;
   break;
   default:
   containerm.innerHTML = `
   <div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mwituitgebreidporselein.JPG" alt="Piebald - dom.white based exchequer" data-value='E:E/E,Mo:mo/mo,S:S/(S),I:I/I'>
   <div class="hover-text">Piebald - dom.white based exchequer</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/zwartzilverberken.JPG" alt="Birchen" data-value='E:E^R/E^R,S:S/(S)'>
   <div class="hover-text">Birchen</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/zwartzilverberken.JPG" alt="Black Brested Silver" data-value='E:E^R/E^R,S:S/(S)'>
   <div class="hover-text">Black Brested Silver</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/zwartzilverpatrijs.JPG" alt="Golden Duckwing" data-value='E:e+/e+,S:S/(s+)'>
   <div class="hover-text">Golden Duckwing</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/zwartzilvertarwe.JPG" alt="Silver Wheaten" data-value='E:E^Wh/E^Wh,S:S/(S)'>
   <div class="hover-text">Silver Wheaten</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mzwartuitgebreidporselein.JPG" alt="Black Mottled" data-value='E:E/E,S:S/(S),Mo:mo/mo'>
   <div class="hover-text">Black Mottled</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mzwartzilvergeloverd.JPG" alt="Silver Spangled" data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg,Ml:Ml/Ml,S:S/(S)'>
   <div class="hover-text">Silver Spangled</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mzwartzilvergezoomd.JPG" alt="Silver laced (Blacktail)" data-value='E:e^b/e^b,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml,S:S/(S)'>
   <div class="hover-text">Silver laced (Blacktail)</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mzwartzilvergezoomd.JPG" alt="Silver laced (Sebright)" data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml,S:S/(S)'>
   <div class="hover-text">Silver laced (Sebright)</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mzwartuitgebreidkoekoek.JPG" alt="Barred Cuckoo" data-value='E:E/E,B:B/(B),S:S/(S)'>
   <div class="hover-text">Barred Cuckoo</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mzwartuitgebreidkoekoek.JPG" alt="Cuckoo" data-value='E:E/E,B:B/(B),S:S/(S)'>
   <div class="hover-text">Cuckoo</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/blauwzilverberken.JPG" alt="Blue Brested Silver" data-value='E:E^R/E^R,Bl:Bl/bl+,S:S/(S)'>
   <div class="hover-text">Blue Brested Silver</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/blauwzilverpatrijs.JPG" alt="Blue Silver duckwing" data-value='E:e+/e+,Bl:Bl/bl+,S:S/(S)'>
   <div class="hover-text">Blue Silver duckwing</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/bruinzilverpatrijs.JPG" alt="Fawn Silver Duckwing" data-value='E:e+/e+,S:S/(S),I:I^d/i+'>
   <div class="hover-text">Fawn Silver Duckwing</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mparelgrijsuitgebreid.JPG" alt="Khaki" data-value='E:E/E,I:I^d/I^d'>
   <div class="hover-text">Khaki</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mparelgrijsuitgebreid.JPG" alt="Lavender" data-value='E:E/E,Lav:lav/lav'>
   <div class="hover-text">Lavender</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mparelgrijsuitgebreidkoekoek.JPG" alt="Lavender Cuckoo" data-value='E:E/E,Lav:lav/lav,B:B/(B)'>
   <div class="hover-text">Lavender Cuckoo</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mparelgrijszilvergeloverd.JPG" alt="Silver Lavender Spangled" data-value='E:e^b/e^b,Db:Db/Db,Pg:Pg/Pg,Ml:Ml/Ml,Lav:lav/lav,S:S/(S)'>
   <div class="hover-text">Silver Lavender Spangled</div>
</div>
<div class="image-wrapper">
   <img class="malechickselpic-icon" src="img/male/Mparelgrijszilverporselein.JPG" alt="Silver Porcelain" data-value='E:e^b/e^b,Co:Co/Co,Mo:mo/mo,Lav:lav/lav,S:S/(S)'>
   <div class="hover-text">Silver Porcelain</div>
</div>
</a>
`;
containerf.innerHTML = `
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/wituitgebreidporselein.JPG" alt="Piebald - dom.white based exchequer" data-value='E:E/E,Mo:mo/mo,S:S/(S),I:I/I'>
   <div class="hover-text">Piebald - dom.white based exchequer</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/Fzwartzilverberken.JPG" alt="Birchen" data-value='E:E^R/E^R,S:S/(S)'>
   <div class="hover-text">Birchen</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/Fzwartzilverberken.JPG" alt="Black Brested Silver" data-value='E:E^R/E^R,S:S/(S)'>
   <div class="hover-text">Black Brested Silver</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/Fzwartzilverpatrijs.JPG" alt="Golden Duckwing" data-value='E:e+/e+,S:S/(s+)'>
   <div class="hover-text">Golden Duckwing</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/Fzwartzilvertarwe.JPG" alt="Silver Wheaten" data-value='E:E^Wh/E^Wh,S:S/(S)'>
   <div class="hover-text">Silver Wheaten</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartuitgebreidporselein.JPG" alt="Black Mottled" data-value='E:E/E,S:S/(S),Mo:mo/mo'>
   <div class="hover-text">Black Mottled</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartzilvergeloverd.JPG" alt="Silver Spangled" data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg,Ml:Ml/Ml,S:S/(S)'>
   <div class="hover-text">Silver Spangled</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartzilvergezoomd.JPG" alt="Silver laced (Blacktail)" data-value='E:e^b/e^b,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml,S:S/(S)'>
   <div class="hover-text">Silver laced (Blacktail)</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartzilvergezoomd.JPG" alt="Silver laced (Sebright)" data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml,S:S/(S)'>
   <div class="hover-text">Silver laced (Sebright)</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartuitgebreidkoekoek.JPG" alt="Barred Cuckoo" data-value='E:E/E,B:B/(B),S:S/(S)'>
   <div class="hover-text">Barred Cuckoo</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/zwartuitgebreidkoekoek.JPG" alt="Cuckoo" data-value='E:E/E,B:B/(B),S:S/(S)'>
   <div class="hover-text">Cuckoo</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/Fblauwzilverberken.JPG" alt="Blue Brested Silver" data-value='E:E^R/E^R,Bl:Bl/bl+,S:S/(S)'>
   <div class="hover-text">Blue Brested Silver</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/Fblauwzilverpatrijs.JPG" alt="Blue Silver duckwing" data-value='E:e+/e+,Bl:Bl/bl+,S:S/(S)'>
   <div class="hover-text">Blue Silver duckwing</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/Fbruinzilverpatrijs.JPG" alt="Fawn Silver Duckwing" data-value='E:e+/e+,S:S/(S),I:I^d/i+'>
   <div class="hover-text">Fawn Silver Duckwing</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/parelgrijsuitgebreid.JPG" alt="Khaki" data-value='E:E/E,I:I^d/I^d'>
   <div class="hover-text">Khaki</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/parelgrijsuitgebreid.JPG" alt="Lavender" data-value='E:E/E,Lav:lav/lav'>
   <div class="hover-text">Lavender</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/parelgrijsuitgebreidkoekoek.JPG" alt="Lavender Cuckoo" data-value='E:E/E,Lav:lav/lav,B:B/(B)'>
   <div class="hover-text">Lavender Cuckoo</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/parelgrijszilvergeloverd.JPG" alt="Silver Lavender Spangled" data-value='E:e^b/e^b,Db:Db/Db,Pg:Pg/Pg,Ml:Ml/Ml,Lav:lav/lav,S:S/(S)'>
   <div class="hover-text">Silver Lavender Spangled</div>
</div>
<div class="image-wrapper">
   <img class="femalechickselpic-icon" src="img/female/parelgrijszilverporselein.JPG" alt="Silver Porcelain" data-value='E:e^b/e^b,Co:Co/Co,Mo:mo/mo,Lav:lav/lav,S:S/(S)'>
   <div class="hover-text">Silver Porcelain</div>
</div>
</a>
`;
break;
}
}
});
//
document.addEventListener("DOMContentLoaded", function () {
const maleContainer = document.querySelector(".calmale-right");
if (maleContainer) {
maleContainer.addEventListener("click", function (event) {
if (event.target.classList.contains("malechickselpic-icon")) {
handleMaleImageClick(event.target);
}
});
}
const femaleContainer = document.querySelector(".calfemale-right");
if (femaleContainer) {
femaleContainer.addEventListener("click", function (event) {
if (event.target.classList.contains("femalechickselpic-icon")) {
handleFemaleImageClick(event.target);
}
});
}
});
function handleMaleImageClick(clickedImage) {
const maleBreedNameElement = document.querySelector(
".breednameframe .m-breedname"
);
const maleBreedImageElement = document.querySelector(".mbreedimg img");
const altText = clickedImage.getAttribute("alt");
const src = clickedImage.getAttribute("src");
lastSelectedMaleDataValue = clickedImage.getAttribute("data-value");
// Update the displayed breed name
maleBreedNameElement.textContent = altText;
// Set the breed image source to the src of the clicked image
maleBreedImageElement.src = src;
KruisEmbed(lastSelectedMaleDataValue, lastSelectedFemaleDataValue);
}
function handleFemaleImageClick(clickedImage) {
const femaleBreedNameElement = document.querySelector(
".breednameframe .f-breedname"
);
const femaleBreedImageElement = document.querySelector(".fbreedimg img");
const altText = clickedImage.getAttribute("alt");
const src = clickedImage.getAttribute("src");
lastSelectedFemaleDataValue = clickedImage.getAttribute("data-value");
// Update the displayed breed name
femaleBreedNameElement.textContent = altText;
// Set the breed image source to the src of the clicked image
femaleBreedImageElement.src = src;
KruisEmbed(lastSelectedMaleDataValue, lastSelectedFemaleDataValue);
}
// Just change color of the button
// Function to handle button click and update content
// Function to handle button click and update content
function handleButtonClick(event) {
console.log('Button clicked'); 
console.log('Button clicked');
console.log('Button clicked');
// Remove active class from all buttons
colorButtons.forEach(button => {
button.classList.remove('color-button-active');
});
// Add active class to the clicked button
event.currentTarget.classList.add('color-button-active');
// Extract content ID from the button ID
const contentId = event.currentTarget.id.replace('ButtonM', 'M').replace('ButtonF', 'F');
// Update content
updateContent(contentId);
}
// Get all the image elements with the class "femalechickselpic-icon"
const femaleChickenImages = document.querySelectorAll(".femalechickselpic-icon");
// Iterate through each female chicken image and wrap it with a new div
femaleChickenImages.forEach((image) => {
// Create a new div element to serve as the wrapper
const newDiv = document.createElement("div");
// Add the class "chickselpic-wrapper" to the new div
newDiv.classList.add("chickselpic-wrapper");
// Insert the new div before the image in the DOM
image.parentNode.insertBefore(newDiv, image);
// Append the image to the new wrapper div
newDiv.appendChild(image);
});
