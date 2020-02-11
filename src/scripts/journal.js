import apiManager from './apiManager.js';
import render from './renderJournalEntries.js';
import recordNewOrUpdatedEntryEventListener from './recordNewOrUpdatedEntryEventListener.js';
import filterByMoodEventListener from './filterByMoodEventListener.js';
import deleteOrEditEntryEventListener from './deleteOrEditEntryEventListener.js';
import searchEntriesEventListener from './searchEntriesEventListener.js';

filterByMoodEventListener();

deleteOrEditEntryEventListener();

recordNewOrUpdatedEntryEventListener();

searchEntriesEventListener();

apiManager.getAllEntries().then(render.renderJournalEntries);











