import * as b from 'bobril';
import * as s from './select';
export interface IValidator {
    validate: <TValue>(value: TValue) => boolean;
}
export declare function input<TValue>(label: string, value: TValue, onChange: (value: TValue) => void, help?: string): b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
export declare function date(label: string, value: Date, onChange: (value: Date) => void, help?: string): b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
export declare function time(label: string, value: Date, onChange: (value: Date) => void, help?: string): b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
export declare function dateTime(label: string, value: Date, onChange: (value: Date) => void, help?: string): b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
export interface IData {
    label: string;
    value: number;
    onChange: (value: number) => void;
    validatiors?: IValidator[];
}
export interface ICtx extends b.IBobrilCtx {
    data: IData;
}
export declare function numeric(label: string, value: number, onChange: (value: number) => void, validatiors?: IValidator[], help?: string): b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
export declare function password<TValue>(label: string, value: TValue, onChange: (value: TValue) => void, error: string, shouldHaveFocus?: boolean, help?: string): b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
export { IKeyValue } from './select';
export declare function select(label: string, items: s.IKeyValue<string, string>[], selectedItemKey: string, onChange: s.onChange, isDisabled?: boolean, help?: string): b.IBobrilNodeWithTag | b.IBobrilNodeWithComponent | b.IBobrilNodeWithChildren;
export declare function readOnly(label: string, value: string, help?: string): b.IBobrilNode;
