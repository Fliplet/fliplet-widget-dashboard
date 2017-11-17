/**
 * Based on the the list of workflow entries it creates a list of workflows
 * @param entries list of workflow entries
 * @returns {Promise.<T>}
 */
function getWorkflows(entries) {
  var workflows = {};
  entries.forEach(function(entry) {
    if (!workflows[entry.data.Workflow]) {
      workflows[entry.data.Workflow] = { items: []};
    }
    workflows[entry.data.Workflow].items.push(entry.data);
  });

  return workflows;
}

/**
 * displays the workflows on the UI
 * @param workFlows List of workflow
 * @returns {Promise.<T>}
 */
function displayWorkFlows(workFlows) {
  var tpl = Fliplet.Widget.Templates['templates.list'];
  var html = tpl(workFlows);
  console.log(workFlows);
  $('.workflow-list-wrapper').html(html);
  return Promise.resolve();
}
Fliplet.DataSources.connect(31, {
  offline: false
}).then(function (connection) {
  return connection.find();
}).then(function (entries) {
  console.log(entries);
  return getWorkflows(entries);
}).then(function (workFlows) {
  return displayWorkFlows(workFlows);
});

