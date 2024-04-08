package gr.aueb.cf.ch3;

public class Product10 {
    public static void main(String[] args) {
        int i=1;
        int prod = 1;

        while (i<=10) {
            prod *= i;
            i++;
        }

        System.out.println("Product = " + prod);
    }
}
