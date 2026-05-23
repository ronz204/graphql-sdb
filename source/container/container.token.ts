export type Factory<T> = () => T;

export interface Binding<T> {
  factory: Factory<T>;
  singleton: boolean;
};

export class Token<T> {
  declare readonly _type: T;
  readonly #id = Symbol();

  constructor(readonly description: string) {};

  public toString() {
    return `Token(${this.description})`;
  };
};
