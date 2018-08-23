<template>
<b-container class="linterContainer">
  <b-row>
    <b-col>
      <b-form-select v-model="commitType"
                     :options="allowedType"
                     placeholder="type"
                     v-b-popover.hover.bottom="tipType">
        <template slot="first">
          <!-- this slot appears above the options from 'options' prop -->
          <option :value="''" disabled>&lt;type&gt;</option>
        </template>
      </b-form-select>
    </b-col>
    <b-col cols="9">
      <b-form-input v-model="commitScope"
                    placeholder="<scope>"
                    v-b-popover.hover.bottom="tipScope">
      </b-form-input>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
      <b-form-input v-model="commitMessage"
                    type="text"
                    placeholder="<subject> succinct description of the change"
                    v-b-popover.hover.bottom="tipSubject">
      </b-form-input>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
      <b-form-textarea v-model="commitMessageBody"
                       placeholder="body (optional)"
                       :rows="3"
                       :max-rows="6"
                       v-b-popover.hover.bottom="tipBody">
     </b-form-textarea>
   </b-col>
  </b-row>
  <b-row>
    <b-col>
      <b-form-textarea v-model="commitMessageFooter"
                      placeholder="footer (optional)"
                      :rows="1"
                      :max-rows="6"
                      v-b-popover.hover.bottom="tipFooter">
      </b-form-textarea>
    </b-col>
  </b-row>
  <b-row :class="isValidCommitMessage ? 'd-none': ''">
    <b-col>
      <b-alert variant="warning"
               :show="!isValidCommitMessage"
               v-html="lintResults">
      </b-alert>
    </b-col>
  </b-row>
  <b-row :class="combinedMessage && isValidCommitMessage ? '' : 'd-none'">
    <b-col>
      <b-card title="Commit Message:">
        <p class="card-text"
           v-html="markedCombinedMessage">
        </p>
        <b-button @click="copyToClipboard"
                  variant="primary"
                  :disabled="!isValidCommitMessage">
                  Copy to Clipboard
        </b-button>
        <b-alert :show="dismissCountDown"
             dismissible
             :variant="clipboardSuccess ? 'success': 'warning'"
             @dismissed="dismissCountDown=0"
             @dismiss-count-down="countDownChanged">
          <p>{{ clipboardMessage }}</p>
        </b-alert>
      </b-card>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import lint from '@commitlint/lint';
import marked from 'marked';
import lintOpts from '../helper/lintOpts';

export default {
  name: 'Linter',
  data() {
    return {
      commitType: '',
      commitScope: '',
      commitMessage: '',
      commitMessageBody: '',
      commitMessageFooter: '',
      isValidCommitMessage: true,
      clipboardSuccess: true,
      dismissCountDown: 0,
      clipboardMessage: '',
      // tooltips
      tipScope: 'could be anything specifying place of the commit change. For example $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc...',
      tipSubject: `- use imperative, present tense: "change" not “changed” nor “changes”
  - don't capitalize first letter
  - no dot (.) at the end`,
      tipType: 'must be one of the options',
      tipBody: `- use imperative, present tense: “change” not “changed” nor “changes”
- includes motivation for the change and contrasts with previous behavior`,
      tipFooter: `- contain any information about breaking changes with the description of the change, justification and migration notes
- reference GitHub issues that this commit Closes. such as closed bugs should be listed in the footer prefixed with "Closes" keyword like: "Closes #234, #241"`,
    };
  },
  created() {
  },
  computed: {
    allowedType() {
      const desc = {
        feat: 'feature',
        fix: 'bug fix',
        docs: 'documentation',
        style: 'formatting, missing semi colons, etc.',
        refactor: 'neither fixes a bug or adds a feature',
        test: 'adding missing tests',
        chore: 'maintain',
        build: 'build system or external dependencies changes',
        ci: 'CI configurations and scripts changes',
        perf: 'improves performance',
        revert: 'reverts a previous commit',
      };
      const options = [];
      const typeEnum = lintOpts.Angular.rules['type-enum'][2];
      typeEnum.forEach((item, key) => {
        options[key] = { value: item, text: `${item}(${desc[item]})` };
      });
      return options;
    },
    combinedMessage() {
      let combinedMessage = this.commitType;
      if (this.commitScope) {
        combinedMessage += `(${this.commitScope})`;
      }
      if (combinedMessage) {
        combinedMessage += ': ';
      }
      combinedMessage += this.commitMessage;
      if (this.commitMessageBody) {
        combinedMessage += `\n\n${this.commitMessageBody}`;
      }
      if (this.commitMessageFooter) {
        combinedMessage += `\n\n${this.commitMessageFooter}`;
      }
      return combinedMessage;
    },
    markedCombinedMessage() {
      return marked(this.combinedMessage, { sanitize: true });
    },
  },
  asyncComputed: {
    lintResults() {
      return new Promise((resolve) => {
        if (!this.combinedMessage) {
          this.isValidCommitMessage = false;
          resolve('empty commit message');
          return;
        }
        const opts = lintOpts.Angular;
        lint(this.combinedMessage, opts.rules, {})
          .then((report) => {
            if (report.valid) {
              this.isValidCommitMessage = true;
              resolve('');
              return;
            }
            this.isValidCommitMessage = false;

            let lintResults = '';
            report.errors.forEach((item) => {
              lintResults += `${item.name}:${item.message} (level: ${item.level} valid: ${item.valid}) <br/>`;
            });
            resolve(lintResults);
          });
      });
    },
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    copyToClipboard() {
      this.$copyText(this.combinedMessage).then(() => {
        this.dismissCountDown = 3;
        this.clipboardSuccess = true;
        this.clipboardMessage = 'Copied to Clipboard Successed';
      }, (e) => {
        this.dismissCountDown = 5;
        this.clipboardSuccess = false;
        this.clipboardMessage = `Copied to Clipboard Failed ${e}`;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.linterContainer {
  background-color: #86818B;
  padding: 0.8em;
}
.row {
  padding: 0.2em;
}
.card {
  text-align: left;
  color: #555555;
}
.card-title {
  font-size: 1.3em;
}
</style>
