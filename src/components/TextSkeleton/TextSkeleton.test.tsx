import { mount } from "enzyme";
import TextSkeleton from ".";
import colors from "../../utils/colors";

test("TextSkeleton shows correct number of lines", () => {
  const lines1 = 7;
  const lines2 = 29;
  const textSkeleton1 = mount(<TextSkeleton lines={lines1} />);
  const testSkeleton2 = mount(<TextSkeleton lines={lines2} />);
  expect(
    textSkeleton1.find("#text-skeleton-wrapper").children().length
  ).toEqual(lines1);
  expect(
    testSkeleton2.find("#text-skeleton-wrapper").children().length
  ).toEqual(lines2);
});

test("TextSkeleton shows correct width", () => {
  const lines1 = 3;
  const textSkeleton1 = mount(
    <TextSkeleton lines={lines1} linesWidths={["lg"]} />
  );
  const testSkeleton2 = mount(
    <TextSkeleton lines={lines1} linesWidths={["md", "4xl", "sm"]} />
  );
  const testSkeleton3 = mount(
    <TextSkeleton lines={lines1} linesWidths={["md", "4xl"]} />
  );
  expect(
    textSkeleton1.find("#text-skeleton-line0").hasClass("w-skeletonw-lg")
  ).toBe(true);
  expect(
    textSkeleton1.find("#text-skeleton-line1").hasClass("w-skeletonw-lg")
  ).toBe(true);
  expect(
    textSkeleton1.find("#text-skeleton-line2").hasClass("w-skeletonw-lg")
  ).toBe(true);

  expect(
    testSkeleton2.find("#text-skeleton-line0").hasClass("w-skeletonw-md")
  ).toBe(true);
  expect(
    testSkeleton2.find("#text-skeleton-line1").hasClass("w-skeletonw-4xl")
  ).toBe(true);
  expect(
    testSkeleton2.find("#text-skeleton-line2").hasClass("w-skeletonw-sm")
  ).toBe(true);

  expect(
    testSkeleton3.find("#text-skeleton-line2").hasClass("w-skeletonw-md")
  ).toBe(true);
});

test("TextSkeleton shows correct height", () => {
  const lines1 = 3;
  const textSkeleton1 = mount(
    <TextSkeleton lines={lines1} linesHeights={["lg"]} />
  );
  const testSkeleton2 = mount(
    <TextSkeleton lines={lines1} linesHeights={["md", "4xl", "sm"]} />
  );
  const testSkeleton3 = mount(
    <TextSkeleton lines={lines1} linesHeights={["md", "4xl"]} />
  );
  expect(
    textSkeleton1.find("#text-skeleton-line0").hasClass("h-skeletonh-lg")
  ).toBe(true);
  expect(
    textSkeleton1.find("#text-skeleton-line1").hasClass("h-skeletonh-lg")
  ).toBe(true);
  expect(
    textSkeleton1.find("#text-skeleton-line2").hasClass("h-skeletonh-lg")
  ).toBe(true);

  expect(
    testSkeleton2.find("#text-skeleton-line0").hasClass("h-skeletonh-md")
  ).toBe(true);
  expect(
    testSkeleton2.find("#text-skeleton-line1").hasClass("h-skeletonh-4xl")
  ).toBe(true);
  expect(
    testSkeleton2.find("#text-skeleton-line2").hasClass("h-skeletonh-sm")
  ).toBe(true);

  expect(
    testSkeleton3.find("#text-skeleton-line2").hasClass("h-skeletonh-md")
  ).toBe(true);
});

test("TextSkeleton shows correct color", () => {
  const lines = 3;
  const color1 = "#5b0dc9";
  const color2 = "#dc3478";
  const color3 = "#1949fe";
  const color4 = colors.emerald.base;
  const textSkeleton1 = mount(
    <TextSkeleton lines={lines} linesColors={[color1, color2, color4]} />
  );
  const testSkeleton2 = mount(
    <TextSkeleton lines={lines} linesColors={[color4, color3]} />
  );
  const testSkeleton3 = mount(
    <TextSkeleton lines={lines} linesColors={[color3]} />
  );
  expect(
    textSkeleton1.find("#text-skeleton-line0").get(0).props.style
  ).toHaveProperty("backgroundColor", color1);
  expect(
    textSkeleton1.find("#text-skeleton-line1").get(0).props.style
  ).toHaveProperty("backgroundColor", color2);
  expect(
    textSkeleton1.find("#text-skeleton-line2").get(0).props.style
  ).toHaveProperty("backgroundColor", color4);

  expect(
    testSkeleton2.find("#text-skeleton-line0").get(0).props.style
  ).toHaveProperty("backgroundColor", color4);
  expect(
    testSkeleton2.find("#text-skeleton-line1").get(0).props.style
  ).toHaveProperty("backgroundColor", color3);
  expect(
    testSkeleton2.find("#text-skeleton-line2").get(0).props.style
  ).toHaveProperty("backgroundColor", color4);

  expect(
    testSkeleton3.find("#text-skeleton-line2").get(0).props.style
  ).toHaveProperty("backgroundColor", color3);
});
