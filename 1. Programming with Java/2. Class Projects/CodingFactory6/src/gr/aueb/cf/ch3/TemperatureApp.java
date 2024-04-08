package gr.aueb.cf.ch3;

import java.util.Scanner;

/**
 * reads from stdin an integer that represents a temperature and checks if temp is less than t
 * prints the result
 */
public class TemperatureApp {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int temp;
        boolean isTempBelowZero = false;

        System.out.println("Please insert the temperature (integer)");
        temp = in.nextInt();

        isTempBelowZero = temp <0;

        System.out.println("Temp is below 0: " + isTempBelowZero);


    }
}
