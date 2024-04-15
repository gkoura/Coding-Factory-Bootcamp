package gr.aueb.cf.ch4;

import java.math.BigInteger;
import java.util.Scanner;

/**
 * calculates a^b
 */
public class BigIntPowerApp {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        BigInteger result = BigInteger.valueOf(1);
        BigInteger base;
        BigInteger power;

        System.out.println("Give base and power");
        base = BigInteger.valueOf(in.nextInt());
        power = BigInteger.valueOf(in.nextInt());

        for (int i = 1; i <= power.intValue(); i++) {
            result = result.multiply(base);
        }
        System.out.println(result);
    }
}
