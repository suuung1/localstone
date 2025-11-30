export type NoteId = number
export type NoteName = string
export type NoteData = string

export class Note {
    id: NoteId
    name: NoteName
    data: NoteData

    constructor(id: NoteId, name: NoteName, data: NoteData) {
        this.id = id
        this.name = name
        this.data = data
    }
}

export type NoteBundle = Note[]
