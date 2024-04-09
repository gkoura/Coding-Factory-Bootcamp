package gr.aueb.cf.ch3;

import java.util.Scanner;

/**
 * calculates the factorial of n (1*2*...*n = n!)
 */
public class FactorialApp {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int n;
        System.out.println("Give n");
        n = in.nextInt();

        int result = 1;
        int i = 1;
        while (i<=n) {
            result *= i;
            i++;
        }

        System.out.printf("Factorial of %d is %d", n, result);
    }
}
