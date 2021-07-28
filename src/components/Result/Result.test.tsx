import { mount } from "enzyme";
import Result from ".";
import colors from "../../utils/colors";

test("Result renders correctly", () => {
  const button = mount(<Result title="Result title" />);
  expect(button.find("#result"));
});

test("Result should have a title and a description", () => {
  const result1 = mount(<Result title="Result title" />);
  const result2 = mount(
    <Result title="Result title" description="Result description" />
  );

  expect(result1.find("#result>div>div>#resultTitle").text()).toEqual(
    "Result title"
  );
  expect(result2.find("#result>div>div>#resultTitle").text()).toEqual(
    "Result title"
  );
  expect(result2.find("#result>div>div>#resultDescription").text()).toEqual(
    "Result description"
  );
});

test("Result should have correct background and border color according to type", () => {
  const result1 = mount(
    <Result title="Result title" withBg={true} withBorder={true} />
  );
  const result2 = mount(
    <Result title="Result title" type="info" withBg={true} withBorder={true} />
  );
  const result3 = mount(
    <Result
      title="Result title"
      type="success"
      withBg={true}
      withBorder={true}
    />
  );
  const result4 = mount(
    <Result
      title="Result title"
      type="warning"
      withBg={true}
      withBorder={false}
    />
  );
  const result5 = mount(
    <Result
      title="Result title"
      type="danger"
      withBg={false}
      withBorder={true}
    />
  );
  const result6 = mount(
    <Result
      title="Result title"
      type="danger"
      withBg={true}
      withBorder={true}
    />
  );
  const result7 = mount(
    <Result
      title="Result title"
      type="warning"
      withBg={true}
      withBorder={true}
    />
  );

  expect(result1.find("#result").get(0).props.style).toHaveProperty(
    "backgroundColor",
    colors.blue.superLight
  );
  expect(result1.find("#result").get(0).props.style).toHaveProperty(
    "borderColor",
    colors.blue.light
  );

  expect(result2.find("#result").get(0).props.style).toHaveProperty(
    "backgroundColor",
    colors.blue.superLight
  );
  expect(result2.find("#result").get(0).props.style).toHaveProperty(
    "borderColor",
    colors.blue.light
  );

  expect(result3.find("#result").get(0).props.style).toHaveProperty(
    "backgroundColor",
    colors.green.superLight
  );
  expect(result3.find("#result").get(0).props.style).toHaveProperty(
    "borderColor",
    colors.green.light
  );

  expect(result4.find("#result").get(0).props.style).toHaveProperty(
    "backgroundColor",
    colors.amber.superLight
  );
  expect(result4.find("#result").get(0).props.style).toHaveProperty(
    "borderColor",
    "#fff"
  );

  expect(result5.find("#result").get(0).props.style).toHaveProperty(
    "backgroundColor",
    "#fff"
  );
  expect(result5.find("#result").get(0).props.style).toHaveProperty(
    "borderColor",
    colors.red.light
  );

  expect(result6.find("#result").get(0).props.style).toHaveProperty(
    "backgroundColor",
    colors.red.superLight
  );
  expect(result6.find("#result").get(0).props.style).toHaveProperty(
    "borderColor",
    colors.red.light
  );

  expect(result7.find("#result").get(0).props.style).toHaveProperty(
    "backgroundColor",
    colors.amber.superLight
  );
  expect(result7.find("#result").get(0).props.style).toHaveProperty(
    "borderColor",
    colors.amber.light
  );
});
