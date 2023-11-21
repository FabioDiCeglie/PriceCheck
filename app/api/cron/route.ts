import Product from '@/lib/models/product.model';
import { connectToDB } from '@/lib/mongoose';
import { scrapeAmazonProduct } from '@/lib/scraper';
import { getAveragePrice, getHighestPrice, getLowestPrice } from '@/lib/utils';

export const GET = async () => {
  try {
    connectToDB();

    const products = await Product.find({});

    if (!products) throw new Error('No products found!');

    // 1. Scrape latest product details & update DB
    const updatedProducts = await Promise.all(
      products.map(async (currentProduct) => {
        const scrapedProduct = await scrapeAmazonProduct(currentProduct);

        if (!scrapedProduct) throw new Error('No scraped products found!');

        const updatedPriceHistory: any = [
          ...currentProduct.priceHistory,
          { price: scrapedProduct.currentPrice },
        ];

        const product = {
          ...scrapedProduct,
          priceHistory: updatedPriceHistory,
          lowestPrice: getLowestPrice(updatedPriceHistory),
          highestPrice: getHighestPrice(updatedPriceHistory),
          averagePrice: getAveragePrice(updatedPriceHistory),
        };

        const updatedProduct = await Product.findOneAndUpdate(
          { url: scrapedProduct.url },
          product,
        );

        // 2. Check each product's status and send email accordingly

        
      })
    );
  } catch (error) {
    throw new Error(`Error in GET: ${error}`);
  }
};
