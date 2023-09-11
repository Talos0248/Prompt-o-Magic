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
    const jsClearButton = document.getElementById("clear-javascript");

    const generateButton = document.getElementById("generate");
    const copyButton = document.getElementById("copy");

    // Clear Buttons
    function clear(target) {target.value = ""}

    issueClearButton.addEventListener("click", () => clear(issueInput));
    htmlClearButton.addEventListener("click", () => clear(htmlInput));
    cssClearButton.addEventListener("click", () => clear(cssInput));
    jsClearButton.addEventListener("click", () => clear(jsInput));
  
    // Add an event listener to the "Generate" button
    generateButton.addEventListener("click", function () {

    let formattedOutput = ""

        // Get user-entered values
        const issueText = issueInput.value;
        const htmlText = htmlInput.value;
        const cssText = cssInput.value;
        const jsText = jsInput.value;

        // Create the formatted output
        if (issueText == ""){
            formattedOutput += "Debug this code.\n\n"
        } else {
            formattedOutput += `Solve the following issues or perform these instructions: \n${issueText} \n\n`
        }

        if (htmlText != ""){
            formattedOutput += `Current HTML:\n${htmlText}\n\n`
        }

        if (cssText != ""){
            formattedOutput += `Current CSS:\n${cssText}\n\n`
        }

        if (jsText != ""){
            formattedOutput += `Current JavaScript:\n${jsText}\n\n`
        }
    
        // Display the formatted output in the textarea
        const outputTextarea = document.getElementById('output');
        outputTextarea.textContent = formattedOutput;
    });
    
        // Add an event listener to each "Clear" button
        // clearButtons.forEach(function (button) {
        // button.addEventListener('click', function () {
        //     const inputId = button.getAttribute('data-target');
        //     const inputElement = document.getElementById(inputId);
        //     inputElement.value = ''; // Clear the input field
        // });
        // });
  
    // Add an event listener to the "Copy" button
    copyButton.addEventListener('click', function () {
        const outputTextarea = document.getElementById('output');
        outputTextarea.select();
        outputTextarea.setSelectionRange(0, 99999)
        document.execCommand('copy'); // Copy the selected text to the clipboard
        copyButton.textContent = "Copied!"
        setTimeout(function(){copyButton.textContent = "Copy"}, 1000)
    });
  });
  