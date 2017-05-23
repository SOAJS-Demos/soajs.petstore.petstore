'use strict';
/**
 *	Object containing the middleware of POST /pet API
 */
module.exports = {
	"post": function (req, res) {
		var opts = {
			"record": {
				"pet": req.soajs.inputmaskData.pet
			}
		};
		req.soajs.model.insertEntries(req.soajs, opts, function (error, response) {
			return res.soajs.returnAPIResponse(req, res, {code: 400, error: error, data: response});
		});
	}
};