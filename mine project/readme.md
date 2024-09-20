# Tic Tac Toe Game

## Description

This is a simple Tic Tac Toe game that can be played by two players. The game is played on a 3x3 grid and the first player to get 3 of their marks in a row (horizontally, vertically, or diagonally) wins the game.

## How to Play

1. The game starts with an empty 3x3 grid.
2. Player 1 is assigned the 'X' mark and Player 2 is assigned the 'O' mark.
3. Player 1 goes first and places their mark on an empty cell.
4. Player 2 goes next and places their mark on an empty cell.
5. Steps 3 and 4 are repeated until a player wins or the game ends in a draw.
6. A player wins if they get 3 of their marks in a row (horizontally, vertically, or diagonally).
7. The game ends in a draw if all cells are filled and no player has won.

## Tasks

1. Create a 3x3 grid to represent the game board.
2. Update the label of the cell when a cell is clicked. (Initially all the labels are empty)
3. Depending on the current player, set the label to 'X' or 'O'.
4. If a player already marks a cell, prevent the other player from marking the same cell.
5. Check if a player has won the game after every move.
6. If a player has won, display a message indicating the winner and end the game. (Disable all cells)
7. If the game ends in a draw, display a message indicating the draw and end the game. (Disable all cells)
