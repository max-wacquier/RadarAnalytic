import { PdfElement } from "./PdfElement";

export class PdfPage {
    content: PdfElement[] = new Array<PdfElement>();
    addElement(element: PdfElement) {
        this.content.push(element);
    }

}