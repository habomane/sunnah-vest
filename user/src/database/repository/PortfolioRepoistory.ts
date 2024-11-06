import { Client } from "@libsql/client/.";
import { Portfolio } from "../models";
import { tursoDB } from "../connection";

export class PortfolioRepoistory {
    db: Client;

    constructor() { this.db = tursoDB; }

    getPortfolioFromKey = async (portfolioKey: number) : Promise<Portfolio> => {
        try {
            return new Portfolio(portfolioKey);
        }
        catch(error) {
            console.log(error)
            return new Portfolio(portfolioKey);
        }

    }

    put = async (portfolio: Portfolio) : Promise<Portfolio> => {
        // implement here 
        return portfolio;
    }

    patch = async (portfolioKey: number, portfolio: Portfolio) : Promise<Portfolio> => {
        // Implement here 

        return portfolio;
    }

    delete = async (portfolioKey: number) : Promise<void> => {
        // implement here 
    }

}