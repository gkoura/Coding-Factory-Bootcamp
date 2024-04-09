package gr.aueb.cf.ch3;


public class SpecialWhileForms {
    public static void main(String[] args) {
        int i = 1;

        while (i<=0) {
            System.out.println("Never gets in");
        }

        while (i<=1) {
            System.out.println("Gets in only once");
            i++;
        }

        while (true) {
            System.out.println("I am eternal");
        }

    }
}
