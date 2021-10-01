#include <iostream>
#include <stack>
using namespace std;

int main() {
	long long input ;
	
	cin>> input;
	
	int base ;
	
	cin>> base;
	
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
	return 0;
}
