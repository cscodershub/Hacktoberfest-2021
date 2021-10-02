#include <bits/stdc++.h>
using namespace std;
vector<int> vec;
void heapify(int arr[],int n,int idx)
{
	int largest=idx;
	int left=2*idx;
	int right=2*idx+1;
	if(left<=n && arr[left]>arr[idx])						
	{
		largest=left;
	}
	if(right<=n && arr[right]>arr[largest])
	{
		largest=right;
	}
	if(largest!=idx)
	{
		swap(arr[idx],arr[largest]);
		heapify(arr,n,largest);
	}
}
void build_heap(int arr[],int n)
{																//   O(N) COMPLEXITY FOR BUILDING HEAP
	for(int i=n/2;i>=1;i--)
	{
		heapify(arr,n,i);
	}
}
void heapsort(int arr[],int n)
{
	
	for(int i=n;i>1;i--)										// O(nlog(n))
	{
		swap(arr[i],arr[1]);
		heapify(arr,i-1,1);
	}
}
int main()
{
	
	#ifndef ONLINE_JUDGE
		freopen("input.txt","r",stdin);
		freopen("output.txt","w",stdout);
	#endif
ios_base::sync_with_stdio(false); cin.tie(0);cout.tie(0);
int n;
cin>>n;
int arr[n+1];
for(int i=1;i<=n;i++)
{
	cin>>arr[i];
}
build_heap(arr,n);
for(int i=1;i<=n;i++)
{
	cout<<arr[i]<<" ";
}
cout<<endl;
heapsort(arr,n);
for(int i=1;i<=n;i++)
{
	cout<<arr[i]<<" ";
}

return 0;
}