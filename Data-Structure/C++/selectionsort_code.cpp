//SELECTION SORT- find the minimum element in unsorted array and swap it with the element at beginning then resultant array will be sorted and rest the unsorted
//sorting is ordering of elements in ascending/descending order in the array


#include<iostream>
using namespace std;

int main()
{
int n;
cout<<"enter the size of array: ";
cin>>n;
int arr[n];
cout<<"enter the value of array: ";
for(int i=0;i<n;i++)
{
	cin>>arr[i];
	}	
	
	for(int i=0;i<n-1;i++){
		for(int j=i+1;j<n;j++){
			if(arr[j]<arr[i]){
			int temp=arr[j];
			arr[j]=arr[i];
			arr[i]=temp;
			}
		}
	}
	cout<<"sorted array: ";
	for(int i=0;i<n;i++){
		cout<<arr[i]<<endl;
	}
return 0;
}
