import apiManager from './apiManager.js';
import render from './renderJournalEntries.js';
import recordNewOrUpdatedEntryEventListener from './recordNewOrUpdatedEntryEventListener.js';
import filterByMoodEventListener from './filterByMoodEventListener.js'
import deleteOrEditEntryEventListener from './deleteOrEditEntryEventListener.js'

filterByMoodEventListener();

deleteOrEditEntryEventListener();

recordNewOrUpdatedEntryEventListener();

apiManager.getAllEntries().then(render.renderJournalEntries);











