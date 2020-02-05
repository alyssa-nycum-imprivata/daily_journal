import apiManager from './data.js';
import render from './entriesDOM.js';
import addRecordEntryEventListener from './recordEventManager.js';
import addFilterMoodEventListener from './recordEventManager.js'

addRecordEntryEventListener();

addFilterMoodEventListener();

apiManager.getEntries().then(render.renderJournalEntries);




