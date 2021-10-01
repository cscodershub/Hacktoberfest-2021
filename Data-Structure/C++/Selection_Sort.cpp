
//By Pratyaksh Khurana
#include <iostream>  
using namespace std;  
  
void selectionSort(int arr[], int n)  
{  
    for (int i = 0; i < n-1; i++) 
    {  
        //minimum element in unsorted array 
        int small = i;  
          
        for (int j = i+1; j < n; j++)  
        if (arr[j] < arr[small])  
            small = j;

        // Swapping of elements
        int temp = arr[small];  
        arr[small] = arr[i];  
        arr[i] = temp;  
    }  
}  
  
  /* function to print the array */ 
void display(int a[], int n)  
{  
    for (int i = 0; i < n; i++)  
        cout<< a[i] <<" ";  
}  
  
int main()  
{  
    int n;
    cin>>n;
    int arr[n];
    for (int i = 0; i < n; i++)
      cin>>arr[i];

    selectionSort(arr, n);

    //after sorting
   display(arr,n);
    return 0;  
}    
