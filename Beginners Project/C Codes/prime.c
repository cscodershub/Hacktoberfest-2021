/*Program to find largest number
Author: Fahad P N
Roll no.: 330
Date: 09-06-2021
Experiment 02 problem 02 */
#include<stdio.h>
int main()
{
	int i,flag=0,x;
	printf("Enter the number you want to check:\n");
	scanf("%d",&x);
	if(x==1)
		printf(" 1 is not a prime number");
	else
	{	for(i=1;i<(x/2);i++)
			if(x%i==0)
				flag++;
		if(flag>1)
			printf("\n %d is not a prime number",x);
		else
			printf("\n %d is a prime number",x);
	}
	return 0;
}