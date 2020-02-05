import apiManager from './data.js';
import render from './entriesDOM.js';
import recordEntryEventListener from './recordEventListener.js';
import filterMoodEventListener from './moodEventListener.js'
import deleteEntryEventListener from './deleteEventListener.js'

recordEntryEventListener();

apiManager.getEntries().then(render.renderJournalEntries);

filterMoodEventListener();

deleteEntryEventListener();









