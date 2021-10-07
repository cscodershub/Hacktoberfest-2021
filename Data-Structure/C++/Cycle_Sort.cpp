//Cycle sort is an algorithm which force the array to divide into fragments and where each fragment can be rotated in order to get a sorted array.
//It is widely used algorithm in programming.

//Time complexity - O(n*n) (i.e n is size of array or list of elements)

/*By Pratyaksh Khurana*/

#include<bits/stdc++.h>
using namespace std;

void cycleSort(int *arr,int n)
{
  int i = 0;
  while(i < n)
  {
    int crr = arr[i] - 1;
    if(arr[i] != arr[crr])
      swap(arr[i],arr[crr]);
    else 
     i++;  
  }
}

int main()
{
  //size of the array
  int n;
  cin>>n;
  int arr[n];
  
  //insert elements into the array
  for (int i = 0; i < n; i++)
    cin>>arr[i];

  cycleSort(arr,n);
  
  //after sorting 
  for (int i = 0; i < n; i++)
    cout<<arr[i]<<" ";

  return 0;
}






















