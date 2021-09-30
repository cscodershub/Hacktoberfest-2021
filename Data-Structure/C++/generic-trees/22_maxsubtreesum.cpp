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

int maxSum = INT_MIN;
int treeData = 0;
  
int subtreeSum(Node* root)
{
    int sum = root->key;
    
    for(int idx = 0; idx < root->child.size(); idx++)
    {
        int currSum = subtreeSum(root->child[idx]);
        
        sum += currSum;
    }
    
    if(sum > maxSum)
    {
        treeData = root->key;
        maxSum = sum;
    }

    return sum;
}


int main()
{
    Node *root = takeInput();

    subtreeSum(root);

    cout << treeData << "@" << maxSum;

    return 0;
}