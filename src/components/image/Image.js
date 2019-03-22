import React from 'react';
import PropTypes from 'prop-types';
import Load from './Load';

function Image({ image, loading, fetch }) {
  return (
    <>
    {loading ? <p>Loading....</p> :
      <div>
        <img src={image}/>
        <Load fetch={fetch} />
      </div>}
    </>
  );
}
Image.propTypes = {
  image: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Image;
