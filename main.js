const text = document.querySelectorAll(".heading");

for (let j = 0; j < text.length; j++) {
  text[j].classList.add(`heading-${j}`);
  const strText = text[j].textContent;
  console.log(strText);

  const splitText = strText.split("");
  console.log(splitText);

  text[j].textContent = "";

  for (let i = 0; i < splitText.length; i++) {
    text[j].innerHTML += "<span>" + splitText[i] + "</span>";
  }

  const interval = setInterval(ontick, 100);
  let char = 0;

  function ontick() {
    const span = document.querySelectorAll(`.heading-${j} span`)[char];
    span.classList.add(`animate-${j}`);

    char++;
    if (char >= splitText.length) {
      clearInterval(interval);
    }
  }

  
}

var UID = {
  _current: 0,
  getNew: function () {
    this._current++;
    return this._current;
  },
};

HTMLElement.prototype.pseudoStyle = function (element, prop, value) {
  var _sheetId = "pseudoStyles";
  var _head = document.head || document.getElementsByTagName("head")[0];
  
  
  var _sheet =    document.getElementById(_sheetId) || document.createElement("style");
  _sheet.id = _sheetId;
  
  var className = "pseudoStyle" ;
  _sheet.innerHTML =
    " ." + className + ":" + "before" + "{" + prop + ":" + value + "}"+
    " ." + className + ":" + "after" + "{" + prop + ":" + value + "}";

  _head.appendChild(_sheet);
  return this;
};

var deg = 0;
var div = document.getElementsByClassName("box")[0];
div.classList.add('pseudoStyle')
animations();
var inervals=setInterval(animations,1);
function animations() {
  deg = (deg + 1) % 360;

  div.pseudoStyle(
    "",
    "background",
    `linear-gradient(${deg}deg,cyan,rgba(0,0,0,1),yellow)`
  );
}




const spiral=document.querySelector('.spiral');
for(let i=1;i<=20;i++)
{
  const span=`<span style="--i:${i}"></span>`;
  
  spiral.innerHTML+=(span);
  console.log(spiral)
}
console.log(spiral);



const box3D=document.querySelector('.box-3d');
const aniamtion3d=document.querySelector('.animation-3d');

aniamtion3d.addEventListener('mousemove',(e)=>{

  var x= (e.pageX)/10;
  var y=(e.pageY)/7;
  box3D.style.transform=`perspective(1000px) rotateY(${x}deg) rotateZ(${y}deg)`;
})