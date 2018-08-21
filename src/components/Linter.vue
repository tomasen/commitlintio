<template>
<div class="container">
  <div class="inputs">
    <v-select v-model="commitType" :options="allowedType" placeholder="type"></v-select>
    <v-select v-model="commitScope" :options="[]" placeholder="scope" taggable push-tags></v-select>
    <b-form-input v-model="commitMessage"
                  type="text"
                  placeholder="commit message">
    </b-form-input>
    <b-form-textarea v-model="commitMessageBody"
                     placeholder="optional"
                     :rows="3"
                     :max-rows="6">
   </b-form-textarea>
   <b-form-textarea v-model="commitMessageFooter"
                    placeholder="optional"
                    :rows="3"
                    :max-rows="6">
  </b-form-textarea>
  </div>
  <div class="message">
    {{ combinedMessage }}
  </div>
  <div class="results" v-html="lintResults">
  </div>
</div>
</template>

<script>
import lint from '@commitlint/lint';
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
  },
  asyncComputed: {
    lintResults() {
      return new Promise((resolve) => {
        const opts = lintOpts.Angular;
        lint(this.combinedMessage, opts.rules, {})
          .then((report) => {
            if (report.valid) {
              resolve('Good to go');
              return;
            }
            console.log(report);
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
    lint2(combinedMessage) {
      const opts = lintOpts.Angular;
      lint(combinedMessage, opts.rules, {})
        .then((report) => {
          if (report.valid) {
            this.lintResults = 'Good to go';
            return;
          }
          console.log(report);
          this.lintResults = '';
          report.errors.forEach((item) => {
            this.lintResults += `${item.name}:${item.message} (level: ${item.level} valid: ${item.valid}) <br/>`;
          });
        });
    },
  },
};
</script>
