import { BreezeBorderRadius, BreezeRoundedSides } from "../components/types";

export const getRoundedTWClasses = (
  roundedSides: BreezeRoundedSides[],
  roundedRadius: BreezeBorderRadius = "xl"
) => {
  const _classes: string[] = [];
  const classes = roundedSides.map((rs, index) => {
    if (roundedRadius === "none") {
      roundedSides[index] !== "none" &&
        console.warn(
          `The \`${rs}\` type is not being used, you can remove it.`
        );
      return "rounded-none";
    } else {
      const _roundedRadius = `-${roundedRadius}`;
      switch (rs) {
        case "none":
          _classes.push("rounded-none");
          break;
        case "allCorners":
          _classes.push(`rounded${_roundedRadius}`);
          break;
        case "top":
          _classes.push(`rounded-t${_roundedRadius}`);
          break;
        case "bottom":
          _classes.push(`rounded-b${_roundedRadius}`);
          break;
        case "left":
          _classes.push(`rounded-l${_roundedRadius}`);
          break;
        case "right":
          _classes.push(`rounded-r${_roundedRadius}`);
          break;
        case "topRight":
          _classes.push(`rounded-tr${_roundedRadius}`);
          break;
        case "bottomRight":
          _classes.push(`rounded-br${_roundedRadius}`);
          break;
        case "topLeft":
          _classes.push(`rounded-tl${_roundedRadius}`);
          break;
        case "bottomLeft":
          _classes.push(`rounded-bl${_roundedRadius}`);
          break;
      }
      const purged = purgeUnnecessaryClasses(_classes);
      return purged;
    }
  });
  const uniqueClasses = [...new Set(classes.flat())];
  return uniqueClasses;
};

const purgeUnnecessaryClasses = (classes: string[]) => {
  const _classes = classes
    .map((c) => {
      switch (c) {
        case "rounded-none":
        case "rounded-xs":
        case "rounded-sm":
        case "rounded-md":
        case "rounded-lg":
        case "rounded-xl":
        case "rounded-2xl":
        case "rounded-3xl":
          return c;
      }
    })
    .filter((c) => c);
  return _classes.length > 0 ? _classes : classes;
};
