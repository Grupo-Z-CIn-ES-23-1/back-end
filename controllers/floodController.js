const fetch = require("node-fetch");

const getFloodData = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    // Verificar se latitude e longitude são fornecidos
    if (!latitude || !longitude) {
      return res
        .status(400)
        .json({ message: "Latitude and longitude are required." });
    }

    const apiUrl = `https://flood-api.open-meteo.com/v1/flood?latitude=${latitude}&longitude=${longitude}&daily=river_discharge&forecast_days=7`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    return res.json(data);
  } catch (error) {
    console.error("Error fetching flood data:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while fetching flood data." });
  }
};

module.exports = {
  getFloodData,
};
