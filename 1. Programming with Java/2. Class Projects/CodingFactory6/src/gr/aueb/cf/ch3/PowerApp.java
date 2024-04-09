package gr.aueb.cf.ch3;

import java.util.Scanner;

/**
 * calculates base to the power given by user
 */
public class PowerApp {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int base = 0;
        int power = 0;
        int result = 1;

        System.out.println("Give base and power");
        base = in.nextInt();
        power = in.nextInt();

        int i = 0;
        while (i <= power) {
            result *= base;
            i++;
        }

        System.out.printf("%d to the power of %d is %,d\n",base, power, result);
        System.out.printf("2 ^ 8 = %d", (int) Math.pow(2,8));
    }
}
