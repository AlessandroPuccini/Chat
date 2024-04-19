function crea(typeElem, attributes = [], text = null){

const newElem = document.createElement(typeElem);
  for(let[nomeAttr, valoreAttr] of attributes){
    newElem.setAttribute(nomeAttr, valoreAttr);
  }
 if(text){
    newElem.append(document.createTextNode(text));
 }
 return newElem;
}

export{crea};