import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x18eF4E514Ac2c726cD4F2b129D4b14418f1AAA25"
);

export default instance;
