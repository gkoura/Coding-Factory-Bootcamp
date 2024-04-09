package gr.aueb.cf.ch3;

import java.util.Scanner;

/**
 * the same bingo app with a while...do loop
 */

public class WhileDoBingoApp {
    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);

        final int SECRET = 30;
        int num;

        while (true) {
            System.out.println("Inset number and guess the secret");
            num = in.nextInt();

            if (num == SECRET) {
                System.out.println("BINGO!");
                break;
            }
            System.out.println("Try again!");
        }
    }
}
