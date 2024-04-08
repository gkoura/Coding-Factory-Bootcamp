package gr.aueb.cf.ch3;

import java.util.Scanner;

/**
 * keeps reading until a special value (sentinel) is give e.g. -1
 */
public class SentinelApp {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int num;
        int iterations=0;

        System.out.println("Insert a num (0 for exit)");

        while ((num = in.nextInt()) != -1) {
            System.out.println("Insert a num (<0 for exit)");
            iterations++;
        }
        System.out.println("Positives count: " + iterations);

    }
}
