/*By Pratyaksh Khurana*/

#include<bits/stdc++.h>
using namespace std;

void insertionSort(int *arr,int n)
{
  for (int i = 0; i < n-1; i++)
  {
    for (int j = i+1; j > 0; j--)
    {
      if(arr[j] < arr[j-1])
        swap(arr[j],arr[j-1]);

      else 
        break;
    }   
  }
}

int main()
{
  
  //size of array, taking from the user
  int n;
  cin>>n;
  int arr[n];
   
  //inserting elements into the array 
  for (int i = 0; i < n; i++)
    cin>>arr[i];
  
  insertionSort(arr,n);
  
  for (int i = 0; i < n; i++)
    cout<<arr[i]<<" ";

  return 0;
}
