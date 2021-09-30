/* Program to find factorial of a number
    Author  : Fahad P N
    Roll no.: 330
    date    : 02/09/2021
    Experiment 06
    Problem 1 
*/


#include<stdio.h>

void factorial(int n);
int factorialRecursive(int n);
int main()
{
    int n;
    printf("Enter the number : ");
    scanf("%d",&n);
    factorial(n);
    printf("\nFactorial of %d using recursive method is %d ",n,factorialRecursive(n));
    return 0;
}
void factorial(int n)
{
    int sum=1;
    for(int i=1;i<n+1;i++)
    {
        sum*=i;
    }
    printf("Factorial of %d is %d",n,sum);
}
int factorialRecursive(int n)
{
    if(n<=1)
    {
        return 1;
    }    
    return n*factorialRecursive(n-1);
}