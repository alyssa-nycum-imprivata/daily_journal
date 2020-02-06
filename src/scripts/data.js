const entryUrl = "http://localhost:8088/journalEntries";

const apiManager = {
    getEntries() {
        return fetch(entryUrl)
            .then(resp => resp.json())
    },
    recordJournalEntry(entry) {
        return fetch(entryUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        });
    },
    updateJournalEntry(entry) {
        return fetch(entryUrl + "/" + `${entry.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        });
    },
    deleteJournalEntry(entryId) {
        return fetch(entryUrl + "/" + `${entryId}`, {
            method: "DELETE"
        })
    }
};

export default apiManager;