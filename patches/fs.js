exports.readFile = function nextTick(path, opts, callback) {
  switch (path) {
    case '/templates/template.hbs':
      callback(null, `{{> header}}

      {{#each commitGroups}}

      {{#if title}}
      ### {{title}}

      {{/if}}
      {{#each commits}}
      {{> commit root=@root}}
      {{/each}}

      {{/each}}
      {{> footer}}
`);
    break;
    case '/templates/header.hbs':
      callback(null, `<a name="{{version}}"></a>
      {{#if isPatch~}}
        ##
      {{~else~}}
        #
      {{~/if}} {{#if @root.linkCompare~}}
        [{{version}}](
        {{~#if @root.repository~}}
          {{~#if @root.host}}
            {{~@root.host}}/
          {{~/if}}
          {{~#if @root.owner}}
            {{~@root.owner}}/
          {{~/if}}
          {{~@root.repository}}
        {{~else}}
          {{~@root.repoUrl}}
        {{~/if~}}
        /compare/{{previousTag}}...{{currentTag}})
      {{~else}}
        {{~version}}
      {{~/if}}
      {{~#if title}} "{{title}}"
      {{~/if}}
      {{~#if date}} ({{date}})
      {{/if}}
`);
    break;
    case '/templates/commit.hbs':
      callback(null, `*{{#if scope}} **{{scope}}:**
      {{~/if}} {{#if subject}}
        {{~subject}}
      {{~else}}
        {{~header}}
      {{~/if}}

      {{~!-- commit link --}} {{#if @root.linkReferences~}}
        ([{{hash}}](
        {{~#if @root.repository}}
          {{~#if @root.host}}
            {{~@root.host}}/
          {{~/if}}
          {{~#if @root.owner}}
            {{~@root.owner}}/
          {{~/if}}
          {{~@root.repository}}
        {{~else}}
          {{~@root.repoUrl}}
        {{~/if}}/
        {{~@root.commit}}/{{hash}}))
      {{~else}}
        {{~hash}}
      {{~/if}}

      {{~!-- commit references --}}
      {{~#if references~}}
        , closes
        {{~#each references}} {{#if @root.linkReferences~}}
          [
          {{~#if this.owner}}
            {{~this.owner}}/
          {{~/if}}
          {{~this.repository}}#{{this.issue}}](
          {{~#if @root.repository}}
            {{~#if @root.host}}
              {{~@root.host}}/
            {{~/if}}
            {{~#if this.repository}}
              {{~#if this.owner}}
                {{~this.owner}}/
              {{~/if}}
              {{~this.repository}}
            {{~else}}
              {{~#if @root.owner}}
                {{~@root.owner}}/
              {{~/if}}
                {{~@root.repository}}
              {{~/if}}
          {{~else}}
            {{~@root.repoUrl}}
          {{~/if}}/
          {{~@root.issue}}/{{this.issue}})
        {{~else}}
          {{~#if this.owner}}
            {{~this.owner}}/
          {{~/if}}
          {{~this.repository}}#{{this.issue}}
        {{~/if}}{{/each}}
      {{~/if}}

`);
    break;
    case '/templates/footer.hbs':
      callback(null, `{{#if noteGroups}}
      {{#each noteGroups}}

      ### {{title}}

      {{#each notes}}
      * {{#if commit.scope}}**{{commit.scope}}:** {{/if}}{{text}}
      {{/each}}
      {{/each}}

      {{/if}}
`);
    break;
    default:
      console.warn('fs.readFile is called!!!', path, opts);
      callback(null, '');
      return;
  }
};
