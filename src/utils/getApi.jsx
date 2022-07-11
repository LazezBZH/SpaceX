export default class GetData {
  async getLaunches() {
    try {
      const response = await fetch("https://api.spacexdata.com/v5/launches");

      const datas = await response.json();
      const data = datas.reverse();

      console.log(response);
      console.log(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getOneLaunch() {
    try {
      const response = await fetch(
        "https://api.spacexdata.com/v5/launches/latest"
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
