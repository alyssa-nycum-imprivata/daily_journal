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

            apiManager.updateEntryFields(entryIdToEdit)
        }
    })
}

export default deleteOrEditEntryEventListener;