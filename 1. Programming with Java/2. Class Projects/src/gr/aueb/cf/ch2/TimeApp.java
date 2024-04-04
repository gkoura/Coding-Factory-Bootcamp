package gr.aueb.cf.ch2;

import java.util.Scanner;

public class TimeApp {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.println("Give me days");
        int days = in.nextInt();
        System.out.println("Give me hours");
        int hours = in.nextInt();
        System.out.println("Give me minutes");
        int minutes = in.nextInt();
        System.out.println("Give me seconds");
        int seconds = in.nextInt();
        int total = days*86400 + hours*3600 + minutes*60 + seconds;

        System.out.println("Total time in seconds is " + total);
    }
}
