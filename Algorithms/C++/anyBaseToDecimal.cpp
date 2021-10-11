#include <iostream>
#include <math.h>
using namespace std;

int main() {
    //any base to decimal program
	long long input ;
	
	cin>> input;
	
	int base, answer = 0 ;
	
	cin>> base;

	int power_of_base=0;
	
	while(input>0)
	{
	   int ref = input%10 ;
	   answer += pow(base,power_of_base) * ref ;
	   input /= 10 ;
	   power_of_base++ ;
	}
    
    cout << answer << endl;
    
	return 0;
}
