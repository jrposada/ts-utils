/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
    branches: [
        {
            name: 'main',
            prerelease: true,
        },
    ],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/github',
            {
                assets: [
                    {
                        path: './jrposada-ts-utils-*.tgz',
                        label: 'lib',
                    },
                ],
            },
        ],
    ],
};
