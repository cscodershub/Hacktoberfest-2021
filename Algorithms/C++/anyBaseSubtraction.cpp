#include <iostream>
#include <math.h>
using namespace std;

int main() {
    int input1 , input2 , base , answer = 0;
    
    cin>> input1 >> input2 >> base ;
    
    //input1 should be smaller than input2
    
    int diff , power_of_ten=0 , borrow = 0 ;
 
    while(input2>0)
    {
        int digit1 = input1%10 ;
        int digit2 = input2%10 ;
        digit2 -=  borrow;
        
        if(digit2 >= digit1)
        {
            borrow = 0 ; 
            diff = digit2 - digit1;
        }
        else                                //adding base value to borrowed  values
        {
            borrow = 1 ;
            diff = digit2 - digit1 + base;
        }
        answer += diff * pow(10,power_of_ten)  ;        //processing final result
        
        power_of_ten++ ;
        input1 /= 10;
        input2 /= 10 ;
    }
    
    cout<< answer ;
    
	return 0;
}
