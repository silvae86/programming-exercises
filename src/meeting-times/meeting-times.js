/**
 * Adapted from here
 * https://www.glassdoor.com/Interview/Given-a-list-of-schedules-provide-a-list-of-times-that-are-available-for-a-meeting-Example-input-4-5-6-10-QTN_1708695.htm
 *
 * Given a list of schedules, provide a list of times that are  available for a meeting
 * Example input: [ [[4,5],[6,10],[12,14]], [[4,5],[5,9],[13,16]], [[11,14]] ] Example Output: [[0,4],[11,12],[16,23]]
 *
 * My interpretation of this is that the output is wrong. If the input contains all slots already occupied, [11,12]
 * can never be a valid slot, because person 3 is not available at that time. I modified the second element of the
 * output array to be [10,11] because of that.
 *
 * @param schedules
 */

function meetingTimes(schedules) {

    const START = 0;
    const END = 1;
    let startOfDay = 0;
    let endOfDay = 23;


    if (schedules.length === 0) {
        return [[0, 23]];
    } else {
        let peek = function (stack) {
            return stack[stack.length - 1];
        };

        let sortByStart = function (scheduleA, scheduleB) {
            const startA = scheduleA[0];
            const startB = scheduleB[0];

            return startA - startB;
        };

        let flatten = function (schedules) {
            const allSlots = [];
            for (let i = 0; i < schedules.length; i++) {
                let slots = schedules[i];
                for (let j = 0; j < slots.length; j++) {
                    allSlots.push(slots[j]);
                }
            }
            return allSlots;
        };

        schedules = flatten(schedules);
        schedules = schedules.sort(sortByStart);

        let overlapStack = [];
        overlapStack.push(schedules[0]);

        for (let i = 1; i < schedules.length; i++) {
            let pushedInterval = peek(overlapStack);
            if (schedules[i][START] <= pushedInterval[END] && schedules[i][END] >= pushedInterval[END]) {
                pushedInterval = overlapStack.pop();
                pushedInterval[END] = schedules[i][END];
                overlapStack.push(pushedInterval);
            } else {
                overlapStack.push(schedules[i]);
            }
        }

        let freeSlots = [];
        let startOfFreeSlot = startOfDay;
        overlapStack = overlapStack.reverse();
        let lastTakenSlot = overlapStack[0];

        while (overlapStack.length) {
            let takenInterval = overlapStack.pop();
            let freeSlot = [startOfFreeSlot, takenInterval[START]];
            startOfFreeSlot = takenInterval[END];
            freeSlots.push(freeSlot);
        }

        if (freeSlots.length && freeSlots[freeSlots.length - 1][END] !== endOfDay) {
            freeSlots.push([lastTakenSlot[END], endOfDay]);
        }

        return freeSlots;
    }
}

exports.meetingTimes = meetingTimes;
