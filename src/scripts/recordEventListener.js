import apiManager from './data.js';
import render from './entriesDOM.js';

const recordEntryEventListener = () => {
    const recordEntryButton = document.getElementById("record_entry_button");

    recordEntryButton.addEventListener("click", () => {
        const dateInput = document.getElementById("Date");
        const conceptsInput = document.getElementById("Concepts");
        const entryInput = document.getElementById("Entry");
        const moodInput = document.getElementById("Mood");

        if (dateInput.value.length === 0 ||conceptsInput.value.length === 0 || entryInput.value.length === 0 || moodInput.value.length === 0) {
            alert("Please fill out all fields before recording entry");
        } else {
            const entry = {
                date: dateInput.value,
                concepts: conceptsInput.value,
                entry: entryInput.value,
                mood: moodInput.value
            };
    
            apiManager.recordJournalEntry(entry)
                .then(() => {
                    apiManager.getEntries().then(render.renderJournalEntries)
                })
        }

    })
}

export default recordEntryEventListener;