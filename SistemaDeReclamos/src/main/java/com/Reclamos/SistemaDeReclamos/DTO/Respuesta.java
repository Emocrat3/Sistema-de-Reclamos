package com.Reclamos.SistemaDeReclamos.DTO;

public class Respuesta {
        private long num_reclamo;
        private long rut_admin;
        private String texto_respuesta;
        private String fecha_respuesta;
        private String SLA_respuesta;

        public Respuesta() {
        }

        public Respuesta(long num_reclamo, long rut_admin, String texto_respuesta, String fecha_respuesta, String SLA_respuesta) {
            this.num_reclamo = num_reclamo;
            this.rut_admin = rut_admin;
            this.texto_respuesta = texto_respuesta;
            this.fecha_respuesta = fecha_respuesta;
            this.SLA_respuesta = SLA_respuesta;
        }

        public long getNum_reclamo() {
            return num_reclamo;
        }

        public void setNum_reclamo(long num_reclamo) {
            this.num_reclamo = num_reclamo;
        }

        public long getRut_admin() {
            return rut_admin;
        }

        public void setRut_admin(long rut_admin) {
            this.rut_admin = rut_admin;
        }

        public String getTexto_respuesta() {
            return texto_respuesta;
        }

        public void setTexto_respuesta(String texto_respuesta) {
            this.texto_respuesta = texto_respuesta;
        }

        public String getFecha_respuesta() {
            return fecha_respuesta;
        }

        public void setFecha_respuesta(String fecha_respuesta) {
            this.fecha_respuesta = fecha_respuesta;
        }

        public String getSLA_respuesta() {
            return SLA_respuesta;
        }

        public void setSLA_respuesta(String SLA_respuesta) {
            this.SLA_respuesta = SLA_respuesta;
        }
    }

