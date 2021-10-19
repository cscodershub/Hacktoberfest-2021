// A program to check is the entered number is positive or negative or 0

import java.util.Scanner;

public class positive_or_negative {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a Number");
        int number = sc.nextInt();

        if (number > 0) {
            System.out.println("Positive Number");
        } else if (number < 0) {
            System.out.println("Negative Number");
        } else {
            System.out.println("Enter Entered Number is 0");
        }
    }
}
