package ch3;

import java.util.Scanner;

public class MenuAppV2 {
    public static void main(String[] args) {
        int choice;

        Scanner in = new Scanner(System.in);

        do {
            System.out.println("Choose an option");
            choice = in.nextInt();

            if (choice <1 || choice >5) {
                System.out.println("Please select a number between 1-4 or 5 for exit");
            }
            else if (choice == 1) {
                System.out.println("Insert");
            }

            else if (choice == 2) {
                System.out.println("Delete");
            }
            else if (choice == 3) {
                System.out.println("Update");
            }
            else if (choice == 4) {
                System.out.println("Search");
            }
            else {
                System.out.println("Exit");
            }
        }
        while (choice != 5);
    }
}
