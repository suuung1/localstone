import type { NoteId, NoteName, NoteData, Note, NoteBundle } from "../model/note"

export interface NoteStore {
    CreateNote(name: NoteName, data: NoteData): Note
    ReadNextNote(): Note
    ReadEveryNote(): NoteBundle
    UpdateNote(id: NoteId, data: NoteData): Note
    DeleteNote(id: NoteId): void

    ReadNoteCount(): number
}
