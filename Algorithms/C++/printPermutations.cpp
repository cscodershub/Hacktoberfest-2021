#include <bits/stdc++.h>
using namespace std;
 
    // function to print all permutations of string str
void printPermutations(string str , string psf)
{
        // base case when str ( or rest ) length becomes equal to 0.
    if(str.length() == 0)
    {
        cout << psf << "\n" ;
        return ;
    }

        // loop to recursively get all possible permutations
    for(int idx = 0 ; idx < str.length() ; idx++)
    {
            // idx element 
        char ch = str[idx];
     
            // left and rght substrings stored in left and right respectively
        string left = str.substr(0 , idx);
        string right = str.substr(idx + 1);
        
            // rest stores every element other than (idx+1)th element
        string rest = left + right ;
        
            // recursive call rest and psf+(idx element) as parameters
        printPermutations(rest , psf+ch);
    }
 
}
 
int main()
{
    string str ;
    
    cin >> str;
 
    printPermutations(str , "");
    
    return 0;
}