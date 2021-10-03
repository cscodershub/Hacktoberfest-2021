import java.util.*;


public class Sudoku {

    public static void display2D(int[][] board)
    {
        for(int[] a:board)
        {
            for(int ele:a)
            {
                System.out.print(ele + " ");
            }

            System.out.println();
        }
    }

    public static boolean isSafeToPlaceSudoku(int[][]board , int r , int c , int num)
    {
        for(int i=0;i<board.length;++i)
        {
            if(board[i][c]==num)
                return false;
        }

        for(int i=0;i<board[0].length;++i)
        {
            if(board[r][i]==num)
                return false;
        }

        int x= (r/3)*3;
        int y= (c/3)*3;

        for(int i=0;i<3;++i)
        {
            for(int j=0;j<3;++j)
            {
                if(board[x+i][y+j]==num)
                    return false;
            }
        }

        return true;
    }

    public static  int sudoku_01(int[][] board , int idx)
    {
        if(idx==81)
        {
            display2D(board);
            return 1;
        }

        int count=0;
        int r=idx/9;
        int c=idx%9;

        if(board[r][c]==0)
        {
            for(int num=1; num<=9 ; ++num)
            {
                if(isSafeToPlaceSudoku(board, r, c, num))
                {
                    board[r][c]=num;
                    count+=sudoku_01(board, idx+1);
                    board[r][c]=0;
                }
            }
        }
        else
        {
            count+=sudoku_01(board, idx+1);
        }

        return count;
    }


    public static void main(String[] args)
    {
        int[][] board=new int [9][9] ;
        String nums[]= new String[9];
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the sudoku and at place of unknown typpe 0 ");
        
        // for(int  i=0 ; i<9 ; ++i)
        // {
        //     for(int j=0 ; j<9 ; ++j)
        //     {
        //         board[i][j]=sc.nextInt();

        //     }
        // }
        for(int i=0 ; i<9 ; ++i)
        {
            nums[i]=sc.nextLine();
        }

        for(int  i=0 ; i<9 ; ++i)
        {
            for(int j=0 ; j<9 ; ++j)
            {
                board[i][j]= (nums[i].charAt(j) - '0') ;

            }
        }
        
        
        display2D(board);
        System.out.println("\n\n");


        int possible=sudoku_01(board, 0);
        System.out.println("The possibilites are : " + possible);
    }
}




