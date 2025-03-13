package es.cie.springbootback.negocio;

public class Ordenador {

    private String modelo;
    private String marca;
    private double precio;
    private String numserie;

    public String getMarca() {
        return modelo;
    }

    public void setMarca(String modelo) {
        this.modelo = modelo;
    }

    public String getModelo() {
        return marca;
    }

    public void setModelo(String marca) {
        this.marca = marca;
    }

    public String getNumserie() {
        return numserie;
    }

    public void setNumserie(String numserie) {
        this.numserie = numserie;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    // CONSTRUCTORES
    public Ordenador() {
    }

    public Ordenador(String modelo) {
        this.modelo = modelo;
    }

    public Ordenador(String modelo, String marca, double precio, String numserie) {
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
        this.numserie = numserie;
    }

}
