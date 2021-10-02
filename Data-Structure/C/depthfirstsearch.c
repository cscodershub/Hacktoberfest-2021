#include<stdio.h>
#define N 5
int visited[N];
int adjmatrix[N][N];
void visitdfs(int i)
{
  int j;
  if(!visited[i])
  {
    printf("%d",i);
    visited[i]++;
  }
  for(j=0;j<N;j++)
  {
    if(adjmatrix[i][j]==1&!visited[j])
    {
      visitdfs(j);
    }
  }
}
void main()
{
  int i=0,j=0;
  printf("\nenter adj matrix:");
  for(i=0;i<N;i++)
  {
    for(j=0;j<N;j++)
    {
      scanf("%d",&adjmatrix[i][j]);

    }
    visited[i]=0;
  }
  printf("\nfrom which key u want to start:");
  scanf("%d",&i);
  visitdfs(i);
}
