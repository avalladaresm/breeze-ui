import { mount } from "enzyme";
import Avatar from ".";
import colors from "../../utils/colors";

test("Avatar renders correctly", () => {
  const button = mount(<Avatar />);
  expect(button.find("#avatar"));
});

test("Avatar should have correct size", () => {
  const avatar1 = mount(<Avatar size="xs" />);
  const avatar2 = mount(<Avatar size="sm" />);
  const avatar3 = mount(<Avatar size="md" />);
  const avatar4 = mount(<Avatar size="lg" />);
  const avatar5 = mount(<Avatar size="xl" />);
  const avatar6 = mount(<Avatar size="2xl" />);
  const avatar7 = mount(<Avatar size="3xl" />);
  const avatar8 = mount(<Avatar size="4xl" />);
  const avatar9 = mount(<Avatar size="5xl" />);
  const avatar10 = mount(<Avatar size="6xl" />);
  const avatar11 = mount(<Avatar size="7xl" />);

  expect(avatar1.find("#avatar>span").hasClass("h-avatar-xs")).toBe(true);
  expect(avatar2.find("#avatar>span").hasClass("h-avatar-sm")).toBe(true);
  expect(avatar3.find("#avatar>span").hasClass("h-avatar-md")).toBe(true);
  expect(avatar4.find("#avatar>span").hasClass("h-avatar-lg")).toBe(true);
  expect(avatar5.find("#avatar>span").hasClass("h-avatar-xl")).toBe(true);
  expect(avatar6.find("#avatar>span").hasClass("h-avatar-2xl")).toBe(true);
  expect(avatar7.find("#avatar>span").hasClass("h-avatar-3xl")).toBe(true);
  expect(avatar8.find("#avatar>span").hasClass("h-avatar-4xl")).toBe(true);
  expect(avatar9.find("#avatar>span").hasClass("h-avatar-5xl")).toBe(true);
  expect(avatar10.find("#avatar>span").hasClass("h-avatar-6xl")).toBe(true);
  expect(avatar11.find("#avatar>span").hasClass("h-avatar-7xl")).toBe(true);
});

test("Avatar should have correct icon and background color", () => {
  const bgcolor1 = colors.fuchsia.base;
  const iconcolor1 = colors.fuchsia.superLight;
  const bgcolor2 = "#996611";
  const iconcolor2 = "#66dd99";

  const avatar1 = mount(<Avatar bgColor={bgcolor1} iconColor={iconcolor1} />);
  const avatar2 = mount(<Avatar bgColor={bgcolor2} iconColor={iconcolor2} />);

  expect(avatar1.find("#avatar>span").get(0).props.style).toHaveProperty(
    "backgroundColor",
    bgcolor1
  );
  expect(avatar1.find("#avatar>span").get(0).props.style).toHaveProperty(
    "color",
    iconcolor1
  );
  expect(avatar2.find("#avatar>span").get(0).props.style).toHaveProperty(
    "backgroundColor",
    bgcolor2
  );
  expect(avatar2.find("#avatar>span").get(0).props.style).toHaveProperty(
    "color",
    iconcolor2
  );
});

test("Avatar should have correct border radius", () => {
  const borderradius1 = "none";
  const borderradius2 = "xs";
  const borderradius3 = "sm";
  const borderradius4 = "md";
  const borderradius5 = "lg";
  const borderradius6 = "xl";
  const borderradius7 = "2xl";
  const borderradius8 = "3xl";
  const borderradius9 = "full";

  const avatar1 = mount(<Avatar roundedRadius={borderradius1} />);
  const avatar2 = mount(<Avatar roundedRadius={borderradius2} />);
  const avatar3 = mount(<Avatar roundedRadius={borderradius3} />);
  const avatar4 = mount(<Avatar roundedRadius={borderradius4} />);
  const avatar5 = mount(<Avatar roundedRadius={borderradius5} />);
  const avatar6 = mount(<Avatar roundedRadius={borderradius6} />);
  const avatar7 = mount(<Avatar roundedRadius={borderradius7} />);
  const avatar8 = mount(<Avatar roundedRadius={borderradius8} />);
  const avatar9 = mount(<Avatar roundedRadius={borderradius9} />);

  expect(avatar1.find("#avatar>span").hasClass("rounded-none")).toBe(true);
  expect(avatar2.find("#avatar>span").hasClass("rounded-xs")).toBe(true);
  expect(avatar3.find("#avatar>span").hasClass("rounded-sm")).toBe(true);
  expect(avatar4.find("#avatar>span").hasClass("rounded-md")).toBe(true);
  expect(avatar5.find("#avatar>span").hasClass("rounded-lg")).toBe(true);
  expect(avatar6.find("#avatar>span").hasClass("rounded-xl")).toBe(true);
  expect(avatar7.find("#avatar>span").hasClass("rounded-2xl")).toBe(true);
  expect(avatar8.find("#avatar>span").hasClass("rounded-3xl")).toBe(true);
  expect(avatar9.find("#avatar>span").hasClass("rounded-full")).toBe(true);
});

test("Avatar should have correct initials", () => {
  const initials1 = "AV";
  const initials2 = "BREEZE-UI";

  const avatar1 = mount(<Avatar placeholder="initials" initials={initials1} />);
  const avatar2 = mount(<Avatar placeholder="initials" initials={initials2} />);
  const avatar3 = mount(<Avatar initials={initials1} />);

  expect(avatar1.find("#avatar>span>span").text()).toEqual(initials1);
  expect(avatar2.find("#avatar>span>span").text()).toEqual(
    initials2.slice(0, 2)
  );
  expect(avatar3.find("#avatar>span>span")).toHaveLength(0);
});

test("Avatar should render an icon correctly", () => {
  const icon = (
    <svg
      className="text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );

  const avatar1 = mount(<Avatar placeholder="icon" icon={icon} />);
  const avatar2 = mount(
    <Avatar placeholder="initials" icon={icon} initials="BR" />
  );

  expect(avatar1.find("#avatar>span>svg")).toHaveLength(1);
  expect(avatar2.find("#avatar>span>svg")).toHaveLength(0);
});
