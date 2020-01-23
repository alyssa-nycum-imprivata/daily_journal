const build = {
    journalEntryFactory(entry){
        return `
        <h3 class="concepts">${entry.concepts}</h3>
        <p class="date">${entry.date}</p>
        <p class="entry">${entry.entry}</p>
        <p class="mood">Mood: ${entry.mood}</p> 
        `
     }
};

// const journalEntryFactory = (entry) => {
//     return `
//     <h3 class="concepts">${entry.concepts}</h3>
//     <p class="date">${entry.date}</p>
//     <p class="entry">${entry.entry}</p>
//     <p class="mood">Mood: ${entry.mood}</p> 
//     `
//  };