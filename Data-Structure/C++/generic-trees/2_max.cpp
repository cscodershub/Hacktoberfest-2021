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
   first declaring a variable and storing value of parent in it.
   then iterating through its chlid and comparing the values and changing the value if it max in max variable.
   then using recursive approach for further nodes 
*/

int maxinaTree(Node* root)
{
    int max = root->key;
    
    for(int idx=0;idx<root->child.size();idx++)
    {
        Node* currChild = root->child[idx];

        int childMax = maxinaTree(currChild);

        if(max<childMax){
            max = childMax;
        }
    }
    return max;
}

int main()
{
    Node* root = takeInput();

    cout<<maxinaTree(root)<<endl;

    return 0;
}
