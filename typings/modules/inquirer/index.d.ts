// Generated by typings
// Source: https://raw.githubusercontent.com/typed-typings/npm-es6-promise/fb04188767acfec1defd054fc8024fafa5cd4de7/dist/es6-promise.d.ts
declare module '~inquirer~es6-promise' {
export interface Thenable <R> {
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void): Thenable<U>;
}

export class Promise <R> implements Thenable <R> {
  /**
   * If you call resolve in the body of the callback passed to the constructor,
   * your promise is fulfilled with result object passed to resolve.
   * If you call reject your promise is rejected with the object passed to resolve.
   * For consistency and debugging (eg stack traces), obj should be an instanceof Error.
   * Any errors thrown in the constructor callback will be implicitly passed to reject().
   */
  constructor (callback: (resolve : (value?: R | Thenable<R>) => void, reject: (error?: any) => void) => void);

  /**
   * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
   * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
   * Both callbacks have a single parameter , the fulfillment value or rejection reason.
   * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
   * If an error is thrown in the callback, the returned promise rejects with that error.
   *
   * @param onFulfilled called when/if "promise" resolves
   * @param onRejected called when/if "promise" rejects
   */
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Promise<U>;
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void): Promise<U>;

  /**
   * Sugar for promise.then(undefined, onRejected)
   *
   * @param onRejected called when/if "promise" rejects
   */
  catch <U> (onRejected?: (error: any) => U | Thenable<U>): Promise<U>;

  /**
   * Make a new promise from the thenable.
   * A thenable is promise-like in as far as it has a "then" method.
   */
  static resolve (): Promise<void>;
  static resolve <R> (value: R | Thenable<R>): Promise<R>;

  /**
   * Make a promise that rejects to obj. For consistency and debugging (eg stack traces), obj should be an instanceof Error
   */
  static reject <R> (error: any): Promise<R>;

  /**
   * Make a promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
   * the array passed to all can be a mixture of promise-like objects and other objects.
   * The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.
   */
  static all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>, T9 | Thenable<T9>, T10 | Thenable<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
  static all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>, T9 | Thenable<T9>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
  static all<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
  static all<T1, T2, T3, T4, T5, T6, T7>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;
  static all<T1, T2, T3, T4, T5, T6>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>]): Promise<[T1, T2, T3, T4, T5, T6]>;
  static all<T1, T2, T3, T4, T5>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>]): Promise<[T1, T2, T3, T4, T5]>;
  static all<T1, T2, T3, T4>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>]): Promise<[T1, T2, T3, T4]>;
  static all<T1, T2, T3>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>]): Promise<[T1, T2, T3]>;
  static all<T1, T2>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>]): Promise<[T1, T2]>;
  static all<T1>(values: [T1 | Thenable<T1>]): Promise<[T1]>;
  static all<TAll>(values: Array<TAll | Thenable<TAll>>): Promise<TAll[]>;

  /**
   * Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.
   */
  static race <R> (promises: (R | Thenable<R>)[]): Promise<R>;
}

/**
 * The polyfill method will patch the global environment (in this case to the Promise name) when called.
 */
export function polyfill (): void;
}

