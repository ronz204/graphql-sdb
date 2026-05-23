export class Token<T> {
  declare readonly _type: T;
  readonly #id = Symbol();

  constructor(readonly description: string) {};

  public toString() {
    return `Token(${this.description})`;
  };
};
