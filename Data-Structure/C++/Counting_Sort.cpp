#include <iostream>
#include <vector>
using namespace std;
int smallInt = -1e9;
int largeInt = 1e9;
// Counting Sort
// Note: Range of the input array can't exceed max size that can be assigned to a vector in your system.

// Time complexity: O(N+K)
// Space Complexity: O(K)
// Where N = Number of elements and K = Largest Element - Smallest Element

int findMax(vector<int>&vec){
    int currMax = smallInt;
    for(int i = 0 ; i < vec.size() ; i++){
        if(currMax < vec[i]){
            currMax = vec[i];
        }
    }
    return currMax;
}

int findMin(vector<int>&vec){
    int currMin = largeInt;
    for(int i = 0 ; i < vec.size() ; i++){
        if(currMin > vec[i]){
            currMin = vec[i];
        }
    }
    return currMin;
}

void countSort(vector<int>&vec){
    int maxElement = findMax(vec);
    int minElement = findMin(vec);
    int range = maxElement - minElement + 1;

    vector<int>count(range,0);
    vector<int>output(vec.size());
    for(int i = 0; i < vec.size(); i++)
        count[vec[i] - minElement]++;

    for(int i = 1; i < count.size(); i++)
        count[i] += count[i - 1];

    for(int i = vec.size() - 1; i >= 0; i--) {
        output[count[vec[i] - minElement] - 1] = vec[i];
        count[vec[i] - minElement]--;
    }

    for(int i = 0; i < vec.size(); i++)
    vec[i] = output[i];
}
int main(){
    int n;
    cout<<"Enter number of elements : ";
    cin>>n;
    cout<<"Enter elements : ";
    vector<int>vec(n);

    // Taking input
    for(int i = 0 ; i < n ; i++){
        cin>>vec[i];
    }

    // Calling the countSort function
    countSort(vec);

    // Printing the sorted vector
    cout<<"Sorted : ";
    for(int i = 0 ; i < n ; i++){
        cout<<vec[i]<<" ";
    }
    return 0;
} 