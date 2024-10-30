import { PortfolioRepoistory, Portfolio } from "../database";

export class PortfolioServicee {
    portfolioRepository: PortfolioRepoistory

    constructor() {
        this.portfolioRepository = new PortfolioRepoistory();
    }

    async getPortfolio(portfolioKey: number): Promise<Portfolio> {
        return this.portfolioRepository.getPortfolioFromKey(portfolioKey);
    }

    async put(portfolio: Portfolio) : Promise<Portfolio> {
        return await this.portfolioRepository.put(portfolio);
    }

    async delete(portfolioKey: number): Promise<void> {
        await this.portfolioRepository.delete(portfolioKey);

    }

    async update(portfolioKey: number, portfolio: Portfolio): Promise<Portfolio> {
        return await this.portfolioRepository.patch(portfolioKey, portfolio);
    }

}