import apiManager from './data.js'
import render from './entryComponent.js'
import entryManager from './entryManager.js';

apiManager.getEntries().then(render.renderJournalEntries);

entryManager.addSubmitClickEventListener();

