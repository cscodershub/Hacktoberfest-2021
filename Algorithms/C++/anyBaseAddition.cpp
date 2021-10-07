#include <iostream>
#include <math.h>
using namespace std;

int main() {
    int input1 , input2 , base , answer = 0;
    
    cin >> input1 >> input2 >> base ;
    
    int power_of_ten=0,carry = 0 ;
 
    while(input1>0 || input2>0 || carry>0)
    {
        int digit1 = input1%10 ;
        int digit2 = input2%10 ;
        int sum= digit1 + digit2 + carry;
        
        if(sum >= base)
        {
            sum -= base ;
            carry = 1 ;
        }
        else carry = 0 ;
        
        answer += sum * pow(10,power_of_ten)  ;
        power_of_ten++ ;
        input1 /= 10;
        input2 /= 10 ;
    }
    
    cout<< answer <<endl;
    
	return 0;
}
