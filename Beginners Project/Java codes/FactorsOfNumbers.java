import java.util.Scanner;

public class FactorsOfNumbers {
    public static void main(String[] args) {

        System.out.println("Enter a Number:");

        Scanner scanner=new Scanner(System.in);
        int num=scanner.nextInt();

        if(num>=1){
            System.out.print("Factors of "+num+" are ");
            for(int i=1;i<=num;i++){
                if(num%i==0){

                    System.out.print(i+" ");
                }

            }
        }
        else{
            System.out.println("Zero or nagative numbers are not allowed");
        }


    }
}