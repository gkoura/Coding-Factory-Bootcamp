package gr.aueb.cf.ch3;

import java.util.Scanner;

/**
 * takes true/false from stdin for the two tankws
 * if both have fuel < 1/4 light goes red
 * if only one has fuel < 1/4 light goes orange
 *
 */

public class TankApp {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        boolean isEmptyTank1;
        boolean isEmptyTank2;
        boolean isRed;
        boolean isOrange;

        System.out.println("Insert if tank 1 is less than quarter");
        isEmptyTank1 = in.nextBoolean();

        System.out.println("Insert if tank 1 is less than quarter");
        isEmptyTank2 = in.nextBoolean();


        isOrange = isEmptyTank1 || isEmptyTank2;

        isRed = isEmptyTank1 && isEmptyTank2;
        isOrange = isEmptyTank1 ^  isEmptyTank2;

//        ^ bitwise operator that represents xor logic

        System.out.println("Light is red: " +isRed);
    }
}
