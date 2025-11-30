export type NewBtnClickedCallback = (name: string) => void
export type TrashBtnClickedCallback = () => void
export type RotateBtnClickedCallback = () => void

export interface UIManager {
    OnClickNewBtn(callback: NewBtnClickedCallback): void
    OnClickTrashBtn(callback: TrashBtnClickedCallback): void
    OnClickRotateBtn(callback: RotateBtnClickedCallback): void

    CleanTextfield(): void
    ReadTextfield(): string
    UpdateTextfield(data: string): void

    UpdateSubhead(data: string): void
}
