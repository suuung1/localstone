import { type NoteName, type NoteData, Note, type NoteBundle, type NoteId } from "../model/note";
import type { NoteStore } from "./store"

export class LocalStorageNoteStore implements NoteStore {
    private CreateRandomId() {
        const timestamp = Date.now()
        const suffix = Math.floor(Math.random() * 1000).toString().padStart(3, '0')

        return parseInt(String(timestamp) + String(suffix))
    }

    CreateNote(name: NoteName, data: NoteData): Note {
        const json = JSON.stringify({ name: name, data: data })
        const id = this.CreateRandomId()
        
        localStorage.setItem(id.toString(), json)

        return new Note(id, name, data)
    }

    ReadEveryNote(): NoteBundle {
        const notes = new Array<Note>()
        const size = localStorage.length

        for (let i=0; i<size; i++) {
            const key = localStorage.key(i) as string
            const data = JSON.parse(localStorage.getItem(key) as string)

            const note_id = parseInt(key)
            const note_name = data['name']
            const note_data = data['data']

            notes.push(new Note(note_id, note_name, note_data))
        }

        return notes
    }

    UpdateNote(id: NoteId, data: NoteData): Note {
        const name = JSON.parse(localStorage.getItem(id.toString()) as string)['name']
        const json = JSON.stringify({
            name: name,
            data: data
        })
        
        localStorage.setItem(id.toString(), json)

        return new Note(id, name, data)
    }

    DeleteNote(id: NoteId): void {
        localStorage.removeItem(id.toString())
    }
}