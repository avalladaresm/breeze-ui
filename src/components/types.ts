/**
 * Breeze-UI spacing options
 * @type xs - 0.5rem
 * @type sm - 1rem
 * @type md - 2rem
 * @type lg - 3rem
 * @type xl - 4rem
 * @type tw - any Tailwind CSS class, i.e. h-10, h-72 w-7, w-96
 */
export type BreezeSpacing = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Breeze-UI shadow options
 * @type none - "none"
 * @type xs - "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
 * @type sm - "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
 * @type md - "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
 * @type lg - "0 8px 10px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
 * @type xl - "0 12px 15px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
 * @type inner - "inset 0px 2px 4px 0px rgba(0, 0, 0, 0.12)"
 */
export type BreezeShadow = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "inner";

/**
 * Breeze-UI border radius options
 * @type none - 0px
 * @type xs - 0.125rem
 * @type sm - 0.25rem
 * @type md - 0.375rem
 * @type lg - 0.5rem
 * @type xl - 0.75rem
 * @type 2xl - 1rem
 * @type 3xl - 1.5rem
 * @type full - 9999px
 */
export type BreezeBorderRadius =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";

/**
 * Breeze-UI border radius sides options
 * By default, `allCorners` is selected
 * @type none - border radius is applied to non of the sides or corners
 * @type allCorners - border radius is applied to all of the corners
 * @type top - border radius is applied to the top the corners
 * @type bottom - border radius is applied to the bottom the corners
 * @type left - border radius is applied to the left the corners
 * @type right - border radius is applied to the right the corners
 * @type topRight - border radius is applied to the top right corner
 * @type bottomRight - border radius is applied to the bottom right corner
 * @type topLeft - border radius is applied to the top left corner
 * @type bottomLeft - border radius is applied to the bottom left corner
 */
export type BreezeRoundedSides =
  | "none"
  | "allCorners"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "topRight"
  | "bottomRight"
  | "topLeft"
  | "bottomLeft";

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

export interface ClassName {
  className?: string;
}

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
