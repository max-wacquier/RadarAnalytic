// Autor: Julien GUILET
import { PdfPage } from "./PdfPage";

export class PdfDocument {
    title: string;
    content: PdfPage[] = new Array<PdfPage>();

    constructor(title: string) {
        this.title = title;
    }

    addPage(element: PdfPage) {
        this.content.push(element);
    }

   
}