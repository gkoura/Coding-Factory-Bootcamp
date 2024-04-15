package gr.aueb.cf.ch4;

import java.util.Scanner;

/**
 * calculates a^b
 */
public class PowerApp {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int result = 1;
        int base;
        int power;

        System.out.println("Give base and power");
        base = in.nextInt();
        power = in.nextInt();

        for (int i = 1; i <= power; i++) {
            result *= base;
        }
        System.out.println(result);
    }
}
