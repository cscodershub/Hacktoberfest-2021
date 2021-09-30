#include<bits/stdc++.h>
using namespace std;

class Node
{
    public:
        int key;
        vector<Node *> child;

        Node(int key){
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

int main()
{
    Node* root = takeInput();

    Node* root = new Node(5);

    root->key;

    return 0; 
}
