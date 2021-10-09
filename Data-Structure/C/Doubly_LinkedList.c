#include<stdio.h>
#include<stdlib.h>

struct node
{ int data;
  struct node *right;
  struct node *left;
};
struct node *head,*current; //current for : Making append O(1)

int len;
void append();
void add_at_beg();
void add_after();
void delete();
int length();
void display();
//void reverse();

void main()
{ int choice;
  while(1)
  { 
      printf("\n\n ****Doubly Linked List Operations****\n1.Append \n2.Insertion_at_Begining \n3.Insertion_After_Certain_position \n4.Deletion \n5.Length \n6.Display \n7.Reverse \n8.Exit \n\n");
      scanf("%d",&choice);
      switch(choice)
      {case 1: append();
                break;
       case 2: add_at_beg();
               break;
        case 3:add_after();
               break;
        case 4: delete();
               break;
        case 5:len=length();
			 printf("\nLength : %d\n",len);
               break;
        case 6: display();
               break;
        /*case 7:reverse();
               break; */
        case 8: exit(0);
        default: printf("Invalid choice\n");        

      }
      
  }

}

void append()
{  struct node *newnode;
   newnode=(struct node*) malloc(sizeof(struct node));
   printf("Enter node Data \n");
   scanf("%d",&newnode->data);
   newnode->right=NULL;
   newnode->left=NULL;
    if(head==NULL)
    {   head=current=newnode;

    }
    else
    {  current->right=newnode;  // O(1)
	   newnode->left=current;
	   current=newnode;
       /* while(ptr->right!=NULL)  //O(n) 
		 { ptr=ptr->right;

        }                         
         ptr->right=temp; 		  //ptr moves to last Node
         temp->left=ptr;
	  */
	}  
}

void add_at_beg()
{  struct node *temp;
   temp=(struct node*) malloc(sizeof(struct node));
   printf("Enter node Data");
   scanf("%d",&temp->data);
   temp->right=NULL;
   temp->left=NULL;
   if(head==NULL)
   { head=temp;
   }
   else
   {   temp->right=head;
       head->left=temp;
	   head=temp;
   }

}

void add_after()
{ struct node *temp,*ptr;
  int pos,count=0;
   temp=(struct node*) malloc(sizeof(struct node));
   printf("Enter node Data \n");
   scanf("%d",&temp->data);
   printf("Enter the position ");
   scanf("%d",&pos);
   temp->right=NULL;
   temp->left=NULL;
   len=length();
    if(pos>len)
   { printf("Invalid position");

   }
   else
   { ptr=head; 
	while(count<pos-1) //current node
   {  ptr=ptr->right;
      count++;
   }
       temp->right=ptr->right;
	   ptr->right->left=temp;
       ptr->right=temp;
	   temp->left=ptr;

   }
}

 void delete()
 {int loc,i=1;
  struct node *p,*temp;
  printf("Enter Location :\t");
  scanf("%d",&loc);
  len=length();
	 if(loc>len)
	 {
		 printf("Invalid position");
	 }
	 else
	 {   p=head;
		 if(loc==1)
		 {  head=p->right;
			head->left=NULL;
			p->right=NULL;
			free(p);
		 }
		 else
		 {
			 while(i<loc-1)    //previous node of loc
			 {p=p->right;
				i++;	 
			 }
			 temp=p->right; // temp (pos node)
			 p->right=temp->right;
			 temp->right->left=p;
			 temp->right=NULL;
			 temp->left=NULL;
			 free(temp);
			 
		 }
		 
	 }
 }

 
 void display()
{ struct node *temp;
  temp=head;
  while(temp!=NULL)
  {
       printf("%d->",temp->data);
       temp=temp->right;

  }
        
}

 int length()
 {len=0; 
  struct node *temp;
  temp=head;
  while(temp!=NULL)
  { len++;
    temp=temp->right;
  }
    return(len);  
 }

/*
 void reverse()
 {   
	 struct node *start,*end;
	 int i,j,k,temp;
	 start=end=head;
	 length();
	 i=0;
	 j=len-1;
	 while(i<j)
	 {  k=0;
		while(k<j)
		{
			end=end->right;
			k++;
		}
		temp=start->data;
		start->data=end->data;
		end->data=temp;
		i++;
		j--;
		start=start->right;
		end=head;
		
	 }
       
 }
*/
