import { shallow } from "enzyme"
import Button from "."

test("Button has a label", () => {
  const button = shallow(<Button type="button" label="Click me!" />)
  expect(button.text()).toEqual("Click me!")
})

test("Button is disabled", () => {
  const button = shallow(<Button type="button" label="Click me!" disabled />)
  expect(button.find("button").props()["disabled"]).toBe(true)
})

test("Show Button isLoading spinner if isLoading prop === true", () => {
  const button = shallow(<Button type="button" label="Click me!" isLoading />)
  expect(button.find("LoadingSpinner")).toHaveLength(1)
})

test('Check if button is type "button"', () => {
  const button = shallow(<Button type="button" label="Click me!" />)
  expect(button.find("button").props()["type"]).toEqual("button")
})

test('Check if button is type "submit"', () => {
  const button = shallow(<Button type="submit" label="Click me!" />)
  expect(button.find("button").props()["type"]).toEqual("submit")
})

test('Check if button is type "reset"', () => {
  const button = shallow(<Button type="reset" label="Click me!" />)
  expect(button.find("button").props()["type"]).toEqual("reset")
})
