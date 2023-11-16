'use server';

import { connectToDB } from "../mongoose";
import { scrapeAmazonProduct } from "../scraper";

export const scrapeAndStoreProduct = async (productUrl: string) => {
    if(!productUrl) return;

    try{
        connectToDB();

        const scrapedProduct = await scrapeAmazonProduct(productUrl);

        if(!scrapedProduct) return;

        const product = {}
    }catch(error: any){
        throw new Error(`Failed to create/update product: ${error.message}`)
    }
}