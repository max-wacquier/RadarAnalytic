import { PdfElement } from "./PdfElement";

export class PdfText extends PdfElement {
    text: string = "Text";
    width: number = 50;
    height: number = 12;
    alignment?: "center" | "left" | "right" | undefined;
    fontSize: number = 12;
    characterSpacing: number= 0;
    lineHeight: number = 1;
    fontName: string = "Roboto"; 
    type : String = "Text";

    constructor(x: number, y: number, width: number, height: number, alignment: "center" | "left" | "right" | undefined, fontSize: number, characterSpacing: number, lineHeight: number, fontName: string, text: string) {
        super(x, y);
        this.width = width;
        this.height = height;
        this.alignment = alignment;
        this.fontSize = fontSize;
        this.characterSpacing = characterSpacing;
        this.lineHeight = lineHeight;
        this.fontName = fontName;
        this.text = text;
    }

}
