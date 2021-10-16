#include<stdio.h>
#include<stdlib.h>

struct node
{	int data;
struct node *link;
};

struct node *front=NULL;
struct node *rear=NULL;


void enqueue();
void dequeue();
void size();
void display();
void front_ele();
void rear_ele();


void main()
{ int ch;
	while(1)
	{  printf("\n Operations on Dynamic Queue : \n");
       printf(" 1. Enqueue \n 2. Dequeue \n 3. Size \n 4. Display \n 5.Front_Value \n 6.Rear_Value \n 7.Exit \n");
	   scanf("%d",&ch);
     
		switch(ch)
		{case 1: enqueue();
				break;
		case 2:dequeue();
				break;
		case 3:size();
				break;
		case 4:display();
				break;
		case 5: front_ele();
				break;
		case 6:	rear_ele();
				break;
		case 7:exit(0);
				break;
		default: printf("Invalid choice\n");
			
		}
	
	}
		
}

void enqueue()
{ int ele;
  struct node *ptr;
  ptr=(struct node*)malloc(sizeof(struct node));
  printf("\nEnter Element: ");
  scanf("%d",&ptr->data);
  ptr->link=NULL;
  if(front==NULL && rear==NULL)
  {
	  front=rear=ptr;
  }
  else
  { rear->link=ptr;
    rear=ptr;
  }

}

void dequeue()
{if((front==NULL && rear==NULL) || (front==NULL))
	{
		printf("Queue Underflow\n");
	}
 else
 {struct node *temp;
  temp=front;
  front=front->link;
  temp->link=NULL;
  free(temp);
 }
}

void size()
{ struct node *temp;
  int len=0;
  temp=front;
  while(temp!=NULL)
  {  len++;
	 temp=temp->link;
  }
 printf("\nSize : %d",len);
}

void display()
{int i=0;
if((front==NULL && rear==NULL) || (front==NULL))
{
 printf("Queue is empty\n");	
	
}
else
{ struct node *temp;
  temp=front;
  printf("Elements : ");
  
  while(temp!=NULL)
  {  printf("%d ->",temp->data);
    temp=temp->link;
  }
}
}

void front_ele()
{	if(front==NULL && rear==NULL)
	{
		 printf("Queue is empty\n");
	}
	else
	{
	printf(" Front Element: %d ",front->data);
	}
}

void rear_ele()
{ if(front==NULL && rear==NULL)
	{
		 printf("Queue is empty\n");
	}
	else
	{
	printf(" Rear Element: %d ", rear->data);
	}
	
}
