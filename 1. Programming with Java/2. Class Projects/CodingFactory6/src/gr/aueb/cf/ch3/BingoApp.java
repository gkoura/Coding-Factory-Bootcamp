package gr.aueb.cf.ch3;

import java.util.Scanner;

/**
 * user guesses a secret number
 */
public class BingoApp {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        final int SECRET = 12;
        int num;
        boolean isBingo = false;

        do {
            System.out.println("Insert a num and guess the secret");
            num = in.nextInt();

            if (num == SECRET){
                System.out.println("BINGO");
                isBingo = true;
            }
            else {
                System.out.println("Try again");
            }
        } while (!isBingo);

    }


}
