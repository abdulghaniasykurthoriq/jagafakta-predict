const predictController = {
  histories: async (req, res) => {
    try {
      return res.json({
        message: "success",
        data: "data",
      });
    } catch (error) {
      return res.json({
        message: "success",
        data: "data",
      });
    }
  },
};

module.exports = predictController;
