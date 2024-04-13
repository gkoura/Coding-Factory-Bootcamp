package ch3;

import java.util.Scanner;

/**
 * Takes input year from the user and prints if it is a leap year or not
 */

public class LeapYearApp {
    public static void main(String[] args) {
        int year;
        boolean isLeap;

        Scanner in = new Scanner(System.in);

        System.out.println("Insert Year to check if it is a leap one ");
        year = in.nextInt();

        if (year % 400 == 0) {
            isLeap = true;
        }
        else if (year % 4 == 0 && year % 100 != 0) {
            isLeap = true;
        }
        else {
            isLeap = false;
        }

        System.out.printf("The year %d is a leap one: %b", year, isLeap);
    }
}
