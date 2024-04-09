package gr.aueb.cf.ch3;

import java.util.Scanner;

/**
 * shows a menu with a do while loop
 * do while loop runs at least once
 */
public class MenuApp {
    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);
        int choice;
        do {
            System.out.println("Choose one of the CRUD options below (0 to exit)");
            System.out.println("1. Insert product");
            System.out.println("2. Update product");
            System.out.println("3. Delete product");
            System.out.println("4. Select product");
            choice = in.nextInt();
        } while (choice != 0);
    }
}
