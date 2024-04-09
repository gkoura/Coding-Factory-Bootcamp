package gr.aueb.cf.ch3;


import java.util.Scanner;

/**
 * user inputs 2 integers until numerator is 0
 * program checks if denominator is 0 and if it is prompts again for inputs
 */
public class WhileDivApp {
    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);
        int numerator;
        int denominator;
        int result;

        while (true) {
            System.out.println("Insert numerator and denominator");
            numerator = in.nextInt();
            denominator = in.nextInt();

            if (numerator == 0) {
                System.out.println("Numerator is 0");
                break;
            }

            if (denominator == 0) {
                System.out.println("Denominator cannot be zero");
                continue;
            }

            result = numerator/denominator;

            System.out.println(result);
        }

    }
}
