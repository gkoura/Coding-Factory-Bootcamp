package gr.aueb.cf.ch4;

public class SumForApp {
    public static void main(String[] args) {
        int sum = 0;
        int prod = 1;

        for (int i = 1; i <=10; i++) {
            sum += i;
            prod *= i;
        }

        System.out.println(sum);
        System.out.println(prod);
    }
}
