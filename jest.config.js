module.exports = {
  moduleFileExtensions: ["tsx", "ts", "jsx", "js", "json", "node"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["./src/setupEnzyme.ts"],
  testEnvironment: "jsdom",
  testRegex: "/*.test.tsx$",
  collectCoverage: true,
  coverageReporters: ["lcov"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  }
};
