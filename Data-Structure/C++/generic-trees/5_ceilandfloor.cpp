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

//making global variable
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

int main()
{
    Node* root = takeInput();

    int data; 
    
    cin>>data;
    
    CeilandFloor(root,data);
    
    cout<<"CEIL = "<<ceil_<<endl;
    cout<<"FLOOR = "<<floor_<<endl;
   
    return 0;
}
