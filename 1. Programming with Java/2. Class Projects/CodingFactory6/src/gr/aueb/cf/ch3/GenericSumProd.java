package gr.aueb.cf.ch3;

import java.util.Scanner;

/**
 * User gives the number of iterations to calculate
 * 1+2+3..
 * 1*2*3..
 */

public class GenericSumProd {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int i = 1;
        int n;
        int sum = 0;
        int prod = 1;

        System.out.println("Insert number of iterations ");
        n = in.nextInt();

        while (i<=n) {
            sum += i;
            prod *= i;
            i++;
        }

        System.out.println("For " +n + " times sum is " + sum + " and product is " + prod);

    }
}
