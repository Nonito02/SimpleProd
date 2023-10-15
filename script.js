const qouteText = document.querySelector(".qoute"),
authorName = document.querySelector(".author .name"),
qouteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");

function randomQoute(){
    qouteBtn.classList.add("loading");
    qouteBtn.innerText = "Loading Qoute. . .";
   fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
    console.log(result)
    qouteText.innerText = result.content;
    authorName.innerText = result.author;
    qouteBtn.innerText = "New Quote";
    qouteBtn.classList.remove("loading");
   });
}


soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(qouteText.innerText);
    speechSynthesis.speak(utterance);
});



copyBtn.addEventListener("click", () => {
    const textToCopy = qouteText.innerText;
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
});



twitterBtn.addEventListener("click", () => {
    const quoteText = qouteText.innerText;
    const author = authorName.innerText;
    const tweetUrl = `https://twitter.com/intent/tweet?text="${quoteText}" - ${author}`;
    window.open(tweetUrl, "_blank");
});


qouteBtn.addEventListener("click", randomQoute);
