import { Client } from "@libsql/client/.";
import { Portfolio } from "../models";
import { tursoDB } from "../connection";

export class PortfolioRepoistory {
    db: Client;

    constructor() { this.db = tursoDB; }

    async getPortfolioFromKey(portfolioKey: number) : Promise<Portfolio> {
        try {
            return new Portfolio(portfolioKey);
        }
        catch(error) {
            console.log(error)
            return new Portfolio(portfolioKey);
        }

    }

    async put(portfolio: Portfolio) : Promise<Portfolio> {
        // implement here 
        return portfolio;
    }

    async patch(portfolioKey: number, portfolio: Portfolio) : Promise<Portfolio> {
        // Implement here 

        return portfolio;
    }

    async delete(portfolioKey: number) : Promise<void> {
        // implement here 
    }

}