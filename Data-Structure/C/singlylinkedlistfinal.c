#include <stdio.h>
#include <stdlib.h>

struct Node
{
	int value;
	struct Node*ptr;
};

struct Node*InsertAtFront(struct Node*H,int val)
{
	struct Node*newNode;
	newNode=(struct Node *)malloc(sizeof(struct Node));
	if(newNode==NULL)
	{
		printf("Malloc failed");
		return H;
	}
	newNode->value=val;
	newNode->ptr=H;
	return newNode;
}

void InsertAtEnd(struct Node *H,int val)
{
	struct Node *newNode,*temp;
	newNode=(struct Node *)malloc(sizeof(struct Node));
	if(newNode == NULL)
	{
        printf("Malloc Failed");
    }
	else
	{
		newNode->value=val;
		newNode->ptr=NULL;
		temp=H;
		while(temp->ptr!=NULL)
		{
			temp=temp->ptr;
		}
		temp->ptr=newNode;
	}
}
struct Node*InsertAfter(struct Node *H,int i,int j)
{
	struct Node *newNode,*temp;
	newNode=(struct Node *)malloc(sizeof(struct Node));
	if(newNode==NULL)
	{
		printf("Malloc Failed");
	}
	else
	{
		newNode->value=i;
		newNode->ptr=NULL;
	}
	temp=H;
	if(temp==NULL)
	{
		printf("There is no node");
	}
	else
	{
		while((temp->ptr)!=NULL&&(temp->value)!=i)
		{
			temp=temp->ptr;
		}
		if(temp->value==i)
		{
			newNode->ptr=temp->ptr;
			temp->ptr=newNode;
			newNode->value=j;
		}
		else
		{
			printf("That value node is not present");
		}
	}
	return H;
}

void *Display(struct Node *H)
{
	while(H!=NULL)
	{
		printf("%d->",H->value);
		H=H->ptr;
	}
	return H;
}

struct Node *DeleteFirst(struct Node *H)
{
	struct Node *NodetoDelete;
	/*Empty List*/
	if(H==NULL)
	{
	printf("Empty list\n");
	return H;
	}
	else
	{
	NodetoDelete=H;
	H=H->ptr;
	free(NodetoDelete);
	return H;
	}
}

struct Node *DeleteEnd(struct Node *H)
{
	struct Node *temp;
	temp=H;
	/*Last Element*/
	while(temp->ptr->ptr!=NULL)
		temp=temp->ptr;
	if(temp->ptr==NULL)
		printf("NOT FOUND");
	else
	{
	free(temp->ptr);
	temp->ptr=NULL;
	}
	return H;
}

struct Node *DeleteAny(struct Node *H,int val)
{
	struct Node *deleteNode,*temp;
	temp=H;
	while(temp->ptr->value!=val)
		temp=temp->ptr;
	if(temp->ptr==NULL)
		printf("NOT FOUND");
	else
	{
	deleteNode=temp->ptr;
	temp->ptr=(temp->ptr)->ptr;
	free(deleteNode);
	}
	return H;
}
struct Node*Reverse(struct Node*H)
{
	struct Node*prev = NULL;
	struct Node*current = H;
	struct Node*ptr = NULL;

	while(current!=NULL)
	{
		ptr = current->ptr;
		current->ptr = prev;
		prev = current;
		current = ptr;
	}
	H=prev;
	return H;
}

void main()
{
int choice,value,i,j;
struct Node *Head;
Head=NULL;
printf("1. Insert At Front \n2. Insert At End \n3. Insert After element \n4. Delete at Front \n5. Delete at End \n6. Delete any element \n7. Display \n 8. Reverse Linked List. \n 9. EXIT ");
do
	{
	printf("\nEnter choice : ");
	scanf("%d",&choice);
	switch(choice)
		{
		case 1:printf("Enter value to insert at front : ");
			scanf("%d",&value);
			Head=InsertAtFront(Head,value);
			break;
		case 2:printf("Enter value to insert at end : ");
			scanf("%d",&value);
			InsertAtEnd(Head,value);
			break;
		case 3:printf("Enter value of Node after which you want to add new Node = ");
			scanf("%d",&i);
			printf("Enter the value of node = ");
			scanf("%d",&j);
			Head=InsertAfter(Head,i,j);
			break;
		case 4:Head=DeleteFirst(Head);
			break;
		case 5:Head=DeleteEnd(Head);
			break;
		case 6:printf("Enter value to be deleted : ");
			scanf("%d",&value);
			Head=DeleteAny(Head,value);
			break;
		case 7: printf("Linked List : ");
			Display(Head);
			break;
		case 8:printf("Reverse linked list = ");
			Head=Reverse(Head);
			Display(Head);
			break;
		case 9:
		    	printf("EXIT");
		}
	}while(choice!=9);
}

/* ""OUTPUT""

1. Insert At Front
2. Insert At End
3. Insert After element
4. Delete at Front
5. Delete at End
6. Delete any element
7. Display
 8. Reverse Linked List.
 9. EXIT
Enter choice : 1
Enter value to insert at front : 10

Enter choice : 2
Enter value to insert at end : 20

Enter choice : 2
Enter value to insert at end : 30

Enter choice : 2
Enter value to insert at end : 40

Enter choice : 2
Enter value to insert at end : 50

Enter choice : 7
Linked List : 10->20->30->40->50->
Enter choice : 3
Enter value of Node after which you want to add new Node = 30
Enter the value of node = 35

Enter choice : 7
Linked List : 10->20->30->35->40->50->
Enter choice : 4

Enter choice : 7
Linked List : 20->30->35->40->50->
Enter choice : 5

Enter choice : 7
Linked List : 20->30->35->40->
Enter choice : 6
Enter value to be deleted : 35

Enter choice : 7
Linked List : 20->30->40->
Enter choice : 8
Reverse linked list = 40->30->20->
Enter choice : 9
EXIT

*/
