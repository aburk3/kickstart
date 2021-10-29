import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>

          <Button
            floated="right"
            content="Create Campaign"
            icon="add circle"
            primary
          />
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
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
