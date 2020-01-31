import API from './data.js'
import render from './entryComponent.js'

API.getEntries().then(render.renderJournalEntries);