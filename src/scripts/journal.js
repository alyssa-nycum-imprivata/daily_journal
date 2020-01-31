import apiManager from './data.js'
import render from './entriesDOM.js'
import entryManager from './entryManager.js';

apiManager.getEntries().then(render.renderJournalEntries);

entryManager.addSubmitClickEventListener();

apiManager.saveJournalEntry();

