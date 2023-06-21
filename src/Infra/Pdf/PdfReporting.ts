import { BLANK_PDF, Template, generate } from "@pdfme/generator";
import * as fs from 'fs';
import { PdfDocument } from "../../Domain/entities/Reporting/Pdf/PdfDocument";
import { PdfPage } from "../../Domain/entities/Reporting/Pdf/PdfPage";
import { PdfText } from "../../Domain/entities/Reporting/Pdf/PdfText";

export class PdfMeFactory {

  BasePdf: Template = {
    basePdf: BLANK_PDF,
    schemas: [] = [{}]
  };
  Schema: {[key: string]: {}} = {};
  Inputs: [{[k: string]: string}] = [{}];

  generatePdfMeReporting(document: PdfDocument) {
    // Only one page for the moment
    var page: PdfPage = document.content[0];
    page.content.forEach(element => {
      if (element instanceof PdfText) {
        var textElement = element as PdfText;
        this.createTextElementWithPdfMe(textElement);
      }
    });
    console.log("BasePdf", this.BasePdf); 
    console.log("Inputs", this.Inputs);
  }

  createTextElementWithPdfMe(textElement: PdfText) {
    var value: string = textElement.text;
    this.Inputs[0][value] = value;
    this.BasePdf.schemas[0][value] ={
        type: "text",
        width: textElement.width,
        height: textElement.height,
        position: {
          x: textElement.x,
          y: textElement.y
        },
        alignment: textElement.alignment,
        fontSize: textElement.fontSize,
        characterSpacing: textElement.characterSpacing,
        lineHeight: textElement.lineHeight,
        fontName: textElement.fontName
      }
    }
  
    
  getDocument(){
    this.generatePdfReporting("test.pdf");
  }

  generatePdfReporting( nameOfFile: string) {
    console.log("inputs:", this.Inputs)
    console.log("BasePdf:", this.BasePdf)
    console.log("schemas1:", this.BasePdf.schemas.at(0))
    
   
    var inputs = this.Inputs;
    var template = this.BasePdf;

    generate( { template, inputs }).then((pdf) => {
        fs.writeFileSync(nameOfFile, pdf);
      });
    return nameOfFile
  }

  // {
  //   Incidents: {
  //     type: "text",
  //     position: {
  //       x: 77.06,
  //       y: 132.2
  //     },
  //     width: 61.73,
  //     height: 14.94,
  //     
  //     
  //   },
  //   image: {
  //     type: "image",
  //     position: {
  //       x: 4.5,
  //       y: 3.97
  //     },
  //     width: 47.7,
  //     height: 65.96
  //   },
  //   field3: {
  //     type: "text",
  //     position: {
  //       x: 42.86,
  //       y: 160.87
  //     },
  //     width: 350,
  //     height: 7,
  //     alignment: "left",
  //     fontSize: 13,
  //     characterSpacing: 0,
  //     lineHeight: 1,
  //     fontName: "Roboto"
  //   }
  // }

}
    


