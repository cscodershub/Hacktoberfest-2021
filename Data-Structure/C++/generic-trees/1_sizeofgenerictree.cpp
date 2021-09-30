#include<bits/stdc++.h>
using namespace std;

//making a class 
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

//function for taking input 
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

int sizeofTree(Node* root)
{
    //count variable for counting the no of nodes initialising it with 1 to count the parent
    int count = 1;

    //iterating through childs
    for(int idx=0;idx<root->child.size();idx++)
    {
        Node* currChild = root->child[idx];
       
        //recursive to count next child
        count += sizeofTree(currChild); 
    }

    return count;
}

int main()
{
    Node* root = takeInput();

    cout<<sizeofTree(root)<<endl;

    return 0;
}
