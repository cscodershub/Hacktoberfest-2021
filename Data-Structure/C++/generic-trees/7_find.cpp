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

/*
   if we find the target equal to a node then we will return true/
*/

bool findinTree(Node* root,int target)
{
    if(root->key==target){
        return true;
    }
    
    for(int idx=0;idx<root->child.size();idx++)
    {
        Node* currChild = root->child[idx];

        bool checkcurrChild = findinTree(currChild,target);

        if(checkcurrChild){
            return true;
        } 
    }
    return false;
}

int main()
{
    Node* root = takeInput();

    int target;
    
    cin>>target;

    if(findinTree(root,target)){
        cout<<"true";
    }

    else{
        cout<<"false";
    }

    return 0;
}
