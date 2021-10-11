import java.util.Scanner;

public class largest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter 1st Number: ");
        int n1 = sc.nextInt();
        System.out.println("Enter 2st Number: ");
        int n2 = sc.nextInt();

        // method 1:
        // if (n1 > n2) {
        // System.out.println(n1 + " is greater than " + n2);
        // } else if (n2 > n1) {
        // System.out.println(n2 + " is greater than " + n1);
        // } else {
        // System.out.println("Both the number are equal");
        // }

        // method 2:
        String larger = (n1 > n2) ? n1 + " is greater than " + n2
                : (n2 > n1) ? n2 + " is greater than " + n1 : "Both are equal";
        System.out.println(larger);
    }
}
