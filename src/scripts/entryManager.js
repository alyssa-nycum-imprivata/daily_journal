import apiManager from "./data.js";
import render from "./entriesDOM.js";

const entryManager = {
    addSubmitClickEventListener() {
        const submitButton = document.querySelector(".button");

        submitButton.addEventListener("click", () => {
            const completeEntry = [];

            const allInputfields = document.querySelectorAll(".field")

            for (let i = 0; i < allInputfields.length; i++) {
                completeEntry.push(allInputfields[i].value);
            }

            const submitEntryPromise = apiManager.getEntries(completeEntry);

            submitEntryPromise.then(entries => {
                render.renderJournalEntries(entries);
            });
        });
    }
};

export default entryManager;