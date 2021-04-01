import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';
import domtoimage from 'dom-to-image';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    ngOnInit(): void {

    }

  exportAsPdf()
            {
              var n = document.getElementsByTagName('body')!;
              var node = n[0];
              
              var img: HTMLImageElement;
              var newImage: string;
              var filename;

              domtoimage.toPng(node, { bgcolor: '#fff' })
              .then(function(dataUrl: string) {
                  img = new Image();
                  img.src = dataUrl;
                  newImage = img.src;
                  console.log(newImage)

                  // If you want to download page as a pdf Then......
                  
                  // img.onload = function(){
                  //     var pdfWidth = img.width;
                  //     var pdfHeight = img.height;
                  //     var doc;

                  //     if(pdfWidth > pdfHeight)
                  //       {
                  //         doc = new jspdf('l', 'px', [pdfWidth , pdfHeight]);
                  //       }
                  //     else
                  //       {
                  //         doc = new jspdf('p', 'px', [pdfWidth , pdfHeight]);
                  //       }

                  //     var width = doc.internal.pageSize.getWidth();
                  //     var height = doc.internal.pageSize.getHeight();

                  //     doc.addImage(newImage, 'PNG',  10, 10, width, height);
                  //     filename = 'mypdf_' + '.pdf';
                  //     doc.save(filename);
                  // };
              })
            }

}
