# Knight Travails
Coursework on CS concepts for The Odin Project

## Tasks
- [x] Make functions for gameboard and knight
- [x] List all possible moves as children in a tree
- [x] Decide on a search algorithm
- [x] Use chosen algorithm to find shortest path to destination

## Notes
* I decided on using a breadth first search on the knight-children tree structure. The rational is the knight may list its previous position as a child node, and a depth-first search may occur. The BFS will simply ignore the queued up node if it sees it again since it is not equal to the destination

* Used a queue for the BFS, a stack to process the last node for the console output

* Made a parent pointer for each node so I can track the parent, grandparent... origin route.

* Applied recursion for a more concise code. Me from months ago hated recursion, though but now that I know that I should prioritize the exit condition first, it has become easier (thanks, TOP)