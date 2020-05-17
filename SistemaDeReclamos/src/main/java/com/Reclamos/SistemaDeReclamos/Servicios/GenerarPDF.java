package com.Reclamos.SistemaDeReclamos.Servicios;

import com.Reclamos.SistemaDeReclamos.DTO.Respuesta;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.*;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;

public class GenerarPDF {

    public void pdfGenerar(String texto, Respuesta respuesta)
    {
        try
        {
            //Creamos documento indicando el tamaño y margenes
            Document documento=new Document(PageSize.LETTER,20,20,20,20);

            //Creamos el PDF y lo instanceamos para poder escribir sobre el
            PdfWriter.getInstance(documento, new FileOutputStream("Informe reclamo N° #"+respuesta.getNum_reclamo()+".pdf"));

            //Abrimos el documento
            documento.open();

            //Anexamos el texto a un objeto Pharagraph
            Paragraph parametro=new Paragraph(texto.toString(),FontFactory.getFont(FontFactory.TIMES_ROMAN,12,Font.BOLD, BaseColor.BLACK));

            //Escribimos sobre el
            documento.add(parametro);

            //Cerrar documento
            documento.close();

        }
        catch(FileNotFoundException fe)
        {
            System.out.println("Error...");
        }
        catch(DocumentException de)
        {
            System.out.println("Error...");
        }

    }
}
