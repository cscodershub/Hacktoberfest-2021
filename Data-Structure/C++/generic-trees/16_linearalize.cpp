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

Node* lastChild(Node* root)
{
    while(root->child.size()!=0)
    {
        root = root->child[0];       
    }
    return root;
}

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
   delinking the child of last branch with its parent and then 
   linking it with second last branch last child
*/

void linearize(Node* root)
{
    for(int idx=0;idx<root->child.size();idx++){
        linearize(root->child[idx]);
    }

    int size = root->child.size();

    while(size>1)
    {
        Node* lastBranch= root->child[size-1];

        root->child.pop_back();
        size--;

        Node* secondlastBranch = lastChild(root->child[size-1]);

        secondlastBranch->child.push_back(lastBranch);
    }
}

/*
    delinking all the branches except 1st branch and  
    merging it in first branch using push back 
*/

void linearizeSamriddh(Node* root)
{
  if(root->child.size()>1) 
  {
    int size = root->child.size();
    Node* firstBranch = root->child[0];
   
   for(int idx=1;idx<size;idx++)
   {
       Node* currChild = root->child[idx];
       
       firstBranch->child.push_back(currChild);
   }
   
  for(int idx=size-1;idx>0;idx--)
  {
      root->child.pop_back();
  }
   
   linearize(root->child[0]);
  }
}

int main()
{
    Node* root = takeInput();

    linearize(root);

    // linearizeSamriddh(root);

    printTree(root);
    
    return 0;
}
