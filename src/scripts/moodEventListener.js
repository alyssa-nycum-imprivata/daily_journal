import apiManager from "./data.js";
import render from "./entriesDOM.js";

const filterMoodEventListener = () => {
    const radioButtons = document.getElementsByName("mood");

    radioButtons.forEach(button => {
        button.addEventListener("click", event => {

            const entryLogContainer = document.querySelector(".entryLog");

            entryLogContainer.innerHTML = "";

            const selectedMood = event.target.value

            apiManager.getEntries()
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

export default filterMoodEventListener;

