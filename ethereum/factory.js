import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x15c4835e26e4bEC30F6F443993f143bEBe7aD1fB"
);

export default instance;
