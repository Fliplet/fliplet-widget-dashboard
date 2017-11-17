this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <h4>"
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "</h4>\r\n    <div class=\"panel-Item workflow-list-wrapper\" id=\""
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" role=\"tablist\" aria-multiselectable=\"true\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"panel panel-Item\">\r\n          <div role=\"tab\" id=\"headingItemone\">\r\n            <h5 class=\"panel-Itemheading panel-Itemtitle collapsed\" role=\"button\" data-toggle=\"collapse\" href=\"#collapseItemone\">\r\n              "
    + alias4(((helper = (helper = helpers["Item Title"] || (depth0 != null ? depth0["Item Title"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Item Title","hash":{},"data":data}) : helper)))
    + "\r\n            </h5>\r\n          </div>\r\n\r\n          <div id=\"collapseItemone\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingItemone\">\r\n            <div class=\"panel-body animated fadeIn\" style=\"color:#555;border-top:0px\">\r\n              <p> "
    + alias4(((helper = (helper = helpers["Item Description"] || (depth0 != null ? depth0["Item Description"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Item Description","hash":{},"data":data}) : helper)))
    + " </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"workflow-list\">\r\n\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});