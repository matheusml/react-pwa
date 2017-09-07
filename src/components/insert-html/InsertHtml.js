import React from 'react';

const insertHtml = (text) => {
  if (text) {
    return { __html: text };
  }
  return { __html: '' };
};

const parseText = (maxLength, text) => {
  if (text && text.length > maxLength) {
    return insertHtml(`${text.substring(0, maxLength)}...`);
  }
  return insertHtml(text);
};

const InsertHtml = ({ maxLength, text }) => (
  // eslint-disable-next-line react/no-danger
  <div dangerouslySetInnerHTML={parseText(maxLength, text)} />
);

InsertHtml.defaultProps = {
  maxLength: 1000,
  text: '',
};

InsertHtml.propTypes = {
  maxLength: React.PropTypes.number,
  text: React.PropTypes.string,
};


export default InsertHtml;
