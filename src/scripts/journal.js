import apiManager from './data.js'
import render from './entriesDOM'
import entryManager from './entryManager.js';

apiManager.getEntries().then(render.renderJournalEntries);

entryManager.addSubmitClickEventListener();

