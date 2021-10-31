
//Juggling method for array rotation
//Time complexity: O(n)

import java.util.Scanner;

class RotateAdv{

    public void rotateAdv(int[] arr, int n, int d){
        //if d>n
        d=d%n;
        int g = gcd(n, d);
        int temp, i , j, t;

        for(i=0; i<g; i++){
            temp = arr[i];
            j = i;

            while(true){
                t= j+d;
                if(t>=n){
                    t = t-n;
                }
                if(t==i){
                    break;
                }
                arr[j] = arr[t];
                j=t;
            }
            arr[j] = temp;
        }
    }

    public void printArr(int[] arr, int n){
        for(int i=0; i<n; i++){
            System.out.print(arr[i] + " ");
        }
    }

    public int gcd(int n, int d){
        if(d==0){
            return n;
        }
        else
            return gcd(d, n%d);
    }

}

public class AdvanceRotation {
    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        RotateAdv res = new RotateAdv();

        System.out.print("Enter size of array: ");
        int n = scn.nextInt();
        System.out.println(n);

        int[] arr2 = new int[n];
        System.out.println("Enter array elements");
        for(int i=0; i<n; i++){
            arr2[i] = scn.nextInt();
        }

        System.out.print("Enter rotation value: ");
        int d = scn.nextInt();

        res.rotateAdv(arr2, n, d);
        res.printArr(arr2, n);
    }
}
