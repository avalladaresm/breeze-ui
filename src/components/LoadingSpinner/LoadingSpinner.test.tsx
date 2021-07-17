import { shallow } from "enzyme"
import LoadingSpinner from "."

test("LoadingSpinner has correct size", () => {
  const size = 10
  const h = "h-" + size
  const w = "w-" + size
  const loadingSpinner = shallow(<LoadingSpinner size={10} />)
  expect(loadingSpinner.find("svg").hasClass(h)).toBe(true)
  expect(loadingSpinner.find("svg").hasClass(w)).toBe(true)
})

test("LoadingSpinner has correct color", () => {
  const color = "text-red-300"
  const loadingSpinner = shallow(<LoadingSpinner color={color} />)
  expect(loadingSpinner.find("svg").hasClass(color)).toBe(true)
})
