#include<iostream>

using namespace std;

struct Node

{

  int info;

  struct Node *ptr;

};

struct Node *front=NULL;

struct Node *rear=NULL;

void enqueue(int num)

{

  Node *temp=new Node;

  if(temp==NULL)

  {

    cout<<"Overflow."<<endl;

    return;

  }

  temp->info=num;

  temp->ptr=NULL;

  if(front==NULL)

  {

    front=temp;

    rear=temp;

  }

  else

  {

    rear->ptr=temp;

    rear=temp;

  }

  cout<<"Inserted element is: "<<num<<endl;

}

void dequeue()

{

  if(front==NULL)

  {

    cout<<"Underflow."<<endl;

    return;

  }

  cout<<"Deleted element is: "<<front->info<<endl;

  if(front==rear)

    front=rear=NULL;

  else

    front=front->ptr;

}

void display()

{

  if(front==NULL)

  {

    cout<<"Queue is Empty."<<endl;

    return;

  }

  Node *temp=front;

  while(temp)

  {

    cout<<temp->info<<" ";

    temp=temp->ptr;

  }

  cout<<endl;

}

int main()

{

  int ch,n;

  cout<<"\n1. Insertion of element in Queue.";

  cout<<"\n2. Deletion of element from Queue.";

  cout<<"\n3. Display of Queue elements.";

  cout<<"\n4. Exit from the Queue.";

  do

  {

    cout<<"\nEnter your choice. ";

    cin>>ch;

    switch(ch)

    {

      case 1:

         cout<<"\nEnter the element to insert. ";

         cin>>n;

         enqueue(n);

         break;

      case 2:

         dequeue();

         break;

      case 3: 

         display();

         break;

      case 4:

         cout<<"\nEnd of the Program.";

         break;

      default:

          cout<<"\nPlease enter valid choice.";

    }

  }while(ch!=4);

  return 0;

}