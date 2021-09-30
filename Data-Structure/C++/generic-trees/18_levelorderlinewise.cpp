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
   this time adding the eliminator in the queue
   endl operation when it comes and then adding it into after next level
*/

void linewise(Node* root)
{
    queue<Node*> que;
    
    Node* eliminator = new Node(-1);

    que.push(root);
    que.push(eliminator);

    while(!que.empty())
    {
        Node* front = que.front();
        que.pop();

        if(front == eliminator)
        {
            cout<<endl;
            
            if(!que.empty()){
              que.push(eliminator);
            }
        }

        else
        {
             cout<<front->key<<" ";
            
            for(int idx=0;idx<front->child.size();idx++)
            {
                que.push(front->child[idx]);
            }
        }
    }
}

int main()
{
    Node* root = takeInput();

    linewise(root);

    return 0;
}
