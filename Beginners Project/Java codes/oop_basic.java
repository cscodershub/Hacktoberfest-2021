// A program to Accept an Employee Details and Display it

import java.util.Scanner;

public class oop_basic {
    String name, address;
    int id;
    long phone;
    double salary;

    public void accept() {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter Employee ID: ");
        id = sc.nextInt();
        System.out.println("Enter Employee Name: ");
        name = sc.next();
        System.out.println("Enter Employee Address: ");
        address = sc.next();
        System.out.println("Enter Employee Phone Number: ");
        phone = sc.nextLong();
        System.out.println("Enter Employee Salary: ");
        salary = sc.nextDouble();

        sc.close();
    }

    public void display() {
        System.out.println();
        System.out.println("----Employee Details----");
        System.out.println("Employee ID: " + id);
        System.out.println("Employee Name: " + name);
        System.out.println("Employee Address: " + address);
        System.out.println("Employee Phone: " + phone);
        System.out.println("Employee Salary: " + salary);
    }

    public static void main(String[] args) {
        oop_basic obj = new oop_basic();
        obj.accept();
        obj.display();
    }
}
