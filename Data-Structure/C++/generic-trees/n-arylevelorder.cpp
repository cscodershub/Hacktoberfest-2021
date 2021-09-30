#include<bits/stdc++.h>
using namespace std;

class Node
{
public:
    int val;
    vector<Node *> child;

    Node(int val)
    {
       this->val = val;     
    }
};

class Solution {
public:
  
    vector<vector<int> > levelOrder(Node* root)
    {
       if(root == NULL){
           return {};    
       }
        
        vector<vector<int> > ans;    
        queue<Node*> que;
        Node* eliminator = new Node(-1);
        vector<int> temp;
        
        que.push(root);
        que.push(eliminator);
        
        while(que.size() > 0)
        {       
            Node* front = que.front();
            
            if(front == NULL){
                 return ans;
            }
            
            if(front == eliminator)
            {
                que.pop();
                ans.push_back(temp);
                temp.clear();
                
                if(que.size() > 0){
                    que.push(eliminator);
                }
            }
            
            else
            {
                temp.push_back(front->val);
                
                for(Node* child : front->children){
                    que.push(child);
                }
                
                que.pop();
            }
        }
        return ans;
    } 
        
};