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
   comparing the number of child a node has if both are equal
   then the both trees are similar
*/

bool similar(Node* root1,Node* root2)
{
   if(root1->child.size() != root2->child.size()){
       return false;
   }
   
   for(int idx1=0,idx2=0;idx1<root1->child.size() && idx2<root2->child.size();idx1++,idx2++)
   {
       if(!similar(root1->child[idx1],root2->child[idx2])){
           return false;
       }
   }
   return true;
}    

int main()
{
    Node* root1 = takeInput();
    Node* root2 = takeInput();

    if(similar(root1,root2)){
        cout<<"true"<<endl;
    }

    else{
        cout<<"false"<<endl;
    }

    return 0;
}
