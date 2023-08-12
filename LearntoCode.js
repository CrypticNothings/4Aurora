// Add this to your existing JavaScript code
const runHtmlCodeButton = document.getElementById('runHtmlCode');
const htmlCodeInput = document.getElementById('htmlCode');
const htmlPreview = document.getElementById('htmlPreview');

runHtmlCodeButton.addEventListener('click', runHtmlCode);

function runHtmlCode() {
    const code = htmlCodeInput.value;
    htmlPreview.innerHTML = code;
}

const applyStylesButton = document.getElementById('applyStyles');
const combinedHtmlCodeInput = document.getElementById('combinedHtmlCode');
const cssCodeInput = document.getElementById('cssCode');
const styledPreview = document.getElementById('styledPreview');

applyStylesButton.addEventListener('click', applyStyles);

function applyStyles() {
    const htmlCode = combinedHtmlCodeInput.value;
    const cssCode = `<style>${cssCodeInput.value}</style>`;
    const combinedCode = cssCode + htmlCode;
    styledPreview.srcdoc = combinedCode;
}
