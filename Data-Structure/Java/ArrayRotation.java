
//array rotation using temporary array and one by one rotation
//Time complexity: O(n*d)
import java.util.Scanner;

class Rotate{
    public void leftRotate(int[] arr, int n, int d){
        for(int i=0; i<d; i++){
            rotateByOne(arr, n);
        }
    }

    public void rotateByOne(int[] arr, int n){
        int temp;
        for(int i=0; i<n-1; i++){
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }

    public void display(int[] arr, int n){
        for(int i=0; i<n; i++){
            System.out.print(arr[i] + " ");
        }
    }
}

public class ArrayRotation {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        Rotate r = new Rotate();

        System.out.print("Enter size of array: ");
        int n = scn.nextInt();
        System.out.println(n);

        int[] arr1 = new int[n];
        System.out.println("Enter array elements");
        for(int i=0; i<n; i++){
            arr1[i] = scn.nextInt();
        }

        System.out.print("Enter rotation value: ");
        int d = scn.nextInt();

        r.leftRotate(arr1, n, d);
        r.display(arr1, n);

    }
}
