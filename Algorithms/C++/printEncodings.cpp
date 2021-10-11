// printEncodings pepcoding

#include<bits/stdc++.h>
using namespace std;

    // function to print the output
void printEncodings(vector<string> output)
{
	for(int i = 0; i < output.size(); i++)
		cout << (output[i]) << endl;
}

    // get the character for corresponding int
char getChar(int n)
{
	return (char)(n + 96);
}

    // function to get the Encodings from given string
vector<string> getEncodings(string str)
{
        // base case when size of string == 0
	if (str.size() == 0)
	{
		vector<string> ans;
		ans.push_back("");
		return ans;
	}

        // recursive call for considering 1 character
	vector<string> output1 = getEncodings(str.substr(1));

	vector<string> output2(0);

	int firstDigit= (str[0] - '0');
	int firstTwoDigit = 0;
	
	    // recursive call for considering 2 characters
	if (str.size() >= 2)
	{
		firstTwoDigit = (str[0] - '0') * 10 + (str[1] - '0');

		if (firstTwoDigit >= 10 && firstTwoDigit <= 26)
		{
			output2 = getEncodings(str.substr(2));
		}
	}

	vector<string> output(output1.size() + output2.size());

	int k = 0;


        // adding both recursive call values obtained to output vector
        
	for(int i = 0; i < output1.size(); i++)
	{
		char ch = getChar(firstDigit);

		output[i] = ch + output1[i];
		k++;
	}
	
	for(int i = 0; i < output2.size(); i++)
	{
		char ch = getChar(firstTwoDigit);

		output[k] = ch + output2[i];
		k++;
	}

	return output;
}

int main()
{
	string input;
	
	cin >> input ;

	vector<string> output = getEncodings(input);
	
	printEncodings(output);
}