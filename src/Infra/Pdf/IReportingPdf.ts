import { Template } from "@pdfme/generator";
import { PdfDocument } from "../../Domain/entities/Reporting/Pdf/PdfDocument";

export interface IReportingPdf {
    getDocumentFormat(): PdfDocument;
}