#include<stdio.h>
#include<stdlib.h>

struct node
{	int data;
struct node *link;
};
struct node *top=NULL;

void push();
void pop();
void size();
void display();
void top_val();



void main()
{ int ch;
	while(1)
	{  printf("\n Operations on Dynamic Stack:");
       printf("\n 1. Push \n 2. Pop \n 3. Size \n 4. Display \n 5.Top_Value \n 6.Exit\n");
	   scanf("%d",&ch);
     
		switch(ch)
		{case 1: push();
				break;
		case 2:pop();
				break;
		case 3:size();
				break;
		case 4:display();
				break;
		case 5: top_val();
				break;
		case 6:exit(0);
				break;
		default: printf("Invalid choice\n");
			
		}
	
	}
		
}

void push()
{
int ele;
struct node *temp;
temp=(struct node *)malloc(sizeof(struct node));
printf("\n Enter Element :");
scanf("%d",&temp->data);
temp->link=top;
top=temp;
}

void pop()
{struct node *temp;
temp=top;
top=temp->link;
temp->link=NULL;
printf("Popped Value : %d\n",temp->data);
free(temp);
	
}

void size()
{  int count=0;
struct node *temp;
	temp=top;
	while(temp!=NULL)
	{ count++;
	 temp=temp->link;
	}
	printf("Size of Stack:%d \n",count);
}

void display()
{
struct node *temp;
	temp=top;
	printf("Elements :\n");
	while(temp!=NULL)
	{ printf("%d \n",temp->data);
		temp=temp->link;
	}
		
}

void top_val()
{ 
	printf("Top Element : %d \n",top->data);
}

