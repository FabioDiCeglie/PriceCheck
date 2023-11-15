export const isValidAmazonProductURL = (url: string): boolean => {
    try {
      const parsedURL = new URL(url);
      const hostname = parsedURL.hostname;
  
      if (
        hostname.includes('amazon.com') ||
        hostname.includes('amazon.') ||
        hostname.endsWith('amazon')
      ) {
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  };



export const extractPrice = (...elements: any) => {
    for (const element of elements){
        const priceText = element.text().trim();

        if(priceText) return priceText.replace(/[^0-9.]/g, '');
    }
}