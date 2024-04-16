const firstTab = document.querySelector('#chat'),
appServicesWrapper = document.querySelector('#app-services'),
serviceIconmap = new Map([
   ['chat', document.querySelector('#chat-tab-icon svg')],
   ['task', document.querySelector('#todo-tab-icon svg')],
   ['stats', document.querySelector('#stats-tab-icon svg')]
]);

export default function init() {
    appServicesWrapper.addEventListener('click', e => {
        e.stopPropagation();
        e.preventDefault();
        const target = getTarget(e);
        console.log(target.dataset.stepmargin);
        updateTab(target);
        updateActiveIcon(target);
    });
}

function updateTab(targetDiv) {
  firstTab.style.marginLeft = "-" + (targetDiv.dataset.stepmargin * 100) + "vw";
}

function updateActiveIcon(targetDiv) {

}

function getTarget(e) {
    return e.target.closest('[id$="tab-icon"]');
}