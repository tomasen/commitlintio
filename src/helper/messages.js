export default `
### About

Commitlint.io help your project to ensures nice and tidy commit messages
without needing any downloads or installations. It’s designed with your
workflow in mind by using zero change to your system.

### Usage

More readable messages that are easy to follow when looking through the
project history. Just fill in the <type> <scope> and <subject> of your commit.
And it will show if your commit message comply with the guideline.

Once the commit message pass the linter, you can click the "Copy to Clipboard"
button to copy it to clipboard, and paste to your git client.

### Goal

- provide better information when browsing the history
- allow generating CHANGELOG.md by script
- allow ignoring commits by git bisect (not important commits
  like formatting)

### FAQ

- #### Which git commit convention that Commitlint.io support?

  Right now we provide the convention preset that follow
  AngularJS Git Commit Message Conventions. In future,
  we will provide choices of more rules, and also possible
  to set custom rules.

### Contact

You are welcome to make contact with us by
[email](mailto:hr@sagittarius.ai) or
[submit issues](https://github.com/commitlinter/commitlinter.github.io/issues)

### Thanks

- [commitlint](https://github.com/marionebl/commitlint)
- [commitizen](https://github.com/commitizen/cz-cli)
`;
