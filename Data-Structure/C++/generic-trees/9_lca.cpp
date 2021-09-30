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

vector<int> NodetoRoot(Node* root,int child)
{
    if(root->key==child)
    {
        vector<int> basecase;
        
        basecase.push_back(root->key);
        return basecase;
    }

    vector<int> ans;

    for(int idx=0;idx<root->child.size();idx++)
    {
        ans = NodetoRoot(root->child[idx],child);
       
       if(ans.size()>0){
        ans.push_back(root->key);
        return ans;
       }
    }
    return ans;   
}

/*
   calculating the path of both childs and then iterating from last to find their
   common ancestor which will be lowest
*/

int lowestcommonAncestor(Node* root,int child1,int child2)
{
    vector<int> path1 = NodetoRoot(root,child1);
    vector<int> path2 = NodetoRoot(root,child2);

    int idx1 = path1.size() - 1, idx2 = path2.size() - 1;

    while(idx1>=0 && idx2>=0 && path1[idx1]==path2[idx2])
    {
        idx1--;
        idx2--;
    }
    return path1[idx1+1];
}

int main()
{
    Node* root = takeInput();
    
    int child1,child2;

    cin>>child1>>child2;

    cout<<lowestcommonAncestor(root,child1,child2);

    return 0;
}
