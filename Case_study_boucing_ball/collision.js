function Collision(ball, gameObject) {
    let bottomOfBall = ball.position.y + ball.size;
    let topOfBall = ball.position.y;

    let topOfOject = gameObject.position.y;
    let leftSideOfObject = gameObject.position.x;
    let rightSideOfObject = gameObject.position.x + gameObject.width;
    let bottomOfObject = gameObject.position.y + gameObject.height;

    if (bottomOfBall>= topOfHand
        && topOfBall <= bottomOfObject
        && ball.position.x >= leftSideOfObject
        && ball.position.x + ball.size <= rightSideOfObject) {
        return true;
    }else {
        return false;
    }
}