import apiManager from './apiManager.js';
import render from './renderJournalEntries.js';
import recordNewOrUpdatedEntryEventListener from './recordNewOrUpdatedEntryEventListener.js';
import filterByMoodEventListener from './filterByMoodEventListener.js';
import deleteOrEditEntryEventListener from './deleteOrEditEntryEventListener.js';
import searchEntriesEventListener from './searchEntriesEventListener.js';
import renderMoods from './renderMoods.js'

apiManager.getAllEntries().then(render.renderJournalEntries);

apiManager.getMoods().then(renderMoods);

filterByMoodEventListener();

deleteOrEditEntryEventListener();

recordNewOrUpdatedEntryEventListener();

searchEntriesEventListener();













