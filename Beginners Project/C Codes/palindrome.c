/* Program to check palindrome of a string
    Author  : Fahad P N
    Roll no.: 330
    date    : 11/08/2021
    Experiment 05
*/


#include<stdio.h>
#include<string.h>

int main()
{
    char str1[20],str2[20];
    printf("Enter the string to check: ");
    scanf("%s", str1);
    for(int i=0,j=strlen(str1)-1;j>-1 && i<strlen(str1);i++,j--)
    {
        str2[i]=str1[j];
    }
    if(strcmp(str1,str2)==0)
    {
        printf("%s is a palindrome",str1);
    }
    else
    {
        printf("%s is not a palindrome",str1);
    }
    return 0;
}