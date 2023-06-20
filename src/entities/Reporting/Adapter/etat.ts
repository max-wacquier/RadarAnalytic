import { BLANK_PDF, Template } from "@pdfme/generator";
import { IReportingPdf } from "../IReporting";

export class etat implements IReportingPdf {
    template: Template = {
        basePdf: BLANK_PDF,
        schemas: [
          {
            Incidents: {
              type: "text",
              position: {
                x: 77.06,
                y: 132.2
              },
              width: 61.73,
              height: 14.94,
              alignment: "center",
              fontSize: 29,
              characterSpacing: 0,
              lineHeight: 1,
              fontName: "Roboto"
            },
            image: {
              type: "image",
              position: {
                x: 4.5,
                y: 3.97
              },
              width: 47.7,
              height: 65.96
            },
            field3: {
              type: "text",
              position: {
                x: 42.86,
                y: 160.87
              },
              width: 350,
              height: 7,
              alignment: "left",
              fontSize: 13,
              characterSpacing: 0,
              lineHeight: 1,
              fontName: "Roboto"
            }
          }
        ]
    };
} 