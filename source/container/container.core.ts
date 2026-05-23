import { Token } from "./container.token";

export class Container {
  private bindings = new Map<Token<unknown>, Binding<unknown>>();
  private cache = new Map<Token<unknown>, unknown>();
  private resolving = new Set<Token<unknown>>();

  public bind<T>(token: Token<T>, factory: Factory<T>, singleton = true): this {
    this.bindings.set(token as Token<unknown>, { factory, singleton });
    return this;
  };

  public resolve<T>(token: Token<T>): T {
    const key = token as Token<unknown>;

    if (this.cache.has(key)) return this.cache.get(key) as T;

    if (this.resolving.has(key))
      throw new Error(`[Container] Dependencia circular detectada: ${token}`);

    const binding = this.bindings.get(key);

    if (!binding)
      throw new Error(`[Container] Sin binding registrado para: ${token}`);

    this.resolving.add(key);

    try {
      const instance = binding.factory() as T;
      if (binding.singleton) this.cache.set(key, instance);
      return instance;
    } finally {
      this.resolving.delete(key);
    };
  };

  public override<T>(token: Token<T>, factory: Factory<T>, singleton?: boolean): this {
    const existing = this.bindings.get(token as Token<unknown>);
    this.cache.delete(token as Token<unknown>);
    return this.bind(token, factory, singleton ?? existing?.singleton ?? true);
  };
};
