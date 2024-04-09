package gr.aueb.cf.ch3;

import java.util.Scanner;

/**
 * user inputs an integer and program prints the absolute value of that integer
 */

public class AbsoluteApp {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int num;
        int abs;

        System.out.println("Insert an integer");
        num = in.nextInt();

        abs = (num < 0) ? num*-1 : num;

        System.out.println(abs);
    }
}
