import type { NoteId } from "./model/note"
import { LocalStorageNoteStore } from "./store/localstorage"
import { HTMLUIManager } from "./ui/html"
import type { SubheadData, TextfieldData } from "./ui/ui"

const ui = new HTMLUIManager()
const store = new LocalStorageNoteStore()

let current_id: NoteId | null = null
let current_name: SubheadData = ui.ReadSubhead()
let current_data: TextfieldData = ui.ReadTextfield()

function SaveCurrentNote() {
    if (current_id !== null && ui.ReadTextfield() != "") {
        store.UpdateNote(current_id, ui.ReadTextfield())
    }
}

function RenderUI() {
    const size = store.ReadNoteCount()

    if (size === 0) {
        ui.UpdateSubhead("No note found")
        ui.DeactiveTextfield()

        console.log("Render UI size is 0")
    } else {
        ui.UpdateSubhead(current_name)

        ui.ActiveTextfield()
        ui.UpdateTextfield(current_data)

        console.log("Render UI size is not 0")
    }
}

RenderUI()

ui.OnClickNewBtn((name) => {
    SaveCurrentNote()

    const current_note = store.CreateNote(name, "")

    current_id = current_note.id
    current_name = current_note.name
    current_data = current_note.data

    RenderUI()
})

ui.OnClickTrashBtn(() => {
    if (current_id !== null) {
        store.DeleteNote(current_id)
    }
    
    if (store.ReadNoteCount() !== 0) {
        const current_note = store.ReadNextNote()

        current_id = current_note.id
        current_name = current_note.name
        current_data = current_note.data
    }

    RenderUI()
})

ui.OnClickRotateBtn(() => {
    SaveCurrentNote()

    const current_note = store.ReadNextNote()

    current_id = current_note.id
    current_name = current_note.name
    current_data = current_note.data

    RenderUI()
})
