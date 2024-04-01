package gr.aueb.cf.ch2;

import java.util.Scanner;
public class DateApp {
    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);

        System.out.println("Give day");
        int day = in.nextInt();
        System.out.println("Give month");
        int month = in.nextInt();
        System.out.println("Give year");
        int year = in.nextInt();

        System.out.printf("Date is %d/%d/%d", day, month, year ); //no validation!!
    }
}
