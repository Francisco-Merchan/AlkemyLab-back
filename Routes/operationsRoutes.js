const { Router } = require("express");
const {
  createOperation,
  getOperations,
  getOperationById,
  updateOperation,
  deleteOperation,
} = require("../controllers/operationControllers");

const router = Router();

router.route("/").post(createOperation).get(getOperations);

router
  .route("/:id")
  .get(getOperationById)
  .put(updateOperation)
  .delete(deleteOperation);

module.exports = router;
