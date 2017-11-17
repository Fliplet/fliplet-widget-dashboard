/**
 * Based on the the list of workflow entries it creates a list of workflows
 * @param entries list of workflow entries
 * @returns {Promise.<T>}
 */
function getWorkflows(entries) {

  return Promise.resolve(entries);
}

/**
 * displays the workflows on the UI
 * @param workFlows List of workflow
 * @returns {Promise.<T>}
 */
function displayWorkFlows(workFlows) {
  var templateHtml = $('template[name="workflow-dashboard-list"]').html(),
    workFlowTemplate = Handlebars.compile(templateHtml);

  $('.workflows-content').html(workFlowTemplate(workFlows));

  return Promise.resolve();
}

Fliplet.DataSources.connect(998, {
  offline: false
}).then(function (connection) {
  return connection.find();
}).then(function (entries) {
  console.log(entries);
  return getWorkflows(entries);
}).then(function (workFlows) {
  return displayWorkFlows(workFlows);
});

