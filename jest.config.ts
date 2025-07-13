// jest.config.ts
import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    },
    transformIgnorePatterns: [
        'node_modules/(?!.*(msw|react-modal|@your-scope)/)',
    ],
    // Otras configuraciones
};

export default jestConfig;
