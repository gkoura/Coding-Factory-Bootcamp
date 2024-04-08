package gr.aueb.cf.ch3;

/**
 * calculates the sum of 10 first numbers
 */
public class Sum10 {
    public static void main(String[] args) {
        int i=1;
        int sum = 0;

        while (i<=10) {
            sum += i;
            i++;
        }

        System.out.println("sum = " + sum);
    }
}
