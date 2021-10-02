#include<iostream>
#include<vector>

using namespace std;

// sr - source row
// sc - source column
// dr - destination row
// dc - destination column
vector <string> getMazePaths(int sr, int sc, int dr, int dc) 
{
    
    if(sr == dr && sc == dc)
       { 
           
           return {""} ;
       }
   
    vector<string> ans ;
    
        // recursive call for horizontal move
    if(sc < dc)
    {
        for(int idx = 1 ; idx <= dc - sc ; idx++)
        {
            vector<string> pathh = getMazePaths(sr , sc+idx , dr , dc) ;
            
            for(int i = idx ; i < pathh.size() ; i++)
                ans.push_back( "h"+to_string(idx)+pathh[idx]) ;
        }
    }
    
        // recursive call for vertical move
    if(sr < dr)
    {
        for(int idx = 1 ; idx <= dr - sr ; idx++)
        {
            vector<string> pathv = getMazePaths(sr+idx , sc , dr , dc) ;
            
            for(int i = idx ; i < pathv.size() ; i++)
                ans.push_back( "v"+to_string(idx)+pathv[idx]) ;
        }
    }
    
        // recursive call for diagonal move
    if(sr < dr && sc < dc)
    {
        for(int idx = 1 ; idx <= dr - sr && idx <= dc - sc ; idx++)
        {
            vector<string> pathd = getMazePaths(sr+idx , sc+idx , dr , dc) ;
            
            for(int i = idx ; i < pathd.size() ; i++)
                ans.push_back( "d"+to_string(idx)+pathd[idx]) ;
        }
    }
    
    return ans ;
}

        // function to display the answer string type vector
void display(vector<string>& arr)
{
    cout << "[";

    for(int i = 0;i < arr.size();i++){
        cout << arr[i];
        if(i < arr.size() -1) cout << ", ";
    }
    
    cout << "]"<<endl;
}


int main() 
{
    int num1, num2 ; 
    
    cin >> num1 >> num2;
    
    vector<string> ans = getMazePaths(0, 0, num1-1, num2-1);
    
    display(ans);

    return 0;
}