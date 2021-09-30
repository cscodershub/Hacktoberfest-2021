#include<stdio.h>
#include<math.h>

int main()
{
    int a,b[10],i=1,s=0,n;
    printf("Enter the number you want to check:\n");
    scanf("%d",&a);
    n=a;
    int nDigits = floor(log10(abs(a))) + 1;
    for(;i<=nDigits;i++)
    {
        b[i]=n%10;
        n=floor(n/10);
        s+=pow(b[i],nDigits);
    }
    if (s==a)
        printf("%d is an armstrong number",a);
    else
        printf("%d is not an armstrong number",a);
    return 0;
}