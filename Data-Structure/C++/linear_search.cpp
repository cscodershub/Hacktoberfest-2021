//Linear Search
#include<bits/stdc++.h>
using namespace std;

int main(){
	int n,key,flag;
	flag=0;
	cout<<"Enter total no. of elements"<<endl;
	cin>>n;
	int a[n];
	for(auto i=0;i!=n;i++){
		cin>>a[i];
	}
	cout<<"Enter element to be Searched"<<endl;
	cin>>key;
	for(auto i=0;i!=n;i++){
		if(a[i]==key){
			flag=1;
		}	
	}
	if(flag==1){
		cout<<key<<" Found in the Array";
	}else{
		cout<<"404 Not Found";
	}
}
