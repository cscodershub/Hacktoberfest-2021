#include <iostream>
#include<conio.h>
#include<stdlib.h>

#define MAX_SIZE 5

using namespace std;

void quick_sort(int, int);
int arr_sort[MAX_SIZE];

int main() {
    int i;

    cout << "Simple C++ Quick Sort Example - Functions and Array\n";
    cout << "\nEnter " << MAX_SIZE << " Elements for Sorting : " << endl;
    for (i = 0; i < MAX_SIZE; i++)
        cin >> arr_sort[i];

    cout << "\nYour Data   :";
    for (i = 0; i < MAX_SIZE; i++) {
        cout << "\t" << arr_sort[i];
    }

    quick_sort(0, MAX_SIZE - 1);

    cout << "\n\nSorted Data :";
    for (i = 0; i < MAX_SIZE; i++) {
        cout << "\t" << arr_sort[i];
    }

    getch();
}

void quick_sort(int f, int l) {
    int i, j, t, p = 0;

    if (f < l) {
        p = f;
        i = f;
        j = l;

        while (i < j) {
            while (arr_sort[i] <= arr_sort[p] && i < l)
                i++;
            while (arr_sort[j] > arr_sort[p])
                j--;
            if (i < j) {
                t = arr_sort[i];
                arr_sort[i] = arr_sort[j];
                arr_sort[j] = t;
            }
        }

        t = arr_sort[p];
        arr_sort[p] = arr_sort[j];
        arr_sort[j] = t;
        quick_sort(f, j - 1);
        quick_sort(j + 1, l);
    }
}