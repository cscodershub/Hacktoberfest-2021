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

int ceil_ = INT_MAX;
int floor_ = INT_MIN;

/*
    comparing the larger and smaller with root->key
    and storing in ceil and floor and calling the function 
*/

void CeilandFloor(Node* root,int data)
{
    if(root->key>data)
    {
        if(ceil_>root->key){
            ceil_ = root->key;
        }    
    }

    if(root->key<data)
    {
        if(floor_<root->key){
            floor_ = root->key;
        }
    }

    for(int idx=0;idx<root->child.size();idx++)
    {
        Node* currChild = root->child[idx];

        CeilandFloor(currChild,data);
    }
}

/*
    if we pass INT_MAX to ceil and floor in place of data, we will get floor equal to the max amount
    thereby to find kth max we will again place floor to get next max element
*/

int kthElement(Node* root,int kthElement)
{
    int justmax = INT_MAX;
    floor_ = INT_MIN;
      
    for(int idx=0;idx<kthElement;idx++)
    {
        CeilandFloor(root,justmax);

        justmax = floor_;
        floor_ =INT_MIN;
    }
    return justmax;
}

int main()
{
    Node* root = takeInput();

    int kth;
    
    cin>>kth;

    cout<<kthElement(root,kth);

    return 0;
}