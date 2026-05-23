type Factory<T> = () => T;

interface Binding<T> {
  factory: Factory<T>;
  singleton: boolean;
};
