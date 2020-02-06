import build from './entryComponent.js'

const render = {
    renderJournalEntries(entries) {
        const entryLogContainer = document.querySelector(".entryLog");

        const dateInput = document.getElementById("Date");
        const conceptsInput = document.getElementById("Concepts");
        const entryInput = document.getElementById("Entry");
        const moodInput = document.getElementById("Mood");

        dateInput.value = "",
        conceptsInput.value = "",
        entryInput.value = "",
        moodInput.value = "",

        entryLogContainer.innerHTML = "";


        entries.forEach(entry => {
            const entryHtml = build.journalEntryFactory(entry);
            entryLogContainer.innerHTML += entryHtml;
        });
    }
};

export default render;