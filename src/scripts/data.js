const apiManager = {
    getEntries() {
        const entryUrl = "http://localhost:8088/journalEntries"
        return fetch(entryUrl)
            .then(resp => resp.json())
    },
    saveJournalEntry(newJournalEntry) {
        fetch(entryUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
    }
};

export default apiManager;