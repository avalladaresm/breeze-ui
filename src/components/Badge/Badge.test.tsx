import { shallow } from "enzyme";
import Badge from ".";
import colors from "../../utils/colors";
import { BreezeRoundedSides } from "../types";

test("Badge has a label", () => {
  const label = "Click me!";
  const button = shallow(<Badge label={label} />);
  expect(button.find("#badge"));
});

test("Badge should have correct type", () => {
  const blue = "bg-blue-100 text-blue-800";
  const green = "bg-green-100 text-green-800";
  const amber = "bg-amber-300 text-amber-800";
  const red = "bg-red-100 text-red-800";

  const badge1 = shallow(<Badge label="Click me!" type="default" />);
  const badge2 = shallow(<Badge label="Click me!" type="success" />);
  const badge3 = shallow(<Badge label="Click me!" type="warning" />);
  const badge4 = shallow(<Badge label="Click me!" type="danger" />);

  expect(badge1.find("#badge").hasClass(blue)).toBe(true);
  expect(badge2.find("#badge").hasClass(green)).toBe(true);
  expect(badge3.find("#badge").hasClass(amber)).toBe(true);
  expect(badge4.find("#badge").hasClass(red)).toBe(true);
});

test("Badge should have correct background color", () => {
  const color1 = "#5b0dc9";
  const color2 = "#dc3478";
  const color3 = "#1949fe";
  const color4 = colors.emerald.base;

  const badge1 = shallow(<Badge label="Click me!" bgColor={color1} />);
  const badge2 = shallow(<Badge label="Click me!" bgColor={color2} />);
  const badge3 = shallow(<Badge label="Click me!" bgColor={color3} />);
  const badge4 = shallow(<Badge label="Click me!" bgColor={color4} />);

  expect(badge1.find("#badge").get(0).props.style).toHaveProperty(
    "backgroundColor",
    color1
  );
  expect(badge2.find("#badge").get(0).props.style).toHaveProperty(
    "backgroundColor",
    color2
  );
  expect(badge3.find("#badge").get(0).props.style).toHaveProperty(
    "backgroundColor",
    color3
  );
  expect(badge4.find("#badge").get(0).props.style).toHaveProperty(
    "backgroundColor",
    color4
  );
});

test("Badge should have correct text color", () => {
  const color1 = "#5b0dc9";
  const color2 = "#dc3478";
  const color3 = "#1949fe";
  const color4 = colors.emerald.base;

  const badge1 = shallow(<Badge label="Click me!" textColor={color1} />);
  const badge2 = shallow(<Badge label="Click me!" textColor={color2} />);
  const badge3 = shallow(<Badge label="Click me!" textColor={color3} />);
  const badge4 = shallow(<Badge label="Click me!" textColor={color4} />);

  expect(badge1.find("#badge").get(0).props.style).toHaveProperty(
    "color",
    color1
  );
  expect(badge2.find("#badge").get(0).props.style).toHaveProperty(
    "color",
    color2
  );
  expect(badge3.find("#badge").get(0).props.style).toHaveProperty(
    "color",
    color3
  );
  expect(badge4.find("#badge").get(0).props.style).toHaveProperty(
    "color",
    color4
  );
});

test("Badge should have correct round radius", () => {
  const roundedRadius1 = "none";
  const roundedRadius2 = "xs";
  const roundedRadius3 = "sm";
  const roundedRadius4 = "md";
  const roundedRadius5 = "lg";
  const roundedRadius6 = "xl";
  const roundedRadius7 = "2xl";
  const roundedRadius8 = "3xl";

  const badge1 = shallow(
    <Badge label="Click me!" roundedRadius={roundedRadius1} />
  );
  const badge2 = shallow(
    <Badge label="Click me!" roundedRadius={roundedRadius2} />
  );
  const badge3 = shallow(
    <Badge label="Click me!" roundedRadius={roundedRadius3} />
  );
  const badge4 = shallow(
    <Badge label="Click me!" roundedRadius={roundedRadius4} />
  );
  const badge5 = shallow(
    <Badge label="Click me!" roundedRadius={roundedRadius5} />
  );
  const badge6 = shallow(
    <Badge label="Click me!" roundedRadius={roundedRadius6} />
  );
  const badge7 = shallow(
    <Badge label="Click me!" roundedRadius={roundedRadius7} />
  );
  const badge8 = shallow(
    <Badge label="Click me!" roundedRadius={roundedRadius8} />
  );

  expect(badge1.find("#badge").hasClass(`rounded-${roundedRadius1}`)).toBe(
    true
  );
  expect(badge2.find("#badge").hasClass(`rounded-${roundedRadius2}`)).toBe(
    true
  );
  expect(badge3.find("#badge").hasClass(`rounded-${roundedRadius3}`)).toBe(
    true
  );
  expect(badge4.find("#badge").hasClass(`rounded-${roundedRadius4}`)).toBe(
    true
  );
  expect(badge5.find("#badge").hasClass(`rounded-${roundedRadius5}`)).toBe(
    true
  );
  expect(badge6.find("#badge").hasClass(`rounded-${roundedRadius6}`)).toBe(
    true
  );
  expect(badge7.find("#badge").hasClass(`rounded-${roundedRadius7}`)).toBe(
    true
  );
  expect(badge8.find("#badge").hasClass(`rounded-${roundedRadius8}`)).toBe(
    true
  );
});

test("Badge should have correct round radius per side", () => {
  const roundedSides1: BreezeRoundedSides[] = ["none"];
  const roundedSides2: BreezeRoundedSides[] = ["allCorners"];
  const roundedSides3: BreezeRoundedSides[] = ["bottomLeft", "bottomRight"];
  const roundedSides4: BreezeRoundedSides[] = ["bottomRight", "top"];
  const roundedSides5: BreezeRoundedSides[] = ["left", "topRight"];
  const roundedSides6: BreezeRoundedSides[] = ["right", "top"];
  const roundedSides7: BreezeRoundedSides[] = [
    "allCorners",
    "topLeft",
    "bottom"
  ];
  const roundedSides8: BreezeRoundedSides[] = [
    "none",
    "topRight",
    "allCorners"
  ];

  const badge1 = shallow(
    <Badge label="Click me!" roundedSides={roundedSides1} />
  );
  const badge2 = shallow(
    <Badge label="Click me!" roundedSides={roundedSides2} />
  );
  const badge3 = shallow(
    <Badge label="Click me!" roundedSides={roundedSides3} />
  );
  const badge4 = shallow(
    <Badge
      label="Click me!"
      roundedSides={roundedSides4}
      roundedRadius="none"
    />
  );
  const badge5 = shallow(
    <Badge label="Click me!" roundedSides={roundedSides5} />
  );
  const badge6 = shallow(
    <Badge label="Click me!" roundedSides={roundedSides6} />
  );
  const badge7 = shallow(
    <Badge label="Click me!" roundedSides={roundedSides7} />
  );
  const badge8 = shallow(
    <Badge label="Click me!" roundedSides={roundedSides8} />
  );

  expect(badge1.find("#badge").hasClass("rounded-none")).toBe(true);
  expect(badge2.find("#badge").hasClass("rounded-xl")).toBe(true);
  expect(badge3.find("#badge").hasClass("rounded-bl-xl rounded-br-xl")).toBe(
    true
  );
  expect(badge4.find("#badge").hasClass("rounded-none")).toBe(true);
  expect(badge5.find("#badge").hasClass("rounded-l-xl rounded-tr-xl")).toBe(
    true
  );
  expect(badge6.find("#badge").hasClass("rounded-r-xl rounded-t-xl")).toBe(
    true
  );
  expect(badge7.find("#badge").hasClass("rounded-xl")).toBe(true);
  expect(badge8.find("#badge").hasClass("rounded-none")).toBe(true);
});

test("Badge should have correct shadow", () => {
  const shadow1 = "none";
  const shadow2 = "xs";
  const shadow3 = "sm";
  const shadow4 = "md";
  const shadow5 = "lg";
  const shadow6 = "xl";
  const shadow7 = "inner";

  const badge1 = shallow(<Badge label="Click me!" shadow={shadow1} />);
  const badge2 = shallow(<Badge label="Click me!" shadow={shadow2} />);
  const badge3 = shallow(<Badge label="Click me!" shadow={shadow3} />);
  const badge4 = shallow(<Badge label="Click me!" shadow={shadow4} />);
  const badge5 = shallow(<Badge label="Click me!" shadow={shadow5} />);
  const badge6 = shallow(<Badge label="Click me!" shadow={shadow6} />);
  const badge7 = shallow(<Badge label="Click me!" shadow={shadow7} />);

  expect(badge1.find("#badge").hasClass(`shadow-${shadow1}`)).toBe(true);
  expect(badge2.find("#badge").hasClass(`shadow-${shadow2}`)).toBe(true);
  expect(badge3.find("#badge").hasClass(`shadow-${shadow3}`)).toBe(true);
  expect(badge4.find("#badge").hasClass(`shadow-${shadow4}`)).toBe(true);
  expect(badge5.find("#badge").hasClass(`shadow-${shadow5}`)).toBe(true);
  expect(badge6.find("#badge").hasClass(`shadow-${shadow6}`)).toBe(true);
  expect(badge7.find("#badge").hasClass(`shadow-${shadow7}`)).toBe(true);
});
