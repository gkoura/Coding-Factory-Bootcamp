package gr.aueb.cf.ch4;

import java.util.Scanner;

/**
 * Demo of reading a char
 */
public class CharReadApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Please insert an ASCII char:");
        char inputChar1 = scanner.next().charAt(0); // Read a single character from the user
        int asciiValue = (int) inputChar1; // Get the ASCII value of the character

        System.out.println("ASCII char: " + inputChar1);
        System.out.println("ASCII value: " + asciiValue);

        System.out.println("Please insert a Unicode char:");
        String inputUnicode = scanner.next(); // Read a Unicode character from the user
        char inputChar2 = inputUnicode.charAt(0); // Extract the first character
        int unicodeValue = (int) inputChar2; // Get the Unicode value of the character

        System.out.println("Unicode char: " + inputChar2);
        System.out.println("Unicode value: " + unicodeValue);
    }
}

