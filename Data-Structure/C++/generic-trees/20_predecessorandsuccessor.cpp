#include<bits/stdc++.h>
using namespace std;

class Node
{
public:
    int key;
    vector<Node *> child;

    Node(int key)
    {
       this->key = key;     
    }
};

Node *takeInput()
{
    int size;

    cin >> size;

    int *input = new int[size];

    for (int index = 0; index < size; index++){
        cin >> input[index];
    }

    Node *root = NULL;

    stack<Node *> nodes;

    for (int index = 0; index < size; index++)
    {
        if (input[index] == -1)
        {
            nodes.pop();
        }

        else
        {
            Node *newNode = new Node(input[index]);

            if (nodes.size() == 0)
            {
                root = newNode;
            }

            else
            {
                nodes.top()->child.push_back(newNode);
            }

            nodes.push(newNode);
        }
    }

    return root; 
}

int breakpoint = 0;
int predecessor = -1;
int successor = -1;

/*
   storing the last node till we found key then storing its next element
   doing this by variable breakpoint.
     if breakpoint -> 0  node->key not found yet 
     if breakpoint -> 1  node->key founded 
     if breakpoint -> 2  successor has also been stored 
*/

void predecessorAndSuccessor(Node* root, int key) 
{
     if(breakpoint == 2){
         return;
     }
     
     if(root == NULL){
         return;
     }
     
     if(breakpoint == 0)
     {
         if(root->key == key)
           breakpoint = 1;
           
         else
          predecessor = root->key;
     }
     
     else{
         successor = root->key;
         breakpoint = 2;
     }
     
     for(int idx=0; idx < root->child.size(); idx++)
     {
         Node* child = root->child[idx];

         predecessorAndSuccessor(child,key);
     }
}

int main()
{
    Node* root = takeInput();
    
    int key;
    
    cin>>key;
    
    predecessorAndSuccessor(root,key);

    if(predecessor != -1){
     cout << "Predecessor = " << predecessor <<endl;
    }
    else{
        cout<<"Predecessor = Not found"<<endl;
    }

    if(successor != -1){
        cout << "Successor = " << successor << endl;
    }
    else{
        cout<<"Successor = Not found"<<endl;
    }

    return 0;
}

