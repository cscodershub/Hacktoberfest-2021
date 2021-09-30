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

int diameter = 0;

/* 
   adding max height and second max height along with 2 to get diameter
*/

//function that is calculating height and along side updating the diameter
int getHeight_(Node* root)
{
    int maxHeight = -1, secondMaxheight = -1;

    for(int idx=0;idx<root->child.size();idx++)
    {
        int currHeight = getHeight(root->child[idx]);
        
        if(currHeight>maxHeight) 
        {
            secondMaxheight = maxHeight;
            maxHeight = currHeight;
        }

        else if(currHeight>secondMaxheight){
            secondMaxheight = currHeight;
        }
    }

    int currDiameter = maxHeight + secondMaxheight + 2;

    if(currDiameter>diameter){
        diameter = currDiameter;
    }

    return maxHeight + 1;
}

//calculating height and then implementing it in another function 
int getHeight(Node* root)
{
    if(root->child.size()==0){
        return 0;
    }
    
    int height = 0;
    
    for(int idx=0;idx<root->child.size();idx++)
    {
        int currHeight = getHeight(root->child[idx]);
        
        if(currHeight>height){
            height = currHeight;
        }
    }
    return height + 1;
}

int getDiameter(Node* root)
{
    int maxHeight = -1,secondmaxHeight = -1;
    
    for(int idx=0;idx<root->child.size();idx++)
    {
        int currHeight = getHeight(root->child[idx]);
        
        if(currHeight>maxHeight){
            secondmaxHeight = maxHeight;
            maxHeight = currHeight;
        }
        
        else if(currHeight>secondmaxHeight){
            secondmaxHeight = currHeight;
        }
    }
    
    return (maxHeight + secondmaxHeight + 2);      
}

int main()
{
    Node* root = takeInput();
    
    cout<<getDiameter(root);

    // getHeight_(root);

    // cout<<diameter<<endl;

    return 0;
}

