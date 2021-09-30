#include<bits/stdc++.h>
using namespace std;

vector<int> arr;

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
   initialising a global vector and adding the elements to the arr from where 
   the tree traverse so that we can find the path.
*/

bool NodetoRoot(Node* root,int key)
{
   if(root->key == key){
       arr.push_back(root->key);
       return true;
   }
   
   for(int idx=0;idx<root->child.size();idx++)
   {
       bool checkcurrChild = NodetoRoot(root->child[idx],key);
       
       if(checkcurrChild){
           arr.push_back(root->key);
           return true;
       }
   }
   return false;
}

vector<int> nodetoRoot(Node* root,int key)
{
   if(root->key==key)
   {
      vector<int> basecase;
      
      basecase.push_back(root->key);
      return basecase;
   }
   
   vector<int> ans;
   
   for(int idx=0;idx<root->child.size();idx++)
   {
       Node* currChild = root->child[idx];
       
       ans = nodetoRoot(currChild,key);
       
       if(ans.size()>0)
       {
           ans.push_back(root->key);
           return ans;
       }
   }
   return ans;
}

int main()
{
    Node* root = takeInput();
    
    int key; 
    
    cin>>key;
    
   // vector<int> arr = nodetoRoot(root,key);

    cout<<"[";
    
   if(NodetoRoot(root,key)) 
   {
     for(int idx=0;idx<arr.size();idx++)
     {
        if(idx!=arr.size()-1){
          cout<<arr[idx]<<", ";
        }
   
        else{
         cout<<arr[idx];
        }
    }
   }

    cout<<"]";

    return 0;
}