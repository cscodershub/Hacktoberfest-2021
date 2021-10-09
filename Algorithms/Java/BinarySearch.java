package com.company;

/*
for binary search to be implemented the array should be sorted either in ascending order or descending order
*/

import java.util.Scanner;  //we need to import java scanner class to take input from the user
class BinarySearch{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);   //this is to take targeted number from the user (input)
        int[] accendingArray = {-18 , -12, -4 , 0 , 2, 3, 4, 15, 16, 18, 22 ,45 , 89};   //this is an accending array in which we are testing our binary search
        int[] descendingArray = {89 , 45 , 22 , 18 , 16 , 15 , 4 , 3 , 2 , 0 , -4 , -12};  //this is an decesnding array in which we are testing out binary search
        int target = scanner.nextInt();                                                                             //this is the targeted number which we will search in array using binary search
        int ansAscending = binarySearchInAscending(accendingArray, target);
        int ansDscending = binarySearchInDescending(descendingArray, target);
        System.out.println(ansAscending);
        System.out.println(ansDscending);
    }

         //returns the index of the array
        public static int binarySearchInAscending(int[] arr ,int target){  //this funtion searches in Ascending array
        int start = 0;
        int end = arr.length- 1;

        while(end >= start){
            int mid = start + (end - start)/2;

            if(target < arr[mid]) {
                    end = mid - 1;
            }else if(target > arr[mid]){
                start = mid + 1;
            }   //ans found
            else return mid;

        }return -1;
    }
   //returns the index of the array
    public static int binarySearchInDescending(int[] arr ,int target){ //this funtion searches in descending array 
        int start = 0;
        int end = arr.length- 1;

        while(end >= start){
            int mid = start + (end - start)/2;

            if(target > arr[mid]) {
                end = mid - 1;
            }else if(target < arr[mid]){
                start = mid + 1;
            }   //ans found
            else return mid;

        }return -1;
    }

}

