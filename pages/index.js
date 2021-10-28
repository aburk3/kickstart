import React, { Component } from "react";
import factory from "../ethereum/factory";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  render() {
    return <div>{this.props.campaigns[0]}</div>;
  }
}

export default CampaignIndex;

/*
 *   REFERENCE
 */
// const CampaignIndex = ({ campaigns }) => {
//   console.log(campaigns);

//   return <div>{campaigns && campaigns}</div>;
// };

// // `getInitialProps` enables server-side rendering in a page and
// //    allows you to do initial data population, it means sending
// //    the page with the data already populated from the server.
// //    This is especially useful for SEO.
// //    https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
// CampaignIndex.getInitialProps = async (ctx) => {
//   const res = await factory.methods.getDeployedCampaigns().call();
//   return { campaigns: res };
// };

// export default CampaignIndex;
