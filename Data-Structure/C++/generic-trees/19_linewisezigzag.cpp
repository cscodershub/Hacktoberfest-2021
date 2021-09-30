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
    using a dequeue to print nodes in zigzag way by taking a Bool variable right 
    while in first level we will add elements from back and will display in front 
    vice versa in next level and so on.
*/

void linewiseZigZag(Node* root)
{
    deque<Node*> dequeue;
    
    bool right = true;
    
    Node* eliminator = new Node(-1);

    dequeue.push_back(root);
    dequeue.push_back(eliminator);
    
    while(dequeue.size() > 1)
    {      
        if(right)
        {
            Node* front = dequeue.front();

            //for ending a line after 1 level 
            if(front == eliminator)
            {
                cout<<endl;

                right = !right;
            }

            else
            {
                 //displaying and then removing from front  
                 cout << front->key << " ";
                 dequeue.pop_front();

                for(int idx=0;idx<front->child.size();idx++)
                {
                    dequeue.push_back(front->child[idx]);
                }
            }
        }

        else
        {
            Node* back = dequeue.back();

            if(back == eliminator)
            {
                cout<<endl;

                right = !right;
            }

            else
            { 
               cout << back->key << " ";
               dequeue.pop_back();

               for(int idx=back->child.size()-1;idx>=0;idx--)
               {
                   dequeue.push_front(back->child[idx]);
               }   
            }
        }
    }
}

int main()
{
    Node* root = takeInput();
    
    linewiseZigZag(root);

    return 0;
}
