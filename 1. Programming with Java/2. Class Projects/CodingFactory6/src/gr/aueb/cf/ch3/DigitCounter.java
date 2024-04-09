package gr.aueb.cf.ch3;

import java.util.Scanner;

/**
 * calculates number of digits in an integer provided by a user
 */

public class DigitCounter {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int num;
        int copyOfNum;
        int count = 0;
        int sum = 0;
        int rhdigit;

        System.out.println("Insert an integer");
        num = in.nextInt();

        copyOfNum = num;

        do {
            count++;
            rhdigit = copyOfNum % 10;
            sum += rhdigit;
            copyOfNum = copyOfNum /10;
        } while (copyOfNum!=0);

        System.out.println(sum);
        System.out.println(count);
    }

}