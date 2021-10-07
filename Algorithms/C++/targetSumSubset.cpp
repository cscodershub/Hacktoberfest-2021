#include <iostream>
using namespace std;

    // this function takes arguements as follows :
    // arr -> array
    // arraySize -> size of input array
    // idx -> current Index
    // str -> string to store each possible answer
    // sum -> sum so far
    // targetSum -> input value of target Sum
    
void tss(int arr[], int arraySize, int idx, string str, int sum, int targetSum)
{
    if(idx == arraySize)
    {
        if(sum == targetSum)
        {
            cout << str +".\n" ;
        }
        
        return ;
    }
    
        // taking current Index value
    tss(arr, arraySize, idx+1, str + to_string(arr[idx]) + ", " , sum + arr[idx] , targetSum) ;

        // not taking current Index value
    tss(arr, arraySize, idx+1, str , sum , targetSum) ;

}

int main() 
{
        // taking std input
	int arraySize ;
	
	cin >> arraySize ;
	
	int arr[arraySize] ;
	
	for(int idx = 0 ; idx < arraySize ; idx++)
	    cin >> arr[i] ;
	
	int targetSum ;
	
	cin >> targetSum ;
	
	    // calling function tss()
	tss(arr, arraySize, 0, "", 0, targetSum) ;
    	
	return 0;
}
