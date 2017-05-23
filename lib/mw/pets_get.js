'use strict';
/**
 *	Object containing the middleware of get /pets/:id API
 */
module.exports = {
	"getAll": function (req, res) {
		var opts = {
			"condition": {}
		};
		req.soajs.model.findEntries(req.soajs, opts, function (error, response) {
			return res.soajs.returnAPIResponse(req, res, {code: 402, error: error, data: response});
		});
	}
};