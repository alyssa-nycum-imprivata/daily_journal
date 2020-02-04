const entryUrl = "http://localhost:8088/journalEntries";

const apiManager = {
    getEntries() {
        return fetch(entryUrl)
            .then(resp => resp.json())
    },
    addJournalEntry(entry) {
        return fetch(entryUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        });
    }
};

export default apiManager;