import {Controller, Get, HttpException, UseGuards} from '@nestjs/common';

import { StockItemsApi } from '../services';
import {AuthGuard} from "../auth/auth.guard";

@Controller('stock-items')
export class StockItemsController {
    constructor(private readonly service: StockItemsApi) { }

    @Get()
    @UseGuards(AuthGuard)
    async listStockItems(): Promise<any[]> {
        try {
            return await this.service.listStockItems();
        } catch (err) {
            throw new HttpException(err, 502);
        }
    }
}
