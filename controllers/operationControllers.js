const Operation = require("../model/operations");

exports.createOperation = async (req, res) => {
  try {
    const newOperation = new Operation(req.body);
    await newOperation.save();
    res.status(201).json({
      status: "success",
      message: "operacion creada",
      data: newOperation,
    });
  } catch (error) {
    res.status(500).json({ status: "failed", message: "algo salio mal" });
  }
};

exports.getOperations = async (req, res) => {
  try {
    const operations = await Operation.find({});
    res.status(200).json({ status: "success", data: operations });
  } catch (error) {
    res.status(500).json({ status: "failed", message: "algo salio mal" });
  }
};

exports.getOperationById = async (req, res) => {
  try {
    const operation = await Operation.findOne({ _id: req.params.id });
    res.status(200).json({ status: "success", data: operation });
  } catch (error) {
    res.status(500).json({ status: "failed", message: "algo salio mal" });
  }
};

exports.updateOperation = async (req, res) => {
  try {
    let operation = await Operation.findById(req.params.id);
    if (!operation) {
      return res
        .status(404)
        .json({ status: "error", message: "No se encontro la operacion" });
    }
    operation = await Operation.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json({ status: "success", data: operation });
  } catch (error) {
    res.status(500).json({ status: "failed", message: "algo salio mal" });
  }
};

exports.deleteOperation = async (req, res) => {
  try {
    const operation = await Operation.findOneAndRemove({ _id: req.params.id });
    if (!operation) {
      return res
        .status(404)
        .json({ status: "error", message: "No se encontro la operacion" });
    }
    res.status(200).json({ status: "success", message: "operacion eliminada" });
  } catch (error) {
    res.status(500).json({ status: "failed", message: "algo salio mal" });
  }
};
