import apiManager from "./data.js";
import render from "./entriesDOM.js";

const deleteEntryEventListener = () => {
    const entryList = document.querySelector(".results");
    
    entryList.addEventListener("click", (event) => {
        if (event.target.id.startsWith("deleteEntry--")) {
            const entryId = event.target.id.split("--")[1];

            apiManager.deleteJournalEntry(entryId)
                .then(apiManager.getEntries)
                .then(render.renderJournalEntries)
        }
    })
}

export default deleteEntryEventListener;