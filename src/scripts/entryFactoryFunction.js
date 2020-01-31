const userDateInput = document.getElementById("Date").value;
const userConceptsInput = document.getElementById("Concepts").value;
const userEntryInput = document.getElementById("Entry").value;
const userMoodInput = document.getElementById("Mood").value;

const entryFactoryFunction = (date, concepts, entry, mood) => {
    return {
    "date": date,
    "concepts": concepts,
    "entry": entry,
    "mood": mood
    }
};

const newJournalEntry = entryFactoryFunction(userDateInput, userConceptsInput, userEntryInput, userMoodInput);

fetch("http://localhost:8088/journalEntries", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
});

export default entryFactoryFunction;