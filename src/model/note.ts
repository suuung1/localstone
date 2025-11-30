export class Note {
    id: number
    name: string
    data: string

    constructor(id: number, name: string, data: string) {
        this.id = id
        this.name = name
        this.data = data
    }
}

export class NoteBundle {
    notes: Note[]

    constructor(notes: Note[]) {
        this.notes = notes
    }
}
