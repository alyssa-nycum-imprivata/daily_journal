import apiManager from './data.js'
import render from './entriesDOM.js'
import entryManager from './entryManager.js';

const entryManager = {
    addSubmitClickEventListener() {
        const recordEntryButton = document.querySelector(".button");

        recordEntryButton.addEventListener("click", () => {
            
            const userDateInput = document.getElementById("Date");
            const userConceptsInput = document.getElementById("Concepts");
            const userEntryInput = document.getElementById("Entry");
            const userMoodInput = document.getElementById("Mood");

            const entryArray = [userDateInput.value, userConceptsInput.value, userEntryInput.value, userMoodInput.value];

            




            });
        }
    };

apiManager.getEntries().then(render.renderJournalEntries);

entryManager.addSubmitClickEventListener();


