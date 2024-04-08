package gr.aueb.cf.ch3;

import java.util.Scanner;

/**
 * counts natural numbers until a negative is given from the user
 */

public class PositivesCount {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int num;
        int positivesCount=0;

        System.out.println("Insert a num (0 for exit)");

        while ((num = in.nextInt()) >= 0) {
            System.out.println("Insert a num (<0 for exit)");
            positivesCount++;
        }
        System.out.println("Positives count: " + positivesCount);
    }
}
