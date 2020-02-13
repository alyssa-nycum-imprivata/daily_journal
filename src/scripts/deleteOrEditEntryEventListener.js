import apiManager from "./apiManager.js";
import render from "./renderJournalEntries.js";

const deleteOrEditEntryEventListener = () => {
    const entryLog = document.querySelector(".results");

    entryLog.addEventListener("click", (event) => {
        if (event.target.id.startsWith("deleteEntry--")) {
            const entryId = event.target.id.split("--")[1];

            apiManager.deleteJournalEntry(entryId)
                .then(apiManager.getAllEntries)
                .then(render.renderJournalEntries)
        } else if (event.target.id.startsWith("editEntry--")) {
            const entryIdToEdit = event.target.id.split("--")[1]

            const dateInput = document.getElementById("Date");
            const conceptsInput = document.getElementById("Concepts");
            const entryInput = document.getElementById("Entry");
            const moodInput = document.getElementById("Mood");
            const entryIdInput = document.getElementById("entryId");

            apiManager.updateEntryFields(entryIdToEdit)
                .then(entry => {
                    entryIdInput.value = entry.id
                    dateInput.value = entry.date
                    conceptsInput.value = entry.concepts
                    entryInput.value = entry.entry
                    moodInput.value = entry.mood.id
                })
        }
    })
}

export default deleteOrEditEntryEventListener;