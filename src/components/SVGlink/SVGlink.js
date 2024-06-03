import React from 'react';

const SvgLink = ({ SvgComponent, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <SvgComponent width="25" height="25" />
    </a>
  );
};

export default SvgLink;