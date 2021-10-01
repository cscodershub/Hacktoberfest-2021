#include<bits/stdc++.h>
using namespace std;
class Solution
{
public:
    char* reverse(char *S,int len){
         stack<char> s;
        int i = 0;        
        while(S[i] != '\0')
        {
            s.push(S[i++]);
        }        
        i = 0;
        while(!s.empty())
        {
            S[i] = s.top();
            s.pop();
            i++;
    }return S;
    }
}asy;
int main(void)
{
    char str[10000];
    cin>>str;
    long long int len = strlen(str);
    char *ch = asy.reverse(str,len);
    cout<<ch;
    cout<<endl;
}