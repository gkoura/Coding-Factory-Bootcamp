package gr.aueb.cf.ch2;

import java.util.Scanner;

public class EuroToUsConverterApp {
    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);

        int inputEuros;
        final int PARITY = 99;

        //USA cents
        int totalUsaCents, usaCents, usaDollars;
        System.out.println("Please insert an amount (in Euros)");
        inputEuros = in.nextInt();
        totalUsaCents = inputEuros * PARITY;
        usaDollars = totalUsaCents / 100;
        usaCents = totalUsaCents % 100;
        System.out.printf("%d euros = %d usa cents = %d usa dollars & %d usa cents",
                inputEuros, totalUsaCents, usaDollars, usaCents);
    }
}
