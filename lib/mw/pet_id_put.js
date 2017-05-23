"use strict";
/**
 *	Object containing the middleware of put /pets/:id API
 */
module.exports = {
	"put": function (req, res) {
		var opts = {
			"updatedFields": {
				"pet": req.soajs.inputmaskData.pet
			},
			"condition": {}
		};
		opts.condition["_id"] = req.soajs.model.object_Id(req.soajs, req.soajs.inputmaskData.id);
		req.soajs.model.updateEntries(req.soajs, opts, function (error, response) {
			return res.soajs.returnAPIResponse(req, res, {code: 401, error: error, data: response});
		});
	}
};