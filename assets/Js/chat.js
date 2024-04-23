import { crea } from "./myDom.js";

const chatBody = document.querySelector("#chat-body"),
    chatTextarea = document.querySelector("#chat-text"),
    btn = {
        send: document.querySelector("#chat-send"),
    },
    messageList = [
        {by: "user", message: "Ciao!"},
        {by: "admin", message: "Hola"},
        // {by: "user", message: "Come stai?"},

    ],
    newMessageEvt = new EventTarget();
    const newMessageSound = new Audio("./assets/sound/new-message.mp4");


export default function chat() {
    setEvent();
    showMessage();
}
function setEvent(){
  btn.send.addEventListener("click", sendMessage);
  chatTextarea.addEventListener("keyup", textareaevent);
  newMessageEvt.addEventListener('newUserMessage', newMessageUser);
}

function newMessageUser(){
    addMessageInPage(messageList[messageList.length - 1]);
}

function textareaevent(e){
    if(e.key === "Enter"){
        sendMessage(e);
    }
}

function sendMessage(e){
  const messageText = chatTextarea.value;
    const messageObj = { by: 'admin', message: messageText };

    if(!messageText) return; 

    messageList.push(messageObj);
    addMessageInPage(messageObj);
    chatTextarea.value = "";
    simulateUserMessage();
}

function simulateUserMessage(){
    setTimeout(() => {
        messageList.push({ by: 'user', message: 'Che bella giornata!'});
        newMessageEvt.dispatchEvent(new Event('newUserMessage'));
    }, 2000);
}

function showMessage(){
    messageList.forEach(msg => {
      addMessageInPage(msg);
    });
}
function addMessageInPage(msg){
  const div = crea("div", [["class", `message ${msg.by}`]]),
        span = crea("span", [['class', 'time']]),
        p = crea("p", [], msg.message);

    div.append(span, p);
    chatBody.append(div);
    chatBody.scrollTo(0, chatBody.scrollHeight - chatBody.clientHeight); 

    if(msg.by === 'user') newMessageSound.play();
}