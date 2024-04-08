package ch2;

import java.util.Scanner;

public class TempConverterApp {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);


        System.out.println("Give temperature in fahrenheit degrees");
        int temp = in.nextInt();
        int celTemp = 5 * (temp-32) / 9;
        System.out.println("The temperature is " + celTemp + " in Celsius degrees");


    }
}
