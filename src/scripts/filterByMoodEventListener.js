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
                        if (entry.mood === selectedMood) {
                            return entry
                        }
                    })
                    render.renderJournalEntries(filteredEntires)
                })
        })
    })
}

export default filterByMoodEventListener;

