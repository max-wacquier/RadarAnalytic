import { BLANK_PDF, Template } from "@pdfme/generator";
import { IReportingPdf } from "../../../Pdf/IReportingPdf";
import { PdfDocument } from "../../../../Domain/entities/Reporting/Pdf/PdfDocument";
import { PdfPage } from "../../../../Domain/entities/Reporting/Pdf/PdfPage";
import { PdfText } from "../../../../Domain/entities/Reporting/Pdf/PdfText";
import { PdfImage } from "../../../../Domain/entities/Reporting/Pdf/PdfImage";

export class FrenchEtatIncidentReporting implements IReportingPdf {
    
    getDocumentFormat() {
      var IncidentPdfReport = new PdfDocument("FRENCH_ETAT_INCIDENT_REPORTING.pdf");
      var firstPage = new PdfPage();
      // BOUCHONNAGE DES DONNEES
      firstPage.addElement(new PdfText(77.06, 132.2, 10, 10, "center", 29, 0, 1, "Roboto", "Incidents"));
      firstPage.addElement(new PdfText(50, 50, 10, 10, "left", 29, 0, 1, "Roboto", "yo"));
      firstPage.addElement(new PdfImage(50, 50, 50, 50, "./Caricature-Policier-Collection.jpeg"));
      IncidentPdfReport.addPage(firstPage);
      return IncidentPdfReport;
    }

} 