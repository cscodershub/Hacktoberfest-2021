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
   the tree will be symmetric if its image doesnt change while mirroring also
*/
 
bool ifMirror(Node* root1,Node* root2)
{
    if(root1->child.size()!=root2->child.size()){
       return false;
    }

    for(int idx1 = 0,idx2 = root2->child.size()-1; idx1 < root1->child.size() || idx2 >= 0;idx1++,idx2--)
    {
         if(!ifMirror(root1->child[idx1],root2->child[idx2])){
             return false;
         }
    }
    return true;
}

int main()
{
    Node* root = takeInput();
    
    if(ifMirror(root,root)){
        cout<<"true"<<endl;
    }

    else{
        cout<<"false"<<endl;
    }

    return 0;
}
