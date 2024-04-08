package gr.aueb.cf;

import java.util.Scanner;

/**
 * reads a temperature (int) from stdin and also a boolean that represents if it rains
 * then decides if its snowing (raining and temp < 0)
 *
 * @author greg
 */
public class SnowingApp {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int temp;
        boolean isRaining;
        boolean isSnowing;

        System.out.println("Please insert if it's raining (boolean)");
        isRaining = in.nextBoolean();

        System.out.println("Please insert outside temperature");
        temp = in.nextInt();

        isSnowing = isRaining && (temp < 0);
        
//        Java by default doesn't check if temp is below 0 if is raining is false.
//        that is why the logical operators are called Short Circuit

        System.out.println("Is snowing: " + isSnowing);
    }
}
