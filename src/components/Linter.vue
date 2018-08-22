<template>
<b-container class="linterContainer">
  <b-row>
    <b-col>
      <b-form-select v-model="commitType"
                     :options="allowedType"
                     placeholder="type">
        <template slot="first">
          <!-- this slot appears above the options from 'options' prop -->
          <option :value="''" disabled>- type -</option>
        </template>
      </b-form-select>
    </b-col>
    <b-col cols="9">
      <b-form-input v-model="commitScope" placeholder="scope">
      </b-form-input>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
      <b-form-input v-model="commitMessage"
                    type="text"
                    placeholder="commit message">
      </b-form-input>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
      <b-form-textarea v-model="commitMessageBody"
                       placeholder="body (optional)"
                       :rows="3"
                       :max-rows="6">
     </b-form-textarea>
   </b-col>
  </b-row>
  <b-row>
    <b-col>
      <b-form-textarea v-model="commitMessageFooter"
                      placeholder="footer (optional)"
                      :rows="1"
                      :max-rows="6">
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
        <b-button href="#"
                  variant="primary"
                  :disabled="!isValidCommitMessage">
                  Copy to Clipboard
        </b-button>
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
    };
  },
  created() {
  },
  computed: {
    allowedType() {
      return lintOpts.Angular.rules['type-enum'][2];
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
          resolve('please fill in commit message.');
          return;
        }
        console.log(this.combinedMessage);
        const opts = lintOpts.Angular;
        lint(this.combinedMessage, opts.rules, {})
          .then((report) => {
            console.log(report);
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
            console.log(lintResults);
            resolve(lintResults);
          });
      });
    },
  },
  methods: {
    lint2(combinedMessage) {
      const opts = lintOpts.Angular;
      lint(combinedMessage, opts.rules, {})
        .then((report) => {
          if (report.valid) {
            this.lintResults = 'Good to go';
            return;
          }
          this.lintResults = '';
          report.errors.forEach((item) => {
            this.lintResults += `${item.name}:${item.message} (level: ${item.level} valid: ${item.valid}) <br/>`;
          });
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
