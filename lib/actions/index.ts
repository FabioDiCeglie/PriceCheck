'use server';

import { connectToDB } from "../mongoose";
import { scrapeAmazonProduct } from "../scraper";
import Product from "../models/product.model";

export const scrapeAndStoreProduct = async (productUrl: string) => {
    if(!productUrl) return;

    try{
        connectToDB();

        const scrapedProduct = await scrapeAmazonProduct(productUrl);

        if(!scrapedProduct) return;

        let product = scrapedProduct;

        const existingProduct = await Product.findOne({ url: scrapedProduct.url });

    }catch(error: any){
        throw new Error(`Failed to create/update product: ${error.message}`)
    }
}