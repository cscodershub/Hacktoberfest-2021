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

    for (int index = 0; index < size; index++)
        cin >> input[index];

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
   first finding the size of each child of a parent and then comparing and printing the max along side with +1 to count the 
   height of parent as well.
*/

int getHeight(Node* root)
{   
    if(root->child.size()==0)
     {
         return 0 ;
     }
    
    int height = 0; 

    for(int idx=0;idx<root->child.size();idx++)
    { 
        Node* currChild = root->child[idx];
        
        int currHeight = getHeight(currChild);

        if(currHeight>height){
         height = currHeight;
        }
    }
    return height+1;
}

int main()
{
    Node* root = takeInput();
    
    cout<<getHeight(root)<<endl;

    return 0;
}
