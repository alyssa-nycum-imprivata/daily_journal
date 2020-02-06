const clearEntryForm = () => {
    const dateInput = document.getElementById("Date");
    const conceptsInput = document.getElementById("Concepts");
    const entryInput = document.getElementById("Entry");
    const moodInput = document.getElementById("Mood");
    const entryIdInput = document.getElementById("entryId");

    entryIdInput.value = "";
    dateInput.value = "";
    conceptsInput.value = "";
    entryInput.value = "";
    moodInput.value = "";
}

export default clearEntryForm;