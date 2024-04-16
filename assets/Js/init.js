const firstTab = document.querySelector('#chat'),
appServicesWrapper = document.querySelector('#app-services'),
serviceIconmap = new Map([
   ['chat', document.querySelector('#chat-tab-icon svg')],
   ['task', document.querySelector('#todo-tab-icon svg')],
   ['stats', document.querySelector('#stats-tab-icon svg')]
]);

export default function init() {
    console.log(serviceIconmap);
}