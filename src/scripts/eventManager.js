import apiManager from './data.js';
import render from './entriesDOM.js';

const addRecordEntryEventListener = () => {
    const recordEntryButton = document.getElementById("record_entry_button");

    recordEntryButton.addEventListener("click", () => {
        const dateInput = document.getElementById("Date");
        const conceptsInput = document.getElementById("Concepts");
        const entryInput = document.getElementById("Entry");
        const moodInput = document.getElementById("Mood");

        const entry = {
            date: dateInput.value,
            concepts: conceptsInput.value,
            entry: entryInput.value,
            mood: moodInput.value
        };

        apiManager.addJournalEntry(entry)
            .then(() => {
                apiManager.getEntries().then(render.renderJournalEntries)
            })
    })
}

export default addRecordEntryEventListener;