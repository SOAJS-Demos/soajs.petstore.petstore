"use strict";
/**
 *	Object containing the middleware of /pets/:id API
 */
module.exports = {
	"delete": function (req, res) {
		var opts = {
			"condition": {}
		};
		opts.condition["_id"] = req.soajs.model.object_Id(req.soajs, req.soajs.inputmaskData.id);
		req.soajs.model.deleteEntries(req.soajs, opts, function (error, response) {
			return res.soajs.returnAPIResponse(req, res, {code: 401, error: error, data: response});
		});
	}
};