package gr.aueb.cf.ch3;

import java.util.Scanner;

/**
 * calculates min using ternary operator
 */
public class TernaryOppApp {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int num1;
        int num2;
        int min = 0;  //has to be initialized coz if the first if...else if...else doesnt run its never initialized
        boolean areEqual = false;

        System.out.println("Insert two integers");
        num1 = in.nextInt();
        num2 = in.nextInt();

        min = (num1 < num2) ? num1 : num2;
//        min = Math.min(num1, num2);

        System.out.printf("The min of (%d, %d) is %d",num1, num2, min );
    }
}
