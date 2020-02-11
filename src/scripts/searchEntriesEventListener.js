import apiManager from "./apiManager.js";
import render from "./renderJournalEntries.js";

const searchEntriesEventListener = () => {
    const searchField = document.getElementById("search_entries");

    searchField.addEventListener("keyup", () => {
        
        const userInput = searchField.value;

        apiManager.getAllEntries()
            .then(entries => {
                filteredEntries = entries.filter(entry => {
                    if (event.keyCode === 13) {
                        for (let entry of Object.values(userInput)) {
                            return entry
                        }
                    }
                })
                render.renderJournalEntries(filteredEntires)
            })
    })
};

export default searchEntriesEventListener;