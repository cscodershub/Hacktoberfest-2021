class Solution {
public:
    
    
    void solve(vector<string> &board, int n, int row, vector<vector<string>> &ans)
    {
        if (row == n)
        {
            ans.push_back(board);
            return;
        }
        for (int i = 0; i < n; i++)
        {
            if (isSafe(board, n, row, i))
            {
                board[row][i] = 'Q';
                solve(board, n, row + 1, ans);
                board[row][i] = '.';
            }
        }
    }

    
    bool isSafe(vector<string> &board, int n, int r, int c)
    {
        for(int row = 0 ; row < r ; row++)
        {
            if(board[row][c] == 'Q')
                return false ;
        }
        
        int row = r ;
        int col = c ;
        
        while(row >= 0 && col >= 0)
        {
            if(board[row][col] == 'Q')
                return false ;
            
            row-- ;
            col-- ;
        }
        
        row = r ;
        col = c ;
        
        while(row >= 0 && col < n)
        {
            if(board[row][col] == 'Q')
                return false ;
            
            row-- ;
            col++ ;
        }
        
        return true ;
    }
    
      vector<vector<string>> solveNQueens(int n) 
    {
        vector<vector<string>> ans;
        vector<string> board(n, string(n, '.'));

        solve(board, n, 0, ans);
        return ans;

    }
    
};