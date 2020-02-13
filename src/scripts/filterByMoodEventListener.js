import apiManager from "./apiManager.js";
import render from "./renderJournalEntries.js";

const filterByMoodEventListener = () => {
    const radioButtons = document.getElementsByName("mood");

    radioButtons.forEach(button => {
        button.addEventListener("click", event => {

            const entryLogContainer = document.querySelector(".entryLog");

            entryLogContainer.innerHTML = "";

            const selectedMood = event.target.value

            apiManager.getAllEntries()
                .then(entries => {
                    const filteredEntires = entries.filter(entry => {
                        if (entry.mood.mood === selectedMood) {
                            return entry
                        }
                    })
                    render.renderJournalEntries(filteredEntires)
                })
        })
    });
    const allEntriesButton = document.querySelector("#all_entries_button");

    const entryLogContainer = document.querySelector(".entryLog");

    entryLogContainer.innerHTML = "";
    
    allEntriesButton.addEventListener("click", () => {
        apiManager.getAllEntries()
            .then(render.renderJournalEntries)
    })

}

export default filterByMoodEventListener;

