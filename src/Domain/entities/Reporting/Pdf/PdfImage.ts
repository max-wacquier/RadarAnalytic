import { PdfElement } from "./PdfElement";

export class PdfImage extends PdfElement {
    
    width: number = 50;
    height: number = 12;
    src: string = "src";
    type : String = "Image";
    
    constructor(x: number, y: number, width: number, height: number, src: string) {
        super(x, y);
        this.width = width;
        this.height = height;
        this.src = src;
    }
}