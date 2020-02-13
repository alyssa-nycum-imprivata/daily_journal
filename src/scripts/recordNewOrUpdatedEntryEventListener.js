import apiManager from './apiManager.js';
import render from './renderJournalEntries.js';
import clearEntryForm from './clearEntryForm.js'

const recordNewOrUpdatedEntryEventListener = () => {
    const recordEntryButton = document.getElementById("record_entry_button");

    recordEntryButton.addEventListener("click", () => {
        const dateInput = document.getElementById("Date");
        const conceptsInput = document.getElementById("Concepts");
        const entryInput = document.getElementById("Entry");
        const moodInput = document.getElementById("Mood");
        const entryIdInput = document.getElementById("entryId");

        if (dateInput.value.length === 0 || conceptsInput.value.length === 0 || entryInput.value.length === 0 || moodInput.value.length === 0) {
            alert("Please fill out all fields before recording entry");
        } else {
            const entry = {
                "date": dateInput.value,
                "concepts": conceptsInput.value,
                "entry": entryInput.value,
                "moodId": moodInput.value
            };

            if (entryIdInput.value !== "") {
                entry.id = parseInt(entryIdInput.value);
                apiManager.updateJournalEntry(entry)
                    .then(() => {
                        apiManager.getAllEntries()
                            .then(render.renderJournalEntries)
                            .then(clearEntryForm);
                    });
            } else {
                apiManager.recordJournalEntry(entry)
                    .then(() => {
                        apiManager.getAllEntries()
                            .then(render.renderJournalEntries)
                            .then(clearEntryForm);
                    })
            }


        }

    })
}

export default recordNewOrUpdatedEntryEventListener;