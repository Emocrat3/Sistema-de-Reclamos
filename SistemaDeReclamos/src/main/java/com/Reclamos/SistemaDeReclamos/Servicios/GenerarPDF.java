package com.Reclamos.SistemaDeReclamos.Servicios;

import com.Reclamos.SistemaDeReclamos.DTO.Respuesta;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.*;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class GenerarPDF {

    public void pdfGenerar(String texto, Respuesta respuesta,String nombre) {

        try
        {
            //Creamos documento indicando el tamaño y margenes
            Document documento=new Document(PageSize.LETTER,20,20,20,20);

            //Creamos el PDF y lo instanceamos para poder escribir sobre el
            PdfWriter.getInstance(documento,
                    new FileOutputStream("Informe reclamo N° #"+respuesta.getNum_reclamo()+".pdf"));

            //Abrimos el documento
            documento.open();
            //titulo
            BaseFont helloHoney = BaseFont.createFont("Fonts/hello honey.otf",BaseFont.WINANSI,BaseFont.EMBEDDED);
            Font fuente = new Font(helloHoney);
            fuente.setStyle(Font.BOLD | Font.UNDERLINE);
            fuente.setSize(48);
            fuente.setColor(new BaseColor(255, 209, 133));
            Paragraph titulo = new Paragraph("Reclamos Dajkym",fuente);
            titulo.setAlignment(Element.ALIGN_CENTER);
            documento.add(titulo);

            //PrimerParrafo
            String primerParrafo = "\n\nSr.(a) "+ nombre+",\n\n" +
                    "Nuestro ejecutivo recibió tu reclamo N° #"+ respuesta.getNum_reclamo()
                    +"\nEn nuestra plataforma y ha sido contestado con éxito.\n" +
                    "\nRespuesta: \n\n";
            Paragraph p1 = new Paragraph(primerParrafo,FontFactory.getFont(FontFactory.TIMES_ROMAN,14,
                    Font.NORMAL,BaseColor.BLACK));
            p1.setAlignment(Element.ALIGN_JUSTIFIED);
            documento.add(p1);

            //Anexamos el texto respuesta
            Paragraph textRespuesta = new Paragraph("'"+texto+"'",
                    FontFactory.getFont(FontFactory.TIMES_ROMAN,12,Font.NORMAL, BaseColor.BLACK));
            textRespuesta.setAlignment(Element.ALIGN_JUSTIFIED);
            textRespuesta.setIndentationLeft(25);
            documento.add(textRespuesta);

            //Post Respuesta
            String despedida = "\n\nEsperamos que la respuesta entregada haya podido solucionar tu inquietud." +
                    "\nDe no ser así o todavía tener dudas al respecto, " +
                    "siempre puedes volver a contactarte con nosotros por nuestra página web.\n\n";
            Paragraph textoDespedida = new Paragraph(despedida,FontFactory.getFont(FontFactory.TIMES_ROMAN,14,
                    Font.NORMAL,BaseColor.BLACK));
            textoDespedida.setAlignment(Element.ALIGN_JUSTIFIED);
            documento.add(textoDespedida);

            String saludo = "Saludos,\n" +
                    "\nEquipo de reclamos Dajkym.";
            Paragraph textoSaludo = new Paragraph(saludo,FontFactory.getFont(FontFactory.TIMES_ROMAN,13,
                    Font.BOLDITALIC,BaseColor.BLACK));
            documento.add(textoSaludo);
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
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
