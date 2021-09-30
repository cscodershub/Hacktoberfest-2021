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

void printTree(Node* root)
{
    cout<<root->key<<" -> ";
    
    for(int idx=0;idx<root->child.size();idx++)
    {
        cout<<root->child[idx]->key<<", ";
    }
    
    cout<<"."<<endl;
    
    for(int idx=0;idx<root->child.size();idx++)
    {
        printTree(root->child[idx]);
    }
}

void mirror(Node* root)
{
   //reaching through every child of a tree and then reversing it  by using stl library 
   for(int idx=0;idx<root->child.size();idx++)
   {
       mirror(root->child[idx]);
   }
   
   reverse(root->child.begin(),root->child.end());
}

int main()
{
    Node* root = takeInput();
    
    printTree(root);
    
    mirror(root);
    
    printTree(root);

    return 0;
}
