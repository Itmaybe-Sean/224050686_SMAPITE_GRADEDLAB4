document.getElementById("Execute").addEventListener("click", function () {
    
    let sentence = document.getElementById("sentence").value;

    // Removes any special characters and keeps letters, numbers, and spaces only
    let cleanSentence = sentence.replace(/[^a-zA-Z0-9 ]/g, "");

    // Removes the spaces at the start and end of the sentence
    let cleanedSentence = cleanSentence.trim();

    let words = [];

    // Only split if the sentence is not null or empty after cleaning
    if (cleanSentence !== "") {
        words = cleanSentence.split(" ");
    }

    // Removes extra empty spaces between words
    let finalWords = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            finalWords.push(words[i]);
        }
    }

    // Show the number of words in the Sent-Count textbox
    document.getElementById("sent-count").value = finalWords.length;


    let wordsDiv = document.getElementById("words");

    // deletes the last input for a new word count
    wordsDiv.innerHTML = "";

    // Display each word one by one
    for (let i = 0; i < finalWords.length; i++) {
        let span = document.createElement("span");
        span.textContent = finalWords[i];
        span.style.textDecoration = "underline";
        span.style.marginRight = "10px";

        wordsDiv.appendChild(span);
    }
});
