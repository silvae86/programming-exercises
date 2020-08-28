// Credits to https://www.youtube.com/watch?v=VNbkzsnllsU
// for explaining this in a manner that I could understand.
// Coding and interpretation by github.com/silvae86

// this algorithm has a complexity of O(n), because every element is
// pushed and popped to the stacks exactly once.

const peek = function (stack) {
    return stack[stack.length - 1];
};

/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function (heights) {

    // we start by creating 2 stacks, which will record:,
    // Sp:
    // The position of a bar with a higher height than the tallest one
    // found so far in each expansion to the right...
    //
    // Sh:
    // ...and when we find it, we record the the height of that bar.

    // These two stacks always have the same length, because when we push
    // into one, we also push into the other. pops are synchronized as well.
    // (the 2 stacks could even be replaced by a single stack, pushing and popping
    // structures containing the height and position of each pushed bar).
    let Sp = [];
    let Sh = [];
    let maxArea = 0;
    let pos = 0

    // for each bar, we start our search...
    for (; pos < heights.length; pos++) {
        let height = heights[pos];

        if (Sp.length === 0 && Sh.length === 0) {
            // if the stack is empty, we push to it, opening "a new pending problem",
            // for which we need a future boundary, which will be the first downward
            // bar that we find in the search.

            Sp.push(pos);
            Sh.push(height);
        } else if (height > peek(Sh)) {
            // we find a bar that is larger than the one at the top of the stack
            // (which is always the highest we found so far since the last position that was pushed)
            // We push it, again creating a new pending problem
            Sp.push(pos);
            Sh.push(height);
        } else {
            let lastSp = null;

            // A bar is smaller than the top of the stack.
            // from now on, we will only lose area if we continue pushing,
            // because the current bar will always be our upper limit.
            // this means that we need to "close the pending problems"
            // by calculating the areas formed by all bars pushed
            // until now.
            while (height <= peek(Sh) && Sh.length > 0 && Sp.length > 0) {
                // We calculate the area formed by the height of the last pushed bar
                // (peek(Sh)) -- last pushed bar === "last pending problem"
                //
                //
                // times the difference between the current position (pos) and
                // the position from where that bar was pushed (peek(Sp)).
                //
                const area = peek(Sh) * (pos - peek(Sp));

                // if the area is larger, we update the maximum area found so far
                if (area > maxArea) {
                    maxArea = area;
                }

                //(we save the last position because after all pending problems are done
                // we will have to update the height of the first problem that we cannot
                // solve with the height of the current bar.
                // we pop the stacks because the bar's area is calculated, and the problem is closed.
                lastSp = Sp.pop();
                Sh.pop();

                // move on to the next pending problem, until we find a bar
                // larger than the current one or the stacks are empty...
            }

            // we moved back until finding the first bar that is smaller than the current one.
            // we ALSO popped the last bar that is the same of larger than the current one.
            // we need to push it back, but with its height modified to the height of the current bar
            // because the current bar is the top height limit.

            // example:
            // histogram is
            // 2 1 5 6 2 3

            // 1. Say, we are in the 4 position (0 base index) o of the histogram, with height 2.
            // 2. moving back, the first bar smaller than 2 is h=1, with height 1.
            // 3. We popped bar 5 at the end of the cycle, and our current bar has height 2 (step 1)
            // 4. We need to push the position of the 5-height-bar again
            // 5. Because the maximum height is limited by the height of the current bar, we "change" the height of the
            //    5-bar to 2 (the current height). This way, the rectangle from pos=2 to pos=4 will now
            //    have a height of 2.
            if (lastSp === null)
                Sp.push(pos);
            else
                // if there was no last popped bar, we push in the height of the current one.
                Sp.push(lastSp);

            // the current height is always the maximum height attainable within the space [peek(Sp): currentBar].
            // Because we popped all bars taller than the current bar in the last cycle, the smallest bar has to be the current one!
            Sh.push(height);
        }
    }

    // the stacks may have some unsolved problems still... lets clean them up.
    while (Sp.length > 0 && Sh.length > 0) {
        let area = Sh.pop() * (pos - Sp.pop());
        if (area > maxArea) {
            maxArea = area;
        }
    }

    return maxArea;
};

exports.largestRectangleArea = largestRectangleArea;

