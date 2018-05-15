import React from 'react';

const data = [1, 2];
const TestContent = ({ testData }) => (
  <div>
  Hello World
    {data.map(x => <h1>{x}</h1>)}
    {JSON.stringify(testData)}
  </div>
);


module.exports = TestContent;
