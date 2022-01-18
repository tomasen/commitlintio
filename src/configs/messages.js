export default `
### About

Commitlint.io helps your project to ensure nice and tidy commit messages
without needing any downloads or installations. 
It's designed with your workflow in mind by using zero change to your system.

### Usage

More readable messages that are easy to follow when looking through the project history. 
Just fill in the <type> <scope> and <subject> of your commit. 
And it will show if your commit message complies with the guideline.

Once the commit message passes the linter, you can click the "Copy to Clipboard" button to copy it to the clipboard and paste it to your git client.

### Goal

- provide better information when browsing the history
- allow generating CHANGELOG.md by script
- allow ignoring commits by git bisect (not important commits
  like formatting)

### FAQ

- #### Which git commit convention that Commitlint.io support?

  Right now, we provide the convention preset that follow
  [AngularJS Git Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit), [conventional commits](https://conventionalcommits.org/), and [patternplate commit convention](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-patternplate). 
  In the future, we will provide choices of more rules and set custom rules.

### Sponsor

- [Uplinks.Net - VPN that don't require Installation to Connect](https://uplinks.net)

### Thanks

- [commitlint](https://github.com/marionebl/commitlint)
- [commitizen](https://github.com/commitizen/cz-cli)

----
`;
