#include<iostream>
using namespace std;

void toh(int num, int t1id, int t2id, int t3id)
{
        // base case at num == 0 , return back
    if(num == 0) 
        return ;
    
        //recursive call for num-1 from source to helper tower using destination tower
    toh(num-1,t1id,t3id,t2id) ;
        //printing flow of problem at each call 
    cout <<num<<"["<<t1id <<" -> " << t2id<<"]\n" ;
        //recursive call for num-1 from helper to destination tower using source tower
    toh(num-1,t3id,t2id,t1id) ;
    
  }




int  main() 
{
    int num;
    
    cin >> num;
    
    int tower1 , tower2 , tower3 ;
    
    cin >> tower1 >> tower2 >> tower3 ;
    
        //calling function toh() for user input values
    toh(num , tower1 , tower2, tower3);
    
    return 0 ;
    
}