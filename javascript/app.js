const overlayTriggerArr = Array.from(document.querySelectorAll('.overlay-trigger'));
const removalTabArr = Array.from(document.querySelectorAll('.removal-tab'));

function findSibling(el, siblingSelector) {
    return el.parentNode.querySelector(':scope > ' + siblingSelector);
} 

function overlayTriggerActivate(event) {
    const overlayTrigger = event.currentTarget;
    const overlayBackground = findSibling(overlayTrigger, '.overlay-background');
    const projectDetails = findSibling(overlayTrigger, '.project-details');
    const overlayRemoval = findSibling(overlayTrigger, '.overlay-removal');
    
    overlayTrigger.classList.add('fast-down');
    overlayTrigger.classList.add('hide');
    overlayBackground.classList.add('translucent');
    overlayBackground.classList.add('home');
    projectDetails.classList.add('solid');
    projectDetails.classList.add('home');
    overlayRemoval.classList.add('translucent');
}

function overlayRemovalActivate(event) {
    const overlayRemoval = event.currentTarget.parentNode;
    const overlayBackground = findSibling(overlayRemoval, '.overlay-background');
    const projectDetails = findSibling(overlayRemoval, '.project-details');
    const overlayTrigger = findSibling(overlayRemoval, '.overlay-trigger');

    overlayTrigger.classList.remove('fast-down');
    overlayTrigger.classList.remove('hide');
    overlayBackground.classList.remove('translucent');
    overlayBackground.classList.remove('home');
    projectDetails.classList.remove('solid');
    projectDetails.classList.remove('home');
    overlayRemoval.classList.remove('translucent');
}

function addEventListeners() {
    overlayTriggerArr.forEach(function(trigger) {
        trigger.addEventListener('click', overlayTriggerActivate);
    })
    removalTabArr.forEach(function(trigger) {
        trigger.addEventListener('click', overlayRemovalActivate);
    })
}

window.addEventListener('load', (event) => {
    addEventListeners();
})