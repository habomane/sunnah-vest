import { PortfolioRepoistory, Portfolio } from "../database";

export class PortfolioServicee {
    portfolioRepository: PortfolioRepoistory

    constructor() {
        this.portfolioRepository = new PortfolioRepoistory();
    }

    getPortfolio = async (portfolioKey: number): Promise<Portfolio> => {
        return this.portfolioRepository.getPortfolioFromKey(portfolioKey);
    }

    put = async (portfolio: Portfolio) : Promise<Portfolio> => {
        return await this.portfolioRepository.put(portfolio);
    }

    delete = async (portfolioKey: number): Promise<void> => {
        await this.portfolioRepository.delete(portfolioKey);

    }

    update = async (portfolioKey: number, portfolio: Portfolio): Promise<Portfolio> => {
        return await this.portfolioRepository.patch(portfolioKey, portfolio);
    }

}