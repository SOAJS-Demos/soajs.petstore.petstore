"use strict";
/**
 *	Object containing the middleware of get /pets/:id API
 */
module.exports = {
	"get": function (req, res) {
		var opts = {
			"condition": {"_id": req.soajs.inputmaskData.id}
		};
		opts.condition["_id"] = req.soajs.model.object_Id(req.soajs, req.soajs.inputmaskData.id);
		req.soajs.model.findEntry(req.soajs, opts, function (error, response) {
			return res.soajs.returnAPIResponse(req, res, {code: 401, error: error, data: response});
		});
	}
};