import { HTMLUIManager } from "./ui/html"

const ui = new HTMLUIManager()

ui.OnClickNewBtn((name) => console.log("OnClickNewBtn", name))
ui.OnClickTrashBtn(() => console.log("OnClickTrashBtn"))
ui.OnClickRotateBtn(() => console.log("OnClickRotateBtn"))

ui.UpdateSubhead(new Date().toISOString())

ui.UpdateTextfield(new Date().toISOString())

console.log("Hello World")
