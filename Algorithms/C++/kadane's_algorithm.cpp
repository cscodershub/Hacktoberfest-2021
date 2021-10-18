// kadane's algorithm

#include <bits/stdc++.h>
using namespace std;

int max_array_sum(int ar[],int a){
    
    int till_cur_sum=0 , total_sum=INT_MIN , max_element=INT_MIN;
        for(int j=0;j<a;j++){
            till_cur_sum = till_cur_sum + ar[j];
            total_sum = max(till_cur_sum,total_sum);
          //  max_element= max(max_element,ar[j]);
            if(till_cur_sum<0){
                till_cur_sum=0;
            }
        }
        if(total_sum==0){
          total_sum = max_element;
        } 
     return total_sum;
}

int main(){
    int n;
    cin>>n;
    int arr[n];
    
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    cout<<" Maximum subarray sum : "<< max_array_sum(arr,n);
    
    return 0;
}
