import React from 'react';
import ContentLoader from "react-content-loader"


function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="133" cy="133" r="122" />
      <rect x="0" y="266" rx="5" ry="5" width="280" height="26" />
      <rect x="0" y="303" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="404" rx="5" ry="5" width="91" height="31" />
      <rect x="137" y="397" rx="20" ry="20" width="140" height="47" />
    </ContentLoader>
  );
}

export default LoadingBlock;
