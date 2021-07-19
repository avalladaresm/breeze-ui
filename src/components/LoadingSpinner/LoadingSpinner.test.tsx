import { shallow } from "enzyme";
import LoadingSpinner from ".";

test("LoadingSpinner has correct custom size", () => {
  const size = "lg";
  const loadingSpinner = shallow(<LoadingSpinner size={size} />);
  expect(loadingSpinner.find("svg").hasClass("h-lg")).toBe(true);
});

test("LoadingSpinner has correct Tailwind CSS size", () => {
  const loadingSpinner = shallow(<LoadingSpinner size="tw" twSpacing="h-10" />);
  expect(loadingSpinner.find("svg").hasClass("h-10")).toBe(true);
});

test('LoadingSpinner should not display `twSpacing` value is `size` is not "tw"', () => {
  const loadingSpinner = shallow(<LoadingSpinner size="sm" twSpacing="h-10" />);
  expect(loadingSpinner.find("svg").hasClass("h-10")).toBe(false);
});

test("LoadingSpinner has correct color", () => {
  const color = "$dd9966";
  const loadingSpinner = shallow(<LoadingSpinner color={color} />);
  expect(loadingSpinner.find("svg").get(0).props.style).toHaveProperty(
    "color",
    color
  );
});
