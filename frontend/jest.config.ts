import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'scss'],
	transform: {
		'^.+\\.(ts|tsx)$': [
			'ts-jest',
			{
				tsconfig: 'tsconfig.jest.json'
			}
		]
	},
	moduleNameMapper: {
		'\\.(scss|sass|css)$': 'identity-obj-proxy'
	},
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
}

export default config
