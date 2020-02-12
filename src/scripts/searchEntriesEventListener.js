import apiManager from "./apiManager.js";
import render from "./renderJournalEntries.js";

const searchEntriesEventListener = () => {
    const searchField = document.getElementById("search_entries");

    searchField.addEventListener("keyup", event => {
        if (event.keyCode === 13) {
            const entryLogContainer = document.querySelector(".entryLog");

            entryLogContainer.innerHTML = "";

            let userInput = event.target.value

            apiManager.getAllEntries()
                .then(entries => {
                    const searchEntries = entries.filter(entry => {
                        for (const value of Object.values(entry)) {
                            const valueType = typeof value
                            if (valueType === "string" && value.includes(userInput)) {
                                return entry
                            }
                        }
                    })
                    render.renderJournalEntries(searchEntries)

                    searchField.value = "";
                })
        }

    })
};

export default searchEntriesEventListener;




