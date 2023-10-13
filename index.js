import { Point, Knight, GameBoard } from "./gameObects.js";

function levelOrder(knight, gameboard) {
  const current = gameboard.queue.shift();
  gameboard.updateLastPoint(current);

  if (knight.destination.x === current.x && knight.destination.y === current.y)
    return;

  // find children of current node, assign current as parent
  // filter any point that may already be in stack
  const children = gameboard
    .getPointChildren(current)
    .map((child) => Point(child[0], child[1], current));
  gameboard.queue = gameboard.queue.concat(children);
  levelOrder(knight, gameboard);
}

function readResults(current, stack = []) {
  if (!current) return stack;

  stack.push([current.x, current.y]);
  readResults(current.parent, stack);
  return stack;
}

function knightMoves(origin, destination) {
  const gameboard = GameBoard();
  const knight = Knight(Point(...origin), Point(...destination));
  gameboard.queue.push(knight.origin);
  levelOrder(knight, gameboard);

  // process lastPoint
  const results = readResults(gameboard.lastPoint);
  console.log(`You made it in ${results.length - 1} moves! Here's your path:`);
  while (results.length > 0) {
    const point = results.pop();
    console.log(point);
  }
}

knightMoves([3, 3], [4, 3]);
knightMoves([0, 0], [3, 3]);
knightMoves([0, 0], [7, 7]);
