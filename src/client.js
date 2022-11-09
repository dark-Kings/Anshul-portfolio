import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// 
export const client = sanityClient({
  // projectId: process.env.REACT_APP_SANITY_PROJECT_ID ,
  projectId:"sa96wsy0",
  dataset: 'production',
  apiVersion: '2022-11-01',
  useCdn: true,
  // token: process.env.REACT_APP_SANITY_TOKEN,
  token:"skXeVBZtw7Ops5JEJrhKFAp25fYmyq37cmBVCvQur3DV62VjijjwNlAM9tOEqcZG238BdHwl4Mo7cpFQn1iZqgh6FW8jtM5ylJXbUcHnAWVXRxGUFx80wiETTMyyZEjgte1R0NUxo56IkleavHHdvcWsJd1EUJdzA0dx2otXiSNqihJKy9YO",
  ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);