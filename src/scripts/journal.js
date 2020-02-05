import apiManager from './data.js';
import render from './entriesDOM.js';
import addRecordEntryEventListener from './recordEventManager.js';
import addFilterMoodEventListener from './moodEventListener.js'

addRecordEntryEventListener();

apiManager.getEntries().then(render.renderJournalEntries);

addFilterMoodEventListener();







