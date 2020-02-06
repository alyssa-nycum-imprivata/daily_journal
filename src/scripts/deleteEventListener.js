import apiManager from "./data.js";
import render from "./entriesDOM.js";

const entryLog = document.querySelector(".results");

// TO DO: Make this function it's own module

const updateEntryFields = entryId => {
    const dateInput = document.getElementById("Date");
    const conceptsInput = document.getElementById("Concepts");
    const entryInput = document.getElementById("Entry");
    const moodInput = document.getElementById("Mood");
    const entryIdInput = document.getElementById("entryId");

    fetch(`http://localhost:8088/journalEntries/${entryId}`)
        .then(resp => resp.json())
        .then(entry => {
            entryIdInput.value = entry.id
            dateInput.value = entry.date
            conceptsInput.value = entry.concepts
            entryInput.value = entry.entry
            moodInput.value = entry.mood
        })
}

// TO DO: Rename this function

const deleteEntryEventListener = () => {
    entryLog.addEventListener("click", (event) => {
        if (event.target.id.startsWith("deleteEntry--")) {
            const entryId = event.target.id.split("--")[1];

            apiManager.deleteJournalEntry(entryId)
                .then(apiManager.getEntries)
                .then(render.renderJournalEntries)
        } else if (event.target.id.startsWith("editEntry--")) {
            const entryIdToEdit = event.target.id.split("--")[1]

            updateEntryFields(entryIdToEdit)
        }
    })
}

export default deleteEntryEventListener;