const render = {
    renderJournalEntries(entries) {
        const container = document.querySelector(".entryLog");
        entries.forEach(entry => {
            const entryHtml = build.journalEntryFactory(entry);
            container.innerHTML += entryHtml;
        });
    }
};




// const renderJournalEntries = (entries) => {
//     const container = document.querySelector(".entryLog");
//     entries.forEach(entry => {
//        const entryHtml = journalEntryFactory(entry);
//        container.innerHTML += entryHtml;
//     });
//  };