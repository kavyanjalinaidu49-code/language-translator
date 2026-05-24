async function translateText() {

    let text = document.getElementById("text").value;
    let source = document.getElementById("source").value;
    let target = document.getElementById("target").value;

    let url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${source}|${target}`;

    let response = await fetch(url);

    let data = await response.json();

    document.getElementById("result").innerText =
        data.responseData.translatedText;
}
function copyText() {

    let text = document.getElementById("result").innerText;

    navigator.clipboard.writeText(text);

    alert("Copied!");
}
function speakText(){

    let text = document.getElementById("result").innerText;

    let speech = new SpeechSynthesisUtterance(text);

    speechSynthesis.speak(speech);
}