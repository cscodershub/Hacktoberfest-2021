#include<iostream>
using namespace std;


    void printMazePaths(int startRow, int startColumn, int destinationRow, int destinationColumn, string psf) {
        
            // non desired base case
         if(startRow > destinationRow || startColumn > destinationColumn)
       { 
           return ;
       }
        
            // desired base case to be at destination idx
        if(startRow == destinationRow && startColumn == destinationColumn)
       { 
           cout << psf << "\n" ;
           return ;
       }
   
        // recursive call for horizontal move
    if(startColumn < destinationColumn)
    {
        for(int idx = 1 ; idx <= destinationColumn - startColumn ; idx++)
        printMazePaths(startRow , startColumn+idx , destinationRow , destinationColumn ,psf +"h"+ to_string(idx)) ;
    }
    
        // recursive call for vertical move
    if(startRow < destinationRow)
    {
        for(int idx = 1 ; idx <= destinationRow - startRow ; idx++)
        printMazePaths(startRow+idx , startColumn , destinationRow , destinationColumn , psf +"v"+ to_string(idx)) ;
    }

        // recursive call for diagonal move
    if(startColumn < destinationColumn && startRow < destinationRow)
    {
        for(int idx = 1 ; idx <= (destinationColumn - startColumn) && idx <= (destinationRow - startRow) ; idx++)
        printMazePaths(startRow+idx , startColumn+idx , destinationRow , destinationColumn ,psf +"d"+ to_string(idx)) ;
    }
}
    
int main() 
{
    int num1, num2 ;
    
    cin >> num1>> num2;
    
    printMazePaths(0, 0, num1 - 1, num2 - 1, "");
    
    return 0; 

}