import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => {
  let { path } = useRouteMatch();
  return (
    <div className="shop-page">
      <Route exact path={`${path}`} component={CollectionOverview} />
      <Route path={`${path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
