import type { NewBtnClickedCallback, RotateBtnClickedCallback, SubheadData, TextfieldData, TrashBtnClickedCallback, UIManager } from "./ui";

export class HTMLUIManager implements UIManager {
    private new_btn: HTMLButtonElement
    private trash_btn: HTMLButtonElement
    private rotate_btn: HTMLButtonElement

    private textarea: HTMLTextAreaElement

    private subhead: HTMLHeadingElement

    constructor() {
        this.new_btn = document.querySelector(".btn-new") as HTMLButtonElement
        this.trash_btn = document.querySelector(".btn-trash") as HTMLButtonElement
        this.rotate_btn = document.querySelector(".btn-rotate") as HTMLButtonElement

        this.textarea = document.querySelector("textarea") as HTMLTextAreaElement

        this.subhead = document.querySelector("h2") as HTMLHeadingElement
    }

    OnClickNewBtn(callback: NewBtnClickedCallback): void {
        this.new_btn.addEventListener('click', () => {
            const name_or_null = prompt("Name for a new document?")
            if (name_or_null == null) return

            callback(name_or_null)
        })
    }

    OnClickTrashBtn(callback: TrashBtnClickedCallback): void {
        this.trash_btn.addEventListener('click', () => {
            callback()
        })
    }

    OnClickRotateBtn(callback: RotateBtnClickedCallback): void {
        this.rotate_btn.addEventListener('click', () => {
            callback()
        })
    }

    CleanTextfield(): void {
        this.textarea.value = ""
    }

    ReadTextfield(): TextfieldData {
        return this.textarea.value
    }

    ActiveTextfield() {
        this.textarea.disabled = false
    }

    DeactiveTextfield() {
        this.textarea.disabled = true
    }

    UpdateTextfield(data: TextfieldData): void {
        this.textarea.value = data
    }

    ReadSubhead(): SubheadData {
        const text_or_null = this.subhead.textContent

        if (text_or_null === null) {
            return ""
        }

        return text_or_null
    }

    UpdateSubhead(data: SubheadData): void {
        this.subhead.textContent = data
    }
}
