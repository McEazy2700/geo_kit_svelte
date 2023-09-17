import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'https://geokitgraphql-production.up.railway.app/graphql',
	generates: {
		'src/lib/graphql/generated.ts': {
			plugins: ['typescript']
		}
	}
};

export default config;
