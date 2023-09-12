// Wait for the DOM to fully load before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    //Get references to form elements
    const subject = document.getElementById("subject");
    const topic = document.getElementById("topic")
    const assignmentType = document.getElementById("assignment-type")
    const academicLevel = document.getElementById("academic-level")
    const format = document.getElementById("format")

    const soloRadio = document.getElementById("solo")
    const groupRadio = document.getElementById("group")
    const groupSize = document.getElementById("group-size")

    const interdiscipllinaryCheckbox = document.getElementById("interdisciplinary-checkbox")
    const discipline = document.getElementById("discipline")

    const rubricCheckbox = document.getElementById("rubric-checkbox")
    const maxScore = document.getElementById("max-score")

    const singleIdea = document.getElementById("single-idea-radio")
    const multipleIdea = document.getElementById("multiple-idea-radio")

    const learningObjectives = document.getElementById("learning-objectives")
    const additionalRequirements = document.getElementById("additional-requirements")

    const outputTextarea = document.getElementById('output');
    const generateButton = document.getElementById("generate");
    const copyButton = document.getElementById("copy");
    const clearAllButton = document.getElementById("clear-all");

    generateButton.addEventListener("click")

});