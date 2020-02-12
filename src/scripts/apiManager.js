const entryUrl = "http://localhost:8088/journalEntries";

const expandedUrl = "?_expand=mood";

const moodUrl = "http://localhost:8088/moods"

const dateInput = document.getElementById("Date");
const conceptsInput = document.getElementById("Concepts");
const entryInput = document.getElementById("Entry");
const moodInput = document.getElementById("Mood");
const entryIdInput = document.getElementById("entryId");

const apiManager = {
    getAllEntries() {
        return fetch(entryUrl + expandedUrl)
            .then(resp => resp.json())
    },
    updateEntryFields(entryId) {
        fetch(entryUrl + "/" + `${entryId}` + expandedUrl)
            .then(resp => resp.json())
            .then(entry => {
                entryIdInput.value = entry.id
                dateInput.value = entry.date
                conceptsInput.value = entry.concepts
                entryInput.value = entry.entry
                moodInput.value = entry.mood
            })
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
    },
    createMoodHtml(id, mood) {
        return fetch(moodUrl)
            .then(resp => resp.json())
            .then(mood => {
                
            })
    }
};

export default apiManager;