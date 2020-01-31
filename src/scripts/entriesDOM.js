import build from './entryComponent.js'

const render = {
    renderJournalEntries(entries) {
        const container = document.querySelector(".entryLog");
        entries.forEach(entry => {
            const entryHtml = build.journalEntryFactory(entry);
            container.innerHTML += entryHtml;
        });
    }
};

export default render;