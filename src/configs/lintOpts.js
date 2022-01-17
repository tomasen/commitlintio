/* eslint-disable */
exports.AngularTypeEnum = {
  extends: [ '@commitlint/config-angular-type-enum' ],
  formatter: '/Users/tomasen/Develop/commitlint5/node_modules/@commitlint/format/lib/index.js',
  parserPreset: undefined,
  ignores: undefined,
  defaultIgnores: undefined,
  plugins: {},
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',    'ci',
        'docs',     'feat',
        'fix',      'perf',
        'refactor', 'revert',
        'style',    'test'
      ]
    ]
  },
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  prompt: {}
};
exports.Angular = {
  extends: [ '@commitlint/config-angular' ],
  formatter: '/Users/tomasen/Develop/commitlint5/node_modules/@commitlint/format/lib/index.js',
  parserPreset: { parserOpts: { headerPattern: /^(\w*)(?:\((.*)\))?!?: (.*)$/ } },
  ignores: undefined,
  defaultIgnores: undefined,
  plugins: {},
  rules: {
    'subject-exclamation-mark': [ 2, 'never' ],
    'body-leading-blank': [ 1, 'always' ],
    'footer-leading-blank': [ 1, 'always' ],
    'header-max-length': [ 2, 'always', 72 ],
    'scope-case': [ 2, 'always', 'lower-case' ],
    'subject-case': [
      2,
      'never',
      [ 'sentence-case', 'start-case', 'pascal-case', 'upper-case' ]
    ],
    'subject-empty': [ 2, 'never' ],
    'subject-full-stop': [ 2, 'never', '.' ],
    'type-case': [ 2, 'always', 'lower-case' ],
    'type-empty': [ 2, 'never' ],
    'type-enum': [
      2,
      'always',
      [
        'build',    'ci',
        'docs',     'feat',
        'fix',      'perf',
        'refactor', 'revert',
        'style',    'test'
      ]
    ]
  },
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  prompt: {}
};
exports.Conventional = {
  extends: [ '@commitlint/config-conventional' ],
  formatter: '/Users/tomasen/Develop/commitlint5/node_modules/@commitlint/format/lib/index.js',
  parserPreset: {
    name: 'conventional-changelog-conventionalcommits',
    path: './node_modules/conventional-changelog-conventionalcommits/index.js',
    parserOpts: {
      headerPattern: /^(\w*)(?:\((.*)\))?!?: (.*)$/,
      breakingHeaderPattern: /^(\w*)(?:\((.*)\))?!: (.*)$/,
      headerCorrespondence: [ 'type', 'scope', 'subject' ],
      noteKeywords: [ 'BREAKING CHANGE', 'BREAKING-CHANGE' ],
      revertPattern: /^(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
      revertCorrespondence: [ 'header', 'hash' ],
      issuePrefixes: [ '#' ]
    }
  },
  ignores: undefined,
  defaultIgnores: undefined,
  plugins: {},
  rules: {
    'body-leading-blank': [ 1, 'always' ],
    'body-max-line-length': [ 2, 'always', 100 ],
    'footer-leading-blank': [ 1, 'always' ],
    'footer-max-line-length': [ 2, 'always', 100 ],
    'header-max-length': [ 2, 'always', 100 ],
    'subject-case': [
      2,
      'never',
      [ 'sentence-case', 'start-case', 'pascal-case', 'upper-case' ]
    ],
    'subject-empty': [ 2, 'never' ],
    'subject-full-stop': [ 2, 'never', '.' ],
    'type-case': [ 2, 'always', 'lower-case' ],
    'type-empty': [ 2, 'never' ],
    'type-enum': [
      2,
      'always',
      [
        'build',  'chore',
        'ci',     'docs',
        'feat',   'fix',
        'perf',   'refactor',
        'revert', 'style',
        'test'
      ]
    ]
  },
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  prompt: {
    questions: {
      type: {
        description: "Select the type of change that you're committing",
        enum: {
          feat: {
            description: 'A new feature',
            title: 'Features',
            emoji: '✨'
          },
          fix: { description: 'A bug fix', title: 'Bug Fixes', emoji: '🐛' },
          docs: {
            description: 'Documentation only changes',
            title: 'Documentation',
            emoji: '📚'
          },
          style: {
            description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
            title: 'Styles',
            emoji: '💎'
          },
          refactor: {
            description: 'A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring',
            emoji: '📦'
          },
          perf: {
            description: 'A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '🚀'
          },
          test: {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '🚨'
          },
          build: {
            description: 'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
            title: 'Builds',
            emoji: '🛠'
          },
          ci: {
            description: 'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
            title: 'Continuous Integrations',
            emoji: '⚙️'
          },
          chore: {
            description: "Other changes that don't modify src or test files",
            title: 'Chores',
            emoji: '♻️'
          },
          revert: {
            description: 'Reverts a previous commit',
            title: 'Reverts',
            emoji: '🗑'
          }
        }
      },
      scope: {
        description: 'What is the scope of this change (e.g. component or file name)'
      },
      subject: {
        description: 'Write a short, imperative tense description of the change'
      },
      body: { description: 'Provide a longer description of the change' },
      isBreaking: { description: 'Are there any breaking changes?' },
      breakingBody: {
        description: 'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself'
      },
      breaking: { description: 'Describe the breaking changes' },
      isIssueAffected: { description: 'Does this change affect any open issues?' },
      issuesBody: {
        description: 'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself'
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)'
      }
    }
  }
};
exports.LernaScopes = {
  extends: [ '@commitlint/config-lerna-scopes' ],
  formatter: '/Users/tomasen/Develop/commitlint5/node_modules/@commitlint/format/lib/index.js',
  parserPreset: undefined,
  ignores: undefined,
  defaultIgnores: undefined,
  plugins: {},
  rules: { 'scope-enum': [ 2, 'always', [] ] },
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  prompt: {}
};
exports.Patternplate = {
  extends: [ '@commitlint/config-patternplate' ],
  formatter: '/Users/tomasen/Develop/commitlint5/node_modules/@commitlint/format/lib/index.js',
  parserPreset: { parserOpts: { headerPattern: /^(\w*)(?:\((.*)\))?!?: (.*)$/ } },
  ignores: undefined,
  defaultIgnores: undefined,
  plugins: {},
  rules: {
    'subject-exclamation-mark': [ 2, 'never' ],
    'body-leading-blank': [ 1, 'always' ],
    'footer-leading-blank': [ 1, 'always' ],
    'header-max-length': [ 2, 'always', 72 ],
    'scope-case': [ 2, 'always', 'lower-case' ],
    'subject-case': [
      2,
      'never',
      [ 'sentence-case', 'start-case', 'pascal-case', 'upper-case' ]
    ],
    'subject-empty': [ 2, 'never' ],
    'subject-full-stop': [ 2, 'never', '.' ],
    'type-case': [ 2, 'always', 'lower-case' ],
    'type-empty': [ 2, 'never' ],
    'type-enum': [
      2,
      'always',
      [
        'build',    'ci',
        'docs',     'feat',
        'fix',      'perf',
        'refactor', 'revert',
        'style',    'test'
      ]
    ],
    'scope-enum': [ 2, 'always', [ 'system' ] ]
  },
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  prompt: {}
};
