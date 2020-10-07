/*
Ragnar Lorthbrok is a Viking and he wants to attack the nearest cities. He has to sail boat in the sea. Total there are N islands (0,1,2..,N−1)and distance between every 
adjacent island is 1 meter. Ragnar Lorthbrok's current location is X island and he wants to attack the city which is located at Y island. 
Ragnar Lorthbrok needs to find the minimum number of the distance between a given pair of islands (X,Y). You can help him.

Input Format
The first line contains an integer T denoting the number of test cases.
In the first line of each test case, the input contains two integers N and M. N is the number of Island and M is the number of sea links of adjacent islands. The next M line 
contains two number u and v, the link from the Island u to Island v. After M lines contains two integers (X,Y)

Output Format
For each test case output print in the new line. Print the minimum number of the distance between a given pair of Island  (X,Y).

*/
import java.util.*;
import java.io.*;
import java.lang.*;
class G{
  public static class Edge{
    int sr;
    int nbr;
    int wt;
    Edge(int sr, int nbr, int wt){
      this.sr=sr;
      this.nbr=nbr;
      this.wt=wt;
    }
  }
  public static class Pair implements Comparable<Pair>{
    int v;
    int wsf;
    Pair(int v, int wsf){
      this.v=v;
      this.wsf=wsf;
    }
    public int compareTo(Pair o){
      return this.wsf-o.wsf;
    }
  }
  public static void main(String[] args){
    Scanner sc=new Scanner(System.in);
    int test=sc.nextInt();
    while(test--> 0){
      int vtces=sc.nextInt();
      ArrayList<ArrayList<Edge>> graph=new ArrayList<ArrayList<Edge>>();
      for(int i=0;i<vtces;i++){
        graph.add(new ArrayList<Edge>());
      }
      int edges=sc.nextInt();
      while(edges-->0){
        int v1=sc.nextInt();
        int v2=sc.nextInt();
        graph.get(v1).add(new Edge(v1, v2, 1));
        graph.get(v2).add(new Edge(v2, v1, 1));
      }
      int s=sc.nextInt();
      int d=sc.nextInt();
      boolean[] visited=new boolean[vtces];
      int count=0;
      PriorityQueue<Pair> p=new PriorityQueue<>();
      p.add(new Pair(s, 0));
      while(p.size() > 0){
        Pair r=p.remove();
        
        if(visited[r.v]==true){
          continue;
        }
        if(r.v==d){
          count=r.wsf;
          break;
        }
        visited[r.v]=true;
        
        for(Edge e: graph.get(r.v)){
          if(visited[e.nbr]==false){
            p.add(new Pair(e.nbr, e.wt+r.wsf));
          }
        }
      }
      System.out.println(count);
    }
  }
}
