package gr.aueb.cf.ch3;

import java.util.Scanner;

/**
 * lights of a car are turned on when its raining and its dark at the same time or if its speeding
 * user inputs the 3 above attributes and the program prints if the lights are turned on
 */
public class LightsOnApp {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        boolean isRaining;
        boolean isDark;
        boolean isSpeeding;
        int speed;
        final int MAX_SPEED = 100;
        boolean lightsOn;

        System.out.println("Is it raining?");
        isRaining = in.nextBoolean();

        System.out.println("Is it dark outside");
        isDark =in.nextBoolean();

        System.out.println("Insert the speed of the car");
        speed = in.nextInt();

        isSpeeding = speed >= MAX_SPEED;

        lightsOn = isRaining && (isDark || isSpeeding);

        System.out.println("The lights have turned on: " + lightsOn);
    }
}
