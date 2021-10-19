// A program to check if the number is prime or not

import java.util.Scanner;

public class prime_or_not {
    public static boolean prime(int number) {
        for (int i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int number;

        System.out.println("Enter a check to check prime or not: ");
        number = sc.nextInt();

        if (prime(number)) {
            System.out.println("The entered number is a prime number");
        } else {
            System.out.println("The Entered number is not a prime number");
        }

        sc.close();
    }
}
