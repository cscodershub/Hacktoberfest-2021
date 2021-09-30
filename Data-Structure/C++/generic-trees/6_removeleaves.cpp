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

//function for printing the output
void printTree(Node* root)
{
    cout << root->key << " -> ";
    
    for(int idx=0;idx<root->child.size();idx++)
    { 
        cout<<root->child[idx]->key<<", ";
    }
    
    cout<< "." << endl;
    
    for(int idx=0;idx<root->child.size();idx++)
    {
        printTree(root->child[idx]);
    }
}

/*
   iterating through everychild and then deleting the value and adrress and then shifting the index of child at 1 to 0 
   and then applying recursiion for further nodes.
*/

void removeLeaf(Node* root)
{
    for(int idx=0;idx<root->child.size();)
    {
        Node* currChild = root->child[idx];
        
        if(currChild->child.size()==0){
            delete currChild;    //value
            
            root->child.erase(root->child.begin() + idx);  //address
        }
        
        else{
            idx++;
        }
    }
    
    for(int idx=0;idx<root->child.size();idx++)
    {
        removeLeaf(root->child[idx]);
    }
}

int main()
{
    Node* root = takeInput();
    
    removeLeaf(root);
    printTree(root);

    return 0;
}
