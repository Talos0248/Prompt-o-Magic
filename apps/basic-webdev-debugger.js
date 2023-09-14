// Wait for the DOM to fully load before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the form elements
    const issueInput = document.getElementById("issue");
    const htmlInput = document.getElementById("html-input");
    const cssInput = document.getElementById("css-input");
    const jsInput = document.getElementById("js-input");

    const issueClearButton = document.getElementById("clear-issue");
    const htmlClearButton = document.getElementById("clear-html");
    const cssClearButton = document.getElementById("clear-css");
    const jsClearButton = document.getElementById("clear-js");

    const outputTextarea = document.getElementById('output');
    const generateButton = document.getElementById("generate");
    const copyButton = document.getElementById("copy");
    const clearAllButton = document.getElementById("clear-all");

    // Add an event Listener to each "clear" button
    function clear(target) {
        target.value = ""
    }

    issueClearButton.addEventListener("click", () => clear(issueInput));
    htmlClearButton.addEventListener("click", () => clear(htmlInput));
    cssClearButton.addEventListener("click", () => clear(cssInput));
    jsClearButton.addEventListener("click", () => clear(jsInput));

    // Add an event listener to the "Generate" button
    generateButton.addEventListener("click", function () {

        let formattedOutput = ""

        // Create the formatted output
        if (issueInput.value.trim() === "") {
            formattedOutput += "Debug this code.\n\n"
        } else {
            formattedOutput += `Solve the following issues or perform these instructions: \n${issueInput.value} \n\n`
        }

        if (htmlInput.value.trim() !== "") {
            formattedOutput += `Current HTML:\n${htmlInput.value}\n\n`
        }

        if (cssInput.value.trim() !== "") {
            formattedOutput += `Current CSS:\n${cssInput.value}\n\n`
        }

        if (jsInput.value.trim() !== "") {
            formattedOutput += `Current JavaScript:\n${jsInput.value}\n\n`
        }

        // Display the formatted output in the textarea
        outputTextarea.value = formattedOutput;
    });

    // Add an event listener to the "Copy" button
    copyButton.addEventListener("click", function () {
        const outputTextarea = document.getElementById("output");
        outputTextarea.select();
        outputTextarea.setSelectionRange(0, 99999)
        document.execCommand("copy"); // Copy the selected text to the clipboard
        copyButton.textContent = "Copied!"
        setTimeout(function () {
            copyButton.textContent = "Copy"
        }, 1000)
    });

    clearAllButton.addEventListener("click", function () {
        // Set the values of all input elements to an empty string
        issueInput.value = "";
        htmlInput.value = "";
        cssInput.value = "";
        jsInput.value = "";

        // Clear the output textarea
        outputTextarea.value = "";
    });
});
  