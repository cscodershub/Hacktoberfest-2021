/* Program to find factorial of a number
    Author  : Fahad P N
    Roll no.: 330
    date    : 02/09/2021
    Experiment 06
    Problem 1 
*/


#include<stdio.h>

int factorial(int n);
int main()
{
    int n;
    printf("Enter the number : ");
    scanf("%d",&n);
    printf("Factorial of n is %d",factorial(n));
    return 0;
}
int factorial(int n)
{
    if(n<=1)
    {
        return 1;
    }    
    return n*factorial(n-1);
}