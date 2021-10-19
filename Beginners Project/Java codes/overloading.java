// A overloading program is a code that has more than one function with the same name but different parameters or parameter types

public class overloading {
    // AREA OF A CIRCLE
    public void area(int radius) {
        double area_is = Math.PI * Math.pow(radius, 2);
        // or
        // double area = 3.142 * r * r;
        System.out.println("Area Of the Circle is: " + area_is);
    }

    public void area(int length, int breadth) {
        // AREA OF A RECTANGLE
        double area_is = length * breadth;
        System.out.println("Area of the Reactangle is: " + area_is);
    }

    public void area(int base, double height) {
        // AREA OF A TRIANGLE
        double area_is = 0.5 * base * height;
        System.out.println("Area of the triangle is: " + area_is);
    }

    public static void main(String[] args) {
        overloading obj = new overloading(); // creating an object to access the class functions
        obj.area(20);
        obj.area(10, 20);
        obj.area(20, 2.5);
    }
}
