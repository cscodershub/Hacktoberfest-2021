// Contributed By: Anmol Singh yadav (IamLucif3r)
/* Approach for solving the Problem:
1) First of all, create an empty stack.
2) Then we will push all characters of string to stack one by one
3) Now, one by one pop all characters from stack and put 
   them back to string.
This is how our input string will be reversed.
*/
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
