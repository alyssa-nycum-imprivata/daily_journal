const build = {
    journalEntryFactory(entry) {
        return `
            <section class="renderedEntry entry--${entry.id}">
                <h3 class="concepts">${entry.concepts}</h3>
                <p class="date">${entry.date}</p>
                <p class="entry">${entry.entry}</p>
                <p class="mood">Mood: ${entry.mood}</p> 
                <button id="editEntry--${entry.id}" class="editButton">Edit Entry</button>
                <button id="deleteEntry--${entry.id}" class="deleteButton">Delete Entry</button>
            </section>
            `
    }
};

export default build;