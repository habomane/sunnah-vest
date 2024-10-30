import { Client } from "@libsql/client/.";
import { Portfolio } from "../models";
import { tursoDB } from "../connection";

export class PortfolioRepoistory {
    db: Client;

    constructor() { this.db = tursoDB; }

    async getPortfolioFromKey(portfolioKey: number) : Promise<Portfolio> {
        try {
            return undefined;
        }
        catch(error) {
            console.log(error)
            return undefined;
        }

    }

    async put(portfolio: Portfolio) : Promise<Portfolio> {
        // implement here 
    }

    async patch(portfolioKey: number, portfolio: Portfolio) : Promise<Portfolio> {
        // Implement here 
    }

    async delete(portfolioKey: number) : Promise<void> {
        // implement here 
    }

}