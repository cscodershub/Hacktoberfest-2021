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
   we will store the node in the queue and then display remove it
   as queue operates in fitst in first out and then iterating it for the level order traversal 
*/

void levelOrder(Node* root)
{
   queue<Node*> que;
   
   que.push(root);
   
   while(que.size() != 0)
   {
       Node* front = que.front();
       que.pop();
       
       cout<<front->key<<" ";
       
       for(int idx=0;idx<front->child.size();idx++)
       {
          que.push(front->child[idx]);
       }
   }
   cout<<".";
}

int main()
{
    Node* root = takeInput();
    
    levelOrder(root);
    
    return 0;
}

