#include<bits/stdc++.h>
using namespace std;
int main()
{
    int n;
    cout<<"Enter an Integer: \n";
    cin>>n;
    int t=n&(n-1); // checking for the power of 2
    if(t==0&&n)      // it is the power of 2 ensuring that n is not zero 
    {
        cout<<"The number entered is a power of 2\n";
    }
    else        // it is not the power of 2
    {
        cout<<"The number entered is not a power of 2\n";
    }
    return 0;
}
