const journalEntryFactory = (entry) => {
   return `
   <h3 class="concepts">${entry.concepts}</h3>
   <p class="date">${entry.date}</p>
   <p class="entry">${entry.entry}</p>
   <p class="mood">Mood: ${entry.mood}</p> 
   `
};

const renderJournalEntries = (entries) => {
   const container = document.querySelector(".entryLog");
   entries.forEach(entry => {
      const entryHtml = journalEntryFactory(entry);
      container.innerHTML += entryHtml;
   });
};

const getEntries = () => {
   const entryUrl = "http://localhost:8088/journalEntries"
   fetch(entryUrl)
      .then(resp => resp.json())
      .then(entriesFromApi => {
         renderJournalEntries(entriesFromApi);
      });
};

getEntries();