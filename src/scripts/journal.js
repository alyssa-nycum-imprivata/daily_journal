import apiManager from './data.js';
import render from './entriesDOM.js';
import addRecordEntryEventListener from './eventManager.js';

addRecordEntryEventListener();

apiManager.getEntries().then(render.renderJournalEntries);


