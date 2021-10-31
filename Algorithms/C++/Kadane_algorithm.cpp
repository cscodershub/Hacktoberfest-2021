#include<bits/stdc++.h>
using namespace std;
int main()
{
	int n;
	cin>>n;
	vector<int>ar(n);
	for(int i =0;i<n;i++){
		cin>>ar[i];
	}
	//used to find the  largest sum of the contigous array
	int ans = ar[0];
	int val = ar[0];
	for(int i =1;i<n;i++){
		val = max(ar[i]+val,ar[i]);
		ans = max(ans,val);
	}
	cout<<ans;


}
