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

function selectAll(e) {
    e.select();
}

function resizeUrl2 (url, size) {
    const regex = /https?:\/\/[^\s"')]+/g;
    return `<img src=${url.match(regex)} width=${size}% height=${size}%/><br>`
}

function updateCode() {
    const lines = inputCode.split('\n');
    let result = '';

    for (let line of lines) {
        if (line.includes("![image]") || line.includes("<img src=")) {
            let prefix = line.includes("![image]") ? "![image]" : "<img src=";
            const space = line.indexOf(prefix);

            result += `${' '.repeat(space)}${resizeUrl2(line,size)}\n`
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