// Generated by typings
// Source: https://raw.githubusercontent.com/types/npm-inquirer/5da55e45ae8248194cfebc8191d540f2202ad8cb/lib/inquirer.d.ts
declare module 'inquirer' {
import { Promise } from '~inquirer~es6-promise';

export function restoreDefaultPrompts (): void;

/**
 * Expose helper functions on the top level for easiest usage by common users
 * @param name
 * @param prompt
 */
export function registerPrompt (name: string, prompt: PromptModule): void;
/**
 * Create a new self-contained prompt module.
 */
export function createPromptModule (): PromptModule;
/**
 * Public CLI helper interface
 * @param questions Questions settings array
 * @param cb Callback being passed the user answers
 * @return
 */
export function prompt (questions: Questions): Promise<Answers>;

export var prompts: Prompts;
export var Separator: objects.SeparatorStatic;

export var ui: {
    BottomBar: UI.BottomBar;
    Prompt: UI.Prompt;
}

export type Prompts = { [name: string]: PromptModule };
export type ChoiceType = string | objects.ChoiceOption | objects.Separator;
export type Questions = Question | Question[];

export interface PromptModule {
  (questions: Questions, cb: (answers: Answers) => any): UI.Prompt;
  /**
   * Register a prompt type
   * @param name Prompt type name
   * @param prompt Prompt constructor
   */
  registerPrompt (name: string, prompt: PromptModule): UI.Prompt;
  /**
   * Register the defaults provider prompts
   */
  restoreDefaultPrompts(): void;
}

export interface Question {
  /**
   * Type of the prompt. Possible values:
   *
   * - input
   * - confirm
   * - list
   * - rawlist
   * - password
   *
   * @defaults: 'input'
   */
  type?: string;
  /**
   * The name to use when storing the answer in the anwers hash.
   */
  name?: string;
  /**
   * The question to print. If defined as a function,
   * the first parameter will be the current inquirer session answers.
   */
  message?: string | ((answers: Answers) => string);
  /**
   * Default value(s) to use if nothing is entered, or a function that returns the default value(s).
   * If defined as a function, the first parameter will be the current inquirer session answers.
   */
  default?: any | ((answers: Answers) => any);
  /**
   * Choices array or a function returning a choices array. If defined as a function,
   * the first parameter will be the current inquirer session answers.
   * Array values can be simple strings, or objects containing a name (to display) and a value properties
   * (to save in the answers hash). Values can also be a Separator.
   */
  choices?: ChoiceType[] | ((answers: Answers) => ChoiceType[]);
  /**
   * Receive the user input and should return true if the value is valid, and an error message (String)
   * otherwise. If false is returned, a default error message is provided.
   */
  validate? (input: string): boolean | string;
  /**
   * Receive the user input and return the filtered value to be used inside the program.
   * The value returned will be added to the Answers hash.
   */
  filter? (input: string): string;
  /**
   * Receive the current user answers hash and should return true or false depending on whether or
   * not this question should be asked. The value can also be a simple boolean.
   */
  when?: boolean | ((answers: Answers) => boolean);
  paginated?: boolean;
}

/**
 * A key/value hash containing the client answers in each prompt.
 */
export interface Answers {
    [key: string]: string|boolean;
}

export namespace UI {
  /**
   * Base interface class other can inherits from
   */
  export class Prompt extends BaseUI <Prompts> {
    constructor (promptModule: Prompts);
    /**
     * Once all prompt are over
     */
    onCompletion (): void;
    processQuestion (question: Question): any;
    fetchAnswer (question: Question): any;
    setDefaultType (question: Question): any;
    filterIfRunnable (question: Question): any;
  }

  /**
   * Sticky bottom bar user interface
   */
  export class BottomBar extends BaseUI <BottomBarOption> {
    constructor (opt?: BottomBarOption);
    /**
     * Render the prompt to screen
     */
    render (): this;
    /**
     * Update the bottom bar content and rerender
     * @param bottomBar Bottom bar content
     */
    updateBottomBar (bottomBar: string): this;
    /**
     * Rerender the prompt
     */
    writeLog (data: any): this;
    /**
     * Make sure line end on a line feed
     * @param str Input string
     * @return The input string with a final line feed
     */
    enforceLF (str: string): string;
    /**
     * Helper for writing message in Prompt
     * @param message The message to be output
     */
    write (message: string): void;
  }

  export interface BottomBarOption {
      bottomBar?: string;
  }

  /**
   * Base interface class other can inherits from
   */
  export class BaseUI<TOpt> {
    constructor (opt: TOpt);
    /**
     * Handle the ^C exit
     * @return {null}
     */
    onForceClose (): void;
    /**
     * Close the interface and cleanup listeners
     */
    close (): void;
    /**
     * Handle and propagate keypress events
     */
    onKeypress (s: string, key: Key): void;
  }

  export interface Key {
    sequence: string;
    name: string;
    meta: boolean;
    shift: boolean;
    ctrl: boolean;
  }
}

export namespace objects {
  /**
   * Choice object
   * Normalize input as choice object
   * @constructor
   * @param {String|Object} val  Choice value. If an object is passed, it should contains
   *                             at least one of `value` or `name` property
   */
  export interface Choice {
    new (str: string): Choice;
    new (separator: Separator): Choice;
    new (option: ChoiceOption): Choice;
  }

  export interface ChoiceOption {
    name?: string;
    value?: string;
    type?: string;
    extra?: any;
    key?: string;
    checked?: boolean;
    disabled?: string | ((answers: Answers) => any);
  }

  export interface SeparatorStatic {
    /**
     * Helper function returning false if object is a separator
     * @param obj object to test against
     * @return `false` if object is a separator
     */
    exclude (obj: any): boolean;
  }

  /**
   * Separator object
   * Used to space/separate choices group
   * @constructor
   * @param {String} line   Separation line content (facultative)
   */
  export interface Separator {
    type: string;
    line: string;
    /**
     * Stringify separator
     * @return {String} the separator display string
     */
    toString(): string;
  }
}
}
