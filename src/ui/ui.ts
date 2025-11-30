import type { NoteName } from "../model/note"

export type NewBtnClickedCallback = (name: NoteName) => void
export type TrashBtnClickedCallback = () => void
export type RotateBtnClickedCallback = () => void

export type TextfieldData = string

export type SubheadData = string

export interface UIManager {
    OnClickNewBtn(callback: NewBtnClickedCallback): void
    OnClickTrashBtn(callback: TrashBtnClickedCallback): void
    OnClickRotateBtn(callback: RotateBtnClickedCallback): void

    CleanTextfield(): void
    ReadTextfield(): TextfieldData
    UpdateTextfield(data: TextfieldData): void
    ActiveTextfield(): void
    DeactiveTextfield(): void

    ReadSubhead(): SubheadData
    UpdateSubhead(data: SubheadData): void
}
