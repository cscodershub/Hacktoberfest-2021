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
   first printing the pre traversal before iterating through childs 
   then printing edge pre in child traversal and post traversal after call 
   then after the loop printing post traversal 
*/

void prePostTraversal(Node* root)
{
    cout <<"Node Pre "  << root->key << endl;

    for(int idx=0;idx<root->child.size();idx++)
    {
        Node* currChild = root->child[idx];
        
        cout<<"Edge Pre ";
        cout<< root->key << "--" << currChild->key << endl;

        prePostTraversal(currChild);

         cout<<"Edge Post ";
         cout<< root->key << "--" << currChild->key << endl;
    }

     cout << "Node Post " << root->key << endl;
}

int main()
{
    Node* root = takeInput();
    
    prePostTraversal(root);

    return 0;
}
