function Point(x, y, parent = undefined) {
  return { x, y, parent };
}

function Knight(origin, destination) {
  const listPath = [];
  return {
    origin,
    destination,
    listPath,
  };
}

function GameBoard(height = 8, width = 8) {
  const queue = [];
  let lastPoint;
  const bounds = { xmin: 0, xmax: width - 1, ymin: 0, ymax: height - 1 };

  function updateLastPoint(point) {
    this.lastPoint = point;
  }

  function getPointChildren(point) {
    /*
    this point will have a maximum of 8 children. coordinates are as follows:
    lu1 = x - 2, y + 1,
    lu2 = x - 1, y + 2,
    ru1 = x + 1, y + 2,
    ru2 = x + 2, y + 1,
    rd1 = x + 2, y - 1,
    rd2 = x + 1, y - 2,
    ld1 = x - 1, y - 2,
    ld2 = x - 2, y - 1
    each point is filtered to be within bounds and should not be visited
    */
    const { x, y } = point;
    const children = [
      [x - 2, y + 1],
      [x - 1, y + 2],
      [x + 1, y + 2],
      [x + 2, y + 1],
      [x + 2, y - 1],
      [x + 1, y - 2],
      [x - 1, y - 2],
      [x - 2, y - 1],
    ];
    return children.filter(
      (child) =>
        // x is between min and max x bounds
        child[0] <= bounds.xmax &&
        child[0] >= bounds.xmin &&
        // y is between min and max y bounds
        child[1] <= bounds.ymax &&
        child[1] >= bounds.ymin
    );
  }

  return {
    queue,
    lastPoint,
    updateLastPoint,
    getPointChildren,
  };
}

export { Point, Knight, GameBoard };
