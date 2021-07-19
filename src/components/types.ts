/**
 * default Breeze-ui spacing convention
 * @type xs - 0.5rem
 * @type sm - 1rem
 * @type md - 2rem
 * @type lg - 3rem
 * @type xl - 4rem
 * @type tw - custom Tailwind CSS class, i.e. h-10, h-72 w-7, w-96
 */
export type BreezeSpacing = "xs" | "sm" | "md" | "lg" | "xl";

export type BreezeColor = {
  [key in Color]: ColorTone;
};

interface ColorTone {
  superLight: string;
  light: string;
  base: string;
  dark: string;
  superDark: string;
}

/**
 * Color names according to Tailwind CSS color selection in v2.2.4
 */
type Color =
  | "blueGray"
  | "rose"
  | "pink"
  | "fuchsia"
  | "purple"
  | "violet"
  | "indigo"
  | "blue"
  | "sky"
  | "cyan"
  | "teal"
  | "emerald"
  | "green"
  | "lime"
  | "yellow"
  | "amber"
  | "orange"
  | "red"
  | "warmGray"
  | "trueGray"
  | "gray"
  | "coolGray";

/*
 * Utility types used to conditional set props base on entered value of other prop
 * https://stackoverflow.com/questions/56437759/typescript-utility-type-for-conditional-props-based-on-entered-value-of-other-p
 */
export type ConditionalProps<
  T,
  TKey extends keyof TCase,
  TCase extends Partial<T>
> =
  | Id<Omit<T, keyof TCase> & TCase>
  | Id<RemoveCommonValues<T, Pick<TCase, TKey>>>;
type RemoveCommonValues<T, TOmit> = {
  [P in keyof T]: TOmit extends Record<P, infer U> ? Exclude<T[P], U> : T[P];
};
type Omit<T, K extends PropertyKey> = Pick<T, Exclude<keyof T, K>>; // not needed in 3.5
// eslint-disable-next-line
type Id<T> = {} & { [P in keyof T]: T[P] }; // flatens out the types to make them more readable can be removed
