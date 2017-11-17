$('[data-admin]').on('click', function() {
  $('.admin-tab').show();
});

var userIsAdmin,
  workflowEntries;

/**
 * Based on the the list of workflow entries it creates a list of workflows
 * @param entries list of workflow entries
 * @returns {Promise.<T>}
 */
function getWorkflows(entries) {
  var workflows = {};
  entries.forEach(function(entry) {
    if (!workflows[entry.data.Workflow]) {
      workflows[entry.data.Workflow] = { id: entry.id, userIsAdmin: userIsAdmin, items: []};
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


Fliplet.DataSources.connect(998, {
  offline: false
}).then(function (connection) {
  return connection.find();
}).then(function (entries) {
  workflowEntries = entries;
  return Fliplet.API.request('v1/user');
}).then(function (userData) {
  console.log(userData);
  userIsAdmin = userData.user.isAdmin;
  return getWorkflows(workflowEntries);
}).then(function (workFlows) {
  return displayWorkFlows(workFlows);
}).then(function () {
  if (userIsAdmin) {
    $('.btn-add-workflow-wrapper').removeClass('hidden');
  }
});

