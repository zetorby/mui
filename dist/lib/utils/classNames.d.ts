declare type Value = string | number | boolean | undefined | null;
declare type Mapping = {
    [key: string]: any;
};
declare type Argument = Value | Mapping | Argument[];
export declare function cx(...args: Argument[]): string;
export {};
