//Binary Search
//Works only if array is Sorted
//Complexity O(Log n)
#include<bits/stdc++.h>
using namespace std;

int main(){
	int n,key,l,r,flag;
	cout<<"Enter total no. of elements"<<endl;
	cin>>n;
    int a[n];
    l=0;
    flag=0;
	r=n;
	for(auto i=0;i!=n;i++){
		cin>>a[i];
	}
	cout<<"Enter element to be Searched"<<endl;
	cin>>key;
	while (l<=r) { 
        int m=l+(r-l)/2; 
  
        if (a[m]==key) 
            flag=1;
            
        if (a[m]<key) 
            l=m+1; 
        else
            r=m-1; 
    }
    
    if(flag==1){
		cout<<key<<" Found in the Array";
	}else{
		cout<<"404 Not Found";
	}
}

