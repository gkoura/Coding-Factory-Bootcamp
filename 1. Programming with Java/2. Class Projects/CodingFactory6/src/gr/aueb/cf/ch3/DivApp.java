package gr.aueb.cf.ch3;

import java.util.Scanner;

/**
 * a simple division
 * division with 0 is prohibited with integers in java.
 * produces arithmetic exception
 */
public class DivApp {
    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);

        int numerator;
        int denominator;
        int result;

        System.out.println("Insert numerator and denominator");
        numerator = in.nextInt();
        denominator = in.nextInt();


        //error conditions
        if (denominator == 0) {
            System.out.println("Error, denominator cannot be zero");
            System.exit(1);
        }

        if (numerator == 0) {
            System.out.println("Numerator is 0");
            System.exit(1);
        }

        result = numerator / denominator;
        System.out.println(result);
    }
}
