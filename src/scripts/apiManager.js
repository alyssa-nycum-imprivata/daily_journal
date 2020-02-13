const entryUrl = "http://localhost:8088/journalEntries";

const expandedUrl = "?_expand=mood";

const moodUrl = "http://localhost:8088/moods"

const apiManager = {
    getAllEntries() {
        return fetch(entryUrl + expandedUrl)
            .then(resp => resp.json())
    },
    getMoods() {
        return fetch(moodUrl)
            .then(resp => resp.json())
    },
    updateEntryFields(entryId) {
        return fetch(entryUrl + "/" + `${entryId}` + expandedUrl)
            .then(resp => resp.json())
    },
    recordJournalEntry(entry) {
        return fetch(entryUrl + expandedUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        });
    },
    updateJournalEntry(entry) {
        return fetch(entryUrl + "/" + `${entry.id}` + expandedUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        });
    },
    deleteJournalEntry(entryId) {
        return fetch(entryUrl + "/" + `${entryId}` + expandedUrl, {
            method: "DELETE"
        })
    }
};

export default apiManager;