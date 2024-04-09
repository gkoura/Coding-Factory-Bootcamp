package gr.aueb.cf.ch3;

import java.util.Scanner;

/**
 * chooses min and max int between two integers given by the users
 */
public class MinMaxApp {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int num1;
        int num2;
        int min = 0;  //has to be initialized coz if the first if...else if...else doesnt run its never initialized
        int max = 0;
        boolean areEqual = false;

        System.out.println("Insert two integers");
        num1 = in.nextInt();
        num2 = in.nextInt();

        if (num1 > num2){
            min = num2;
            max = num1;
        }
        else if (num1 < num2){
            min = num1;
            max = num2;
        }
        else {
            System.out.println("The two numbers are equal");
            areEqual = true;
        }

        if (!areEqual) {
            System.out.println("MIN: " + min);
            System.out.println("Max: " + max);
        }
    }
}
