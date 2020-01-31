import API from './data.js'
import render from './entriesDOM.js'

API.getEntries().then(render.renderJournalEntries);
