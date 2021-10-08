#include<bits/stdc++.h>

using namespace std;
#define int long long
#define pb push_back

vector<vector<pair<int, int>>> graph;
/*
* 1-2 1-3 3-4 (graph structure)
* 1-> (2,1) (3,1)
* 2-> (1,1)
* 3-> (4,0) (1,1)
* 4-> (3,0)
*/
void addEdge(int edge1, int edge2, bool birdir=true, int wt=0){
    //birdir == true means graph is undirected
    graph[edge1].pb(make_pair(edge2, wt));
    if(birdir)
        graph[edge2].pb(make_pair(edge1, wt));
}

void display(){
    for (auto val1:graph){
        //val1-> vector of pair
        if(val1.size()==0)
            cout<<"empty";
        for (auto val2:val1){
            //val2 is pair
            cout<<"{"<<val2.first<<","<<val2.second<<"} ";
        }
        cout<<endl;
    }
}

void bfs(int src, int vertices){
    queue<int> q;
    vector<bool> visted(vertices, false);

    //once we push src it means it also visted
    q.push(src);
    visted[src]=true;

    while(!q.empty()){
        //get element which we inserted
        int current=q.front();
        q.pop();
        cout<<current<<" ";
        for(auto neighbour:graph[current]){
            //as we have to now visit all connected node with
            //current node as neighbour here is pair
            if(!visted[neighbour.first]){
                q.push(neighbour.first);
                visted[neighbour.first] = true;
            }
        }
    }
}

void solve() {
    int vertices, edges;
    cin>>vertices>>edges;
    
    graph.resize(vertices);

    while(edges--){
        int edge1, edge2, wt;
        cin>>edge1>>edge2>>wt;
        addEdge(edge1, edge2, true, wt);
    }
    display();

    int src;
    cin>>src;
    bfs(src, vertices);
}

signed main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  #ifndef ONLINE_JUDGE
  freopen("input.txt", "r", stdin);
  freopen("output.txt", "w", stdout);
  #endif
  int t = 1;
  cin >> t;
  while (t--) {
    solve();
  }

  cerr << "time taken : " << (float) clock() / CLOCKS_PER_SEC << " secs" << endl;
  return 0;
}
