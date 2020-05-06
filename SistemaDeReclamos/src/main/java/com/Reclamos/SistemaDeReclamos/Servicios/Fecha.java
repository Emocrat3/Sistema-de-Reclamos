package com.Reclamos.SistemaDeReclamos.Servicios;

import com.Reclamos.SistemaDeReclamos.DAO.SinConexionException;
import com.Reclamos.SistemaDeReclamos.DAO.extraerFechaTopeDAO;
import com.Reclamos.SistemaDeReclamos.DTO.Reclamos;
import com.Reclamos.SistemaDeReclamos.DTO.Respuesta;

import java.sql.SQLException;

public class Fecha {
    public String obtenerFechaTope(Reclamos reclamos) {
        String s = reclamos.getFecha();
        int n = reclamos.getSLA_reclamo();

        int anno = Integer.parseInt(s.substring(0,4));
        int mes = Integer.parseInt(s.substring(5,7));
        int dia = Integer.parseInt(s.substring(8,10));
        int diaTope = 1;
        int mesTope = mes;
        int annoTope = anno;

        if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
            diaTope = dia + n;
            if (diaTope > 31){
                diaTope = diaTope - 31;
                mesTope++;
                if (mesTope>12){
                    mesTope = mesTope - 12;
                    annoTope++;
                }
            }
        }else if (mes == 4 || mes == 6 || mes == 9 || mes == 11){
            diaTope = dia + n;
            if (diaTope > 30){
                diaTope = diaTope - 30;
                mesTope++;
                if (mesTope>12){
                    mesTope = mesTope - 12;
                    annoTope++;
                }
            }
        }else if(anno%4 == 0 && mes == 2){
            diaTope = dia + n;
            if (diaTope > 29){
                diaTope = diaTope - 29;
                mesTope++;
                if (mesTope>12){
                    mesTope = mesTope - 12;
                    annoTope++;
                }
            }
        }else if(anno%4 != 0 && mes == 2){
            diaTope = dia + n;
            if (diaTope > 28){
                diaTope = diaTope - 28;
                mesTope++;
                if (mesTope>12){
                    mesTope = mesTope - 12;
                    annoTope++;
                }
            }
        }

        if (mesTope == 1 || mesTope == 2 || mesTope == 3 || mesTope == 4 || mesTope == 5 || mesTope == 6 || mesTope == 7
                || mesTope == 8 || mesTope == 9){
            if (diaTope == 1 || diaTope == 2 || diaTope == 3 || diaTope == 4 || diaTope == 5 || diaTope == 6
                    || diaTope == 7 || diaTope == 8 || diaTope == 9){
                return annoTope+"-0"+mesTope+"-0"+diaTope;
            }else {
                return annoTope+"-0"+mesTope+"-"+diaTope;
            }
        } else {
            if (diaTope == 1 || diaTope == 2 || diaTope == 3 || diaTope == 4 || diaTope == 5 || diaTope == 6
                    || diaTope == 7 || diaTope == 8 || diaTope == 9){
                return annoTope+"-"+mesTope+"-0"+diaTope;
            }else {
                return annoTope+"-"+mesTope+"-"+diaTope;
            }
        }
    }

    public String compararFechas(Respuesta respuesta) throws SinConexionException, SQLException {
        long num_reclamo = respuesta.getNum_reclamo();
        String fechaTope = extraerFechaTopeDAO.extrarFechaTope(num_reclamo);
        int annoTope = Integer.parseInt(fechaTope.substring(0,4));
        int mesTope = Integer.parseInt(fechaTope.substring(5,7));
        int diaTope = Integer.parseInt(fechaTope.substring(8,10));

        String fechaRespuesta = respuesta.getFecha_respuesta();
        int annoRespuesta = Integer.parseInt(fechaRespuesta.substring(0,4));
        int mesRespuesta = Integer.parseInt(fechaRespuesta.substring(5,7));
        int diaRespuesta = Integer.parseInt(fechaRespuesta.substring(8,10));

        if (annoRespuesta <= annoTope && mesRespuesta <= mesTope && diaRespuesta <= diaTope ){
            return "Eficiente";
        } else {
            return "Deficiente";
        }
    }
}
