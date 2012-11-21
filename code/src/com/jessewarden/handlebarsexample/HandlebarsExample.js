define(["com/jessewarden/handlebarsexample/utils/HandlebarsTemplateLoader.js",
		"jquery"], 
		function(HandlebarsTemplateLoader, $)
{
	//logger.debug("*** HandlebarsExample ***")
	//logger.debug("Handlebars: ", Handlebars);
	//logger.debug("HandlebarsTemplateLoader: ", HandlebarsTemplateLoader);
	//logger.debug("$: ", $);

	var tpl = new HandlebarsTemplateLoader();
	var basicTemplateFilePath = "com/jessewarden/handlebarsexample/templates/SimpleTemplate.hbs";
	tpl.loadTemplates([basicTemplateFilePath],
		function()
		{
			logger.debug("HandlebarsExample::loadTemplates completed.");
			// grab the text
			var simpleTemplateHTML = tpl.get(basicTemplateFilePath);
			logger.debug("simpleTemplateHTML: " + simpleTemplateHTML);
			// compile it Handlebars style
			var simpleTemplateCompiled = Handlebars.compile(simpleTemplateHTML);
			logger.debug("simpleTemplateCompiled: " + simpleTemplateCompiled);
			// give it some some data to munch on
			var data = {firstName: "Jesse Warden", description: "Uber crackead ready to rock the mic."};
			var templateHTML = simpleTemplateCompiled(data);
			logger.debug("templateHTML: ", templateHTML);
			// inject it!
			logger.debug("targetDiv: ", $('#content'));
			logger.debug("before: ", $('#content').html());
			$('#content').html(templateHTML);
			logger.debug("after: ", $('#content').html());

		});

});