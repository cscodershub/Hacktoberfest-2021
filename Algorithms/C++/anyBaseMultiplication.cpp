#include <iostream>
#include <math.h>
#include <stack>
using namespace std;

long long any_to_decimal(long long input , 	int base)
{
    long long answer;
	int power_of_base=0;
	
	while(input>0)
	{
	   int ref = input%10 ;
	   answer += pow(base , power_of_base) * ref ;
	   input /= 10 ;
	   power_of_base++ ;
	}
	
	return answer;
}

 
 
 
void decimal_to_any(long long input , int base)
 {
	stack<int> remainder ;
	
	while(input> 0)
	{
	    remainder.push(input % base);
    	input /= base ;
	}
	
	while(!remainder.empty())
	{
	    cout<<remainder.top();
	    
	    remainder.pop();
	}
	
}

int main() 
{
    long long input1 , input2;
    int base ;
    
    cin >> input1 >> input2 >> base ;
    
    long long decimal1 =  any_to_decimal(input1,base) ;
    long long decimal2 =  any_to_decimal(input2,base) ;
 
    long long answer = decimal1*decimal2;
    
    decimal_to_any(answer,base);
    
    return 0;
}
