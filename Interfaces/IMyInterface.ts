/**
 * Created by ekeu on 22/03/16.
 */
module IMyInterface {
    export interface IMyInterface {
        // some properties
        id: number;
        name: string;

        // some methods
        method(): void;
        methodWithReturnVal(): number;
        sum(nums: number[]): number;
    }
}
