#include <iostream>
#include <math.h>
#include <stack>
using namespace std;

long long any_to_decimal(long long input , 	int base_from)
{
    long long answer;
	int power_of_base=0;
	
	while(input>0)
	{
	   int ref = input%10 ;
	   answer += pow(base_from , power_of_base) * ref ;
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
	    remainder.push(input%base);
	    input/=base ;
	}
	
	while(!remainder.empty())
	{
	    cout<<remainder.top();
	    remainder.pop();
	}
	
}

int main() {
    long long input;
    int base_from,base_to ;
    
    cin>> input >> base_from >> base_to ;
    
    long long decimal =  any_to_decimal(input,base_from) ;
    
    decimal_to_any(decimal,base_to);
    
    return 0;
}
