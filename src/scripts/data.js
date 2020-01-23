const API = {
    getEntries() {
        const entryUrl = "http://localhost:8088/journalEntries"
        return fetch(entryUrl)
            .then(resp => resp.json())
    }
};