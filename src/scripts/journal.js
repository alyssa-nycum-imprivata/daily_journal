import apiManager from './data.js'
import render from './entriesDOM.js'

apiManager.getEntries().then(render.renderJournalEntries);