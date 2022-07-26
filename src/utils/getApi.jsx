// import NextLaunch from "../models/NextLaunch";
export default class GetData {
  async getLaunches() {
    try {
      const response = await fetch("https://api.spacexdata.com/v5/launches");

      const datas = await response.json();
      const data = datas.reverse();

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getNextLaunch() {
    try {
      const response = await fetch(
        "https://api.spacexdata.com/v5/launches/next"
      );

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("NEXT", error);
    }
  }
  async getLastLaunch() {
    try {
      const response = await fetch(
        "https://api.spacexdata.com/v5/launches/latest"
      );
      const data = await response.json();

      return data;
    } catch (error) {
      console.error("LAST", error);
    }
  }
  async getCrews() {
    try {
      const response = await fetch("https://api.spacexdata.com/v4/crew");

      const datas = await response.json();
      const data = datas.reverse();

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getOneCrew(id) {
    try {
      let url = "https://api.spacexdata.com/v4/crew/" + id;
      console.log("URL", url);
      const response = await fetch(url);

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
