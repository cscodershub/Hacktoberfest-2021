class Solution {
public:
    
    bool isSafeToPlace(vector<vector<char>> &board , int row , int col , char ch)
    {
        //start idx of row and col of 3*3 grid box
        int rowIdx = 3 * (row/3) ;
        int colIdx = 3 * (col/3) ;
        
        for(int idx = 0 ; idx < 9 ; idx++)
        {
                //checks for that row fixed , and column varies
            if(board[row][idx] == ch)
                return false ;
            
                //checks for that column fixed , and row varies
            if(board[idx][col] == ch)
                return false ;
            
                //checks within that grid of 3*3 , where rowIdx and colIdx mark the start row-col of that grid
            if(board[rowIdx + (idx/3)][colIdx + (idx%3)] == ch)
                return false ;
        }
        
        return true ;
    }
    
    
    bool makeMyBoard(vector<vector<char>> &board)
    {
        for(int row = 0 ; row < board.size() ; row++)
        {
            for(int col = 0 ; col < board[0].size() ; col++)
            {
                if(board[row][col] == '.')
                {
                    for(char ch = '1' ; ch <= '9' ; ch++)
                    {
                        bool isSafe = isSafeToPlace(board , row , col , ch) ;
                        
                        
                        if(isSafe)
                        {
                            board[row][col] = ch ;
                            
                            if(makeMyBoard(board))  return true ;
                            
                            board[row][col] = '.' ;
                        }
                        
                    }
                
                    return false ;
                }
                
            }
            
        }
        return true ;
    }
    
    void solveSudoku(vector<vector<char>>& board) {
        makeMyBoard(board) ;
    }
};