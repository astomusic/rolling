import { Parser } from 'html-to-react';

const parser = (html: string) => {
  return new Parser().parse(html);
};

export default parser;
