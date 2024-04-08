package gr.aueb.cf.ch3;

import java.util.Scanner;

public class GenericWhile {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int start;
        int end;
        int step;
        int count;
        int times = 3;
        int j = 1;

        while (j <= times) {

            System.out.println("Insert start, end and step values");
            start = in.nextInt();
            end = in.nextInt();
            step = in.nextInt();
            count = 10;

            while (start <= end) {
                count++;
                start += step;
            }
            System.out.println("counter is " + count);
            j++;
        }
    }
}
