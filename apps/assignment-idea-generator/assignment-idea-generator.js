// Wait for the DOM to fully load before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    //Get references to form elements
    const subject = document.getElementById("subject");
    const topic = document.getElementById("topic");
    const assignmentType = document.getElementById("assignment-type");
    const academicLevel = document.getElementById("academic-level");
    const format = document.getElementById("format");

    const soloRadio = document.getElementById("solo");
    const groupRadio = document.getElementById("group");
    const groupSize = document.getElementById("group-size");

    const interdisciplinaryCheckbox = document.getElementById("interdisciplinary-checkbox");
    const discipline = document.getElementById("discipline");

    const rubricCheckbox = document.getElementById("rubric-checkbox");
    const maxScore = document.getElementById("max-score");

    const singleIdeaRadio = document.getElementById("single-idea-radio");
    const multipleIdeaRadio = document.getElementById("multiple-idea-radio");

    const learningObjectives = document.getElementById("learning-objectives");
    const additionalRequirements = document.getElementById("additional-requirements");

    const outputTexAarea = document.getElementById('output');
    const generateButton = document.getElementById("generate");
    const copyButton = document.getElementById("copy");
    const clearAllButton = document.getElementById("clear-all");

    // Enaables extra fields when relevant buttons/checkboxes are checked
    groupRadio.addEventListener('change', function () {
        groupSize.disabled = !this.checked;
    });

    soloRadio.addEventListener('change', function () {
        groupSize.disabled = this.checked;
    });

    interdisciplinaryCheckbox.addEventListener('change', function () {
        discipline.disabled = !this.checked;
    });

    rubricCheckbox.addEventListener('change', function () {
        maxScore.disabled = !this.checked;
    });

    generateButton.addEventListener("click", function () {
        let formattedOutput = "";

        formattedOutput += `Generate ${(singleIdeaRadio.checked) ? "a single, detailed assignment idea" : "a list of ideas"}`
        formattedOutput += ` for ${(soloRadio.checked) ? "an individual" : "a group"} assignment`;
        if (groupSize.value.trim() !== "" && groupRadio.checked) formattedOutput += " with a group size of " + groupSize.value
        formattedOutput += ` based on the following criteria:\n\n`;

        if (subject.value.trim() !== "") formattedOutput += `Subject: ${subject.value}\n`;
        if (topic.value.trim() !== "") formattedOutput += `Topic: ${topic.value}\n`;
        if (assignmentType.value.trim() !== "") formattedOutput += `Assignment Type: ${assignmentType.value}\n`;
        if (academicLevel.value.trim() !== "") formattedOutput += `Academic Level: ${academicLevel.value}\n`;
        if (format.value.trim() !== "") formattedOutput += `Format: ${format.value}\n`;
        formattedOutput += "\n"

        if (interdisciplinaryCheckbox.checked) formattedOutput += "The assignment should be interdisciplinary"
        if (discipline.value.trim() !== "") formattedOutput += ` and involve the following discipline(s): ${discipline.value}`
        if(interdisciplinaryCheckbox.checked||discipline.value.trim() !== "") formattedOutput += ".\n\n"

        if (rubricCheckbox.checked) formattedOutput += "Also generate a detailed grading rubric"
        if (maxScore.value.trim() !== "") formattedOutput += ` based on a maximum score of ${maxScore.value}`
        if(rubricCheckbox.checked||maxScore.value.trim()) formattedOutput += ".\n\n"

        if(learningObjectives.value.trim() !== "") formattedOutput +=  `The assignment should help students achieve the following learning objectives:\n${learningObjectives.value}\n\n`
        if(additionalRequirements.value.trim() !== "") formattedOutput += `The following additional requirements should be fulfilled:\n${additionalRequirements.value}\n\n`
        if(learningObjectives.value.trim() !== "" || additionalRequirements.value.trim() !== "") outputTexAarea.value = formattedOutput;   
    });

    // Add an event listener to the "Copy" button
    copyButton.addEventListener("click", function () {
        const outputTextarea = document.getElementById("output");
        outputTextarea.select();
        outputTextarea.setSelectionRange(0, 99999)
        document.execCommand("copy"); // Copy the selected text to the clipboard
        copyButton.textContent = "Copied!"
        setTimeout(function(){copyButton.textContent = "Copy"}, 2000)
    });

        // Add an event listener to the "Clear All" button
    clearAllButton.addEventListener("click", function () {
        // Set the values of all input elements to an empty string
        subject.value = "";
        topic.value = "";
        assignmentType.value = "";
        academicLevel.value = "";
        format.value = "";
        groupSize.value = "";
        discipline.value = "";
        maxScore.value = "";
        learningObjectives.value = "";
        additionalRequirements.value = "";
    
        // Clear the output textarea
        outputTextarea.value = "";
    });

});