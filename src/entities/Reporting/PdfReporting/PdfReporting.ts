import { Template, generate } from "@pdfme/generator";
import * as fs from 'fs';

export class PdfReportingFactory {

      generatePdfReporting(template: Template, inputs: any) {
        generate({ template, inputs }).then((pdf) => {
            fs.writeFileSync('test.pdf', pdf);
          });
          return "yo"
    }
    
}

  