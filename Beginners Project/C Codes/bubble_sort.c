/* Program to sort an array using bubble sort technique
    Author  : Fahad P N
    Roll no.: 330
    date    : 03/08/2021
    Experiment 00 
*/


#include <stdio.h>

int main()
{
    int i,j,n,temp,a[20];
    printf("How many numbers do you need in array? : ");
    scanf("%d",&n);
    printf("Enter the elements : \n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }

    for(i=0;i<n;i++)
    {
        for(j=0;j<n-1-i;j++)
        {
            if (a[j]>a[j+1])
            {
                temp = a[j+1];
                a[j+1] = a[j];
                a[j] = temp;
            }
        }
    }
    
    printf("The sorted array is : [");
    for(i=0;i<n;i++)
    {
        printf(" %d",a[i]);
    }
    printf("]");
    return 0;
}