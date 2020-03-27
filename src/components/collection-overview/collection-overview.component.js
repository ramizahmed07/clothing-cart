import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import "./collection-overview.styles.scss";

const CollectionOverview = ({ collection }) => {
  return (
    <div className="collection-overview">
      {collection.map(({ id, ...collection }) => {
        return <CollectionPreview key={id} {...collection} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
