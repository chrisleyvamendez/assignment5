
document.getElementById('bgbtn').onclick = function() {
    alert('hello_world')
    document.getElementById('textArea').style.fontSize = '24pt';
}


function toggleStyle(id) {
    let textArea = document.getElementById('textArea');
    
    if(id === 'fancyShmancy') {
        textArea.style.fontWeight = 'bold';
        textArea.style.color = 'blue';
        textArea.style.textDecoration = 'underline';
    } else if (id === 'boringBetty') {
        textArea.style.fontWeight = 'normal';
        textArea.style.color = 'black';
        textArea.style.textDecoration = 'none';
    }
}

document.getElementById('mooBtn').onclick = function() {
    mooFunction()
}


function mooFunction() {
    let textArea = document.getElementById('textArea');
    let sentences = textArea.value.split(".");
    for (let i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].trim().toUpperCase();
        if (sentences[i].endsWith("MOO") === false) {
            let words = sentences[i].split(" ");
            words[words.length - 1] = words[words.length - 1] + "-MOO";
            sentences[i] = words.join(" ");
        }
    }
    textArea.value = sentences.join(". ");
}
