#include<bits/stdc++.h>
using namespace std ;
vector<vector<int> >anagrams(const vector<string> &A) {
    for(int i=0;i<A.size();i++){
        sort(A[i].begin(),A[i].end());
    }
    vector<vector<int> >v;
    unordered_map<int,int> mp;
    for(int i=0;i<A.size();i++){
        if(mp.find(A[i])==mp.end()){
            mp[A[i]]=i;
        }
        else{
            vector<int> s={i+1,mp[A[i]]+1};
            v.push_back(s);
            
        }
    }
    return v;
}

int main()
{
	int mod = 1000000007;
    int n;
    cin>>n;
	vector<string> a;
    for(int i=0;i<n;i++){
        string b; cin>>b;
        a.push_back(b);
    }
    vector<vector<int> > v=anagrams(a);
    for(int i=0;i<v.size();i++){
        for(int j=0;i<v[0].size();j++){
            cout<<v[i][j];
        }
    }
	return 0;
}