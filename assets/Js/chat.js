const chatBody = document.querySelector("#chat-body"),
    chatTextarea = document.querySelector("#chat-text"),
    btn = {
        send: document.querySelector("#chat-send"),
    },
    messageList = [
        {by: "user", message: "Ciao!"},
        {by: "admin", message: "Hola"},
        {by: "user", message: "Come stai?"},

    ],
    newMessageEvt = new EventTarget();


export default function chat() {
    setEvent();
    showMessage();
}
function setEvent(){
  btn.send.addEventListener("click", sendMessage);
  chatTextarea.addEventListener("keyup", textareaevent);
}
function textareaevent(e){
    if(e.key === "Enter"){
        console.log("Ho digitato qualcosa")
    }
  
}

function sendMessage(e){
  console.log("Devo inviare il messaggio");
}

function showMessage(){
    console.log("mostro i messaggi");
}