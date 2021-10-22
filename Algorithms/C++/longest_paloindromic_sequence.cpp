#include<bits/stdc++.h>
using namespace std ;
int lcs(string a,string b,int m,int n){
    int t[m+1][n+1];
    for(int i=0;i<=m;i++){
        for(int j=0;j<=n;j++){
            if(i==0||j==0)
                t[i][j]=0;
            else if(a[i-1]==b[j-1])
                t[i][j]=t[i-1][j-1]+1;
            else 
                t[i][j]=max(t[i-1][j],t[i][j-1]);
        }
        
    }
    return t[m][n];
}
int solve(string A) {
    int m=A.length();
    string B=A;
    reverse(A.begin(),A.end());
    
    return lcs(A,B,m,m);
}
int main()
{
	int mod = 1000000007;
	string A;
	cin>>A;
	cout<<solve(A);
	return 0;
}