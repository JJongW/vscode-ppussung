import { PetColor } from '../../common/types';
import { BasePetType } from '../basepettype';
import { States } from '../states';

export class Ppussung extends BasePetType {
    label = 'ppussung';
    static possibleColors = [
        PetColor.white,
    ];
    sequence = {
        startingState: States.lie,
        sequenceStates: [ 
            {
                state: States.lie,
                possibleNextStates: [
                    States.walkRight,
                    States.runRight,
                    States.sitIdle,
                ],
            },
            {
                state: States.sitIdle,
                possibleNextStates: [States.walkRight, States.runRight],
            },
            {
                state: States.walkRight,
                possibleNextStates: [States.walkLeft, States.runLeft],
            },
            {
                state: States.runRight,
                possibleNextStates: [States.walkLeft, States.runLeft],
            },
            {
                state: States.walkLeft,
                possibleNextStates: [
                    States.sitIdle,
                    States.lie,
                    States.walkRight,
                    States.runRight,
                ],
            },
            {
                state: States.runLeft,
                possibleNextStates: [
                    States.sitIdle,
                    States.lie,
                    States.walkRight,
                    States.runRight,
                ],
            },
            {
                state: States.chase,
                possibleNextStates: [States.idleWithBall],
            },
            {
                state: States.idleWithBall,
                possibleNextStates: [
                    States.walkRight,
                    States.walkLeft,
                    States.runLeft,
                    States.runRight,
                ],
            },
        ],
    };
    get emoji(): string {
        return '🍀';
    }
    get hello(): string {
        return `hi student!`;
    }
}

export const PPUSSUNG_NAMES: ReadonlyArray<string> = [
    'ssua',
];
