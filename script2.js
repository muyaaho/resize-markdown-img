const inputConatainer = document.querySelector('#inputCode');
const sizeContainer = document.querySelector('#inputSize')
const outputConatainer = document.querySelector('#outputCode');
let size = 100;
let inputCode = '';

inputConatainer.addEventListener('input', function(e) {
    inputCode = e.target.value;
    outputConatainer.value = updateCode();
})

sizeContainer.addEventListener('input', (e) => {
    size = e.target.value;
    outputConatainer.value = updateCode();
})

function resizeUrl(url, size) {
    const re = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?[^)]/;

    const result = url.match(re) ? url.match(re)[0] : "";
    return `<img src=${result} width=${size}% height=${size}%/><br>`
}

function updateCode() {
    const lines = inputCode.split('\n');
    let result = '';

    for (let line of lines) {
        if (line.includes("![image]") || lines.includes("<img src=")) {
            let prefix = line.includes("![image]") ? "![image]" : "<img src=";
            const space = line.indexOf(prefix);

            result += `${' '.repeat(space)}${resizeUrl(line,size)}\n`
            continue;
        }
        result += `${line}\n`
    }
    return result;
}

function handleOnInput(element, maxlength) {
    if (element.value.length > maxlength) {
        element.value = element.value.substr(0, maxlength);
    }
}