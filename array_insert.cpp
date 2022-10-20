#include <iostream>

using namespace std;

int main()
{
    int n ;
    cin>>n;
    int arr[n];
    for(int i = 0;i<n;i++){
        cin>>arr[i];
    }
    int m;
    cin>>m;
    int ele[m];
    for(int i = 0;i<m;i++){
        cin>>ele[i];
    }
    int pos[m];
    for(int i = 0;i<m;i++){
        cin>>pos[i];
    }
    int brr[m+n];
    int temp[m+n];
    int k =0;
    for(int i =0;i<m+n;i++){
        temp[i]=0;
    }
    for(int i =0;i<m;i++){          
        brr[pos[i]-1] = ele[i];     
        temp[pos[i]-1] = 1;
    }
    for(int i=0; i<m+n;i++){
        if(temp[i]==0){
            brr[i] = arr[k];
            k++;
        }
        else {
            continue;
        }
    }
    
    
    for(int i = 0;i<m+n;i++){
        cout<<brr[i]<<" ";
    }

    return 0;
}

