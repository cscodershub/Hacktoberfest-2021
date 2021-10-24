#include <stdio.h>
#include <math.h>
#include <stdlib.h>

// 1 pawn 2 rock 3 bishop 4 knight 5 queen 6 king
int currentTurn = 1;
int board[8][8] = {
    {2,4,3,5,6,3,4,2},
    {1,1,1,1,1,1,1,1},
    {0,0,0,0,0,0,0,0},
    {0,0,0,0,0,0,0,0},
    {0,0,0,0,0,0,0,0},
    {0,0,0,0,0,0,0,0},
    {1,1,1,1,1,1,1,1},
    {2,4,3,5,6,3,4,2}
};
int blackWhite[8][8] = {
    {2,2,2,2,2,2,2,2},
    {2,2,2,2,2,2,2,2},
    {2,2,2,2,2,2,2,2},
    {1,1,1,2,2,2,2,2},
    {2,2,2,2,2,2,2,2},
    {2,2,2,2,2,2,2,2},
    {1,1,1,1,1,1,1,1},
    {1,1,1,1,1,1,1,1}
};
int moves[8][8];

int getValidMoves(int x, int y){
    int piece = board[y][x];
    int color = blackWhite[y][x];
    int canMove = 1;
    moves[y][x] = 2;
    if(x > 7 || x < 0 || y > 7 || y < 0)
        return 1;
    if(piece == 0){
        return 1;  
    }
    void towerMoves(){
         for(int dir = -1; dir < 2; dir+=2){
            int count = 1;
            while(1){
                if(x+(count*dir) <= 7 && x+(count*dir) >= 0){
                    if(board[y][x+(count*dir)] != 0){
                        if(blackWhite[y][x+(count*dir)] != color){
                            moves[y][x+(count*dir)] = 3;
                            canMove = 0;
                        }
                        break;
                    }else{
                        moves[y][x+(count*dir)] = 1;
                        canMove = 0;
                    }
                }else{
                    break;
                }
                count++;
            }
            count = 1;
            while(1){
                if(y+(count*dir) <= 7 && y+(count*dir) >= 0){
                    if(board[y+(count*dir)][x] != 0){
                        if(blackWhite[y+(count*dir)][x] != color){
                            moves[y+(count*dir)][x] = 3;
                            canMove = 0;
                        }
                        break;
                    }else{
                        moves[y+(count*dir)][x] = 1;
                        canMove = 0;
                    }
                }else{
                    break;
                }
                count++;
            }
        }
    }
    void runnerMove(){
        for(int xDir = -1; xDir < 2; xDir+=2){
            for(int yDir = -1; yDir < 2; yDir+=2){
                int count = 1;
                while(1){
                    if(x+(count*xDir) <= 7 && x+(count*xDir) >= 0 && y+(count*yDir) <= 7 && y+(count*yDir) >= 0){
                        if(board[y+(count*yDir)][x+(count*xDir)] != 0){
                            if(blackWhite[y+(count*yDir)][x+(count*xDir)] != color){
                                moves[y+(count*yDir)][x+(count*xDir)] = 3;
                                canMove = 0;
                            }
                            break;
                        }else{
                            moves[y+(count*yDir)][x+(count*xDir)] = 1;
                            canMove = 0;
                        }
                    }else{
                        break;
                    }
                    count++;
                }
            }
        }
    }
    if(piece == 1){
        if(color == 1){
            if(y == 6 && board[y-2][x] == 0){
                moves[y-2][x] = 1;
                canMove = 0;
            }
            if(y-1 >= 0){
                if(board[y-1][x] == 0){
                    moves[y-1][x] = 1;
                    canMove = 0;
                }
                if(x + 1 <= 7 && blackWhite[y-1][x+1] == 2 && board[y-1][x+1] != 0){
                    moves[y-1][x+1] = 3;
                    canMove = 0;
                }
                if(x - 1 >= 0 && blackWhite[y-1][x-1] == 2 && board[y-1][x-1] != 0){
                    moves[y-1][x-1] = 3;
                    canMove = 0;
                }
            }
        }else{
            if(y == 1 && board[y+2][x] == 0){
                moves[y+2][x] = 1;
                canMove = 0;
            }
            if(y+1 <= 7){
               if(board[y+1][x] == 0){
                    moves[y+1][x] = 1;
                    canMove = 0;
                }
                if(x + 1 <= 7 && blackWhite[y+1][x+1] == 1 && board[y+1][x+1] != 0){
                    moves[y+1][x+1] = 3;
                    canMove = 0;
                }
                if(x - 1 >= 0 && blackWhite[y+1][x-1] == 1 && board[y+1][x-1] != 0){
                    moves[y+1][x-1] = 3;
                    canMove = 0;
                }  
            }
        }
    }
    if(piece == 4){
        for(int i = -1; i < 2; i+=2){
            //TODO CLEAN THIS UP
            if(x+i <= 7 && x+i >= 0 && y+(2*i) >= 0 && y+(2*i) <= 7){
                moves[y+(2*i)][x+i] = blackWhite[y+(2*i)][x+i] == color && board[y+(2*i)][x+i] != 0 ? 0 : 1;
                canMove = 0;
            }
            if(y+i <= 7 && y+i >= 0 && x+(2*i) >= 0 && x+(2*i) <= 7){
                moves[y+i][x+(2*i)] = blackWhite[y+i][x+(2*i)] == color && board[y+i][x+(2*i)] != 0 ? 0 : 1;
                canMove = 0;
            }
            if(x-i <= 7 && x-i >= 0 && y+(2*i) >= 0 && y+(2*i) <= 7){
                moves[y+(2*i)][x-i] = blackWhite[y+(2*i)][x-i] == color && board[y+(2*i)][x-i] != 0 ? 0 : 1;
                canMove = 0;
            }
            if(y-i <= 7 && y-i >= 0 && x+(2*i) >= 0 && x+(2*i) <= 7){
                moves[y-i][x+(2*i)] = blackWhite[y-i][x+(2*i)] == color && board[y-i][x+(2*i)] != 0 ? 0 : 1;
                canMove = 0;
            }
        }
    }
    if(piece == 3){
        runnerMove();
    }
    if(piece == 2){
        towerMoves();
    }
    if(piece == 5){
        towerMoves();
        runnerMove();
    }
    if(piece == 6){
        for(int xDir = -1; xDir < 2; xDir++){
            for(int yDir = -1; yDir < 2; yDir++){
                if(xDir+x <= 7 && xDir+x >= 0 && y+yDir >= 0 && yDir+y <= 7 && !(xDir == 0 && yDir == 0)){
                    if(board[yDir+y][xDir+x] != 0){
                        if(blackWhite[yDir+y][xDir+x] != color)
                            moves[yDir+y][xDir+x] = 3;
                            canMove = 0;
                    }else{
                        moves[yDir+y][xDir+x] = 1;
                        canMove = 0;
                    }
                }
            }
        }
    }
    return canMove;
}
void drawBoard(){
    printf("   ");
    for(int y = 0; y < 8; y++){
        printf("%d: ",y+1);
    }
    printf("\n");
    for(int x = 0; x < 8; x++){
        printf("%d: ",x+1);
        for(int y = 0; y < 8; y++){
            if(board[x][y] != 0){
                printf("%d%d",board[x][y],blackWhite[x][y]);
            }else{
                printf("--");
            }
            printf(" ");
        }
        printf("\n");
    }
}
void drawMoves(){
    printf("   ");
    for(int y = 0; y < 8; y++){
        printf("%d: ",y+1);
    }
    printf("\n");
    for(int x = 0; x < 8; x++){
        printf("%d: ",x+1);
        for(int y = 0; y < 8; y++){
            if(moves[x][y] == 0){
                printf("--");
            }else{
                printf("%d%d",moves[x][y],moves[x][y]);
            }
            printf(" ");
        }
        printf("\n");
    }
}
char message[] = "White's turn";
int main(){
    while(1){
        system("@cls||clear");
        printf("----------------\n");
        printf("   Chess in C\n");
        printf("----------------\n\n");
        printf("1.Start\n");
        printf("2.Rules\n");
        printf("3.Exit\n");
        printf("Input: ");
        int input;
        scanf("%d", &input);
        switch(input){
            case 1:
                goto start;
                break;
            case 2:
                system("@cls||clear");
                printf("-Every chess piece is displayed as a two digit number, example 42\n");
                printf("-The first number, 4 in this case indicates what chess piece it is\n");
                printf("-The second number, 2 indicates what color it is\n");
                printf("-When selecting a chess piece you select a cordinate where to origin is top left\n");
                printf("-Firstly you select a x position by typing a number from 1-8 and press enter\n");
                printf("-After that you select a y position from 1-8 and press enter\n");
                printf("-A menu will apear with availbe moves where a 22 is idicating of where your chess piece is and 11 for where it can move\n");
                printf("-If the move will result in a capture a 33 will be displayed instead of a 11\n");
                printf("-Follow the above steps on picking a cordinate to chose where the chess piece should be moved\n\n");
                printf("-Chess piece numbers are as follows: 1 pawn, 2 rook, 4 knight, 3 bishop, 5 queen, 6 king\n");
                printf("-Color numbers are as follows: 1 white, 2 black\n\n");
                scanf("%d", &input);
                break;
            case 3:
                return 0;
                break;
        }
    }
    start:
    while(1){
        system("@cls||clear");
        if(currentTurn == 1){
            printf("White's turn\n\n");
        }else{
            printf("Black's turn\n\n");
        }
        drawBoard();
        int input[2];
        for(int i = 0; i < 2; i++){
            int c;
            scanf("%d", &c);
            input[i] = c - 1;
        }
        int x = input[0];
        int y = input[1];
        if(board[y][x] == 0)
            continue;
        if(blackWhite[y][x] != currentTurn)
            continue;
        if(getValidMoves(x,y) == 1)
            continue;
        system("@cls||clear");
        drawBoard();
        printf("\n");
        drawMoves();
        for(int i = 0; i < 2; i++){
            int c;
            scanf("%d", &c);
            input[i] = c - 1;
        }
        if(moves[input[1]][input[0]] == 1 || moves[input[1]][input[0]] == 3){
            blackWhite[input[1]][input[0]] = blackWhite[y][x];
            board[input[1]][input[0]] = board[y][x];
            board[y][x] = 0;
            currentTurn = currentTurn == 1 ? 2 : 1;
        }
        for(int x_ = 0; x_ < 8; x_++){
            for(int y_ = 0; y_ < 8; y_++){
                moves[x_][y_] = 0;
            }
        }
    }
    return 0;
}