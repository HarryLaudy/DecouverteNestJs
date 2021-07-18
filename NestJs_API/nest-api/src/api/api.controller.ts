import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {

    constructor(private readonly apiService: ApiService) {}

    @Get('postal')
    async DatasbyPostalCode(
        @Query('Code_postal', ParseIntPipe) tabParams
    ) {
        return await this.apiService.findDatasbyPostalCode(tabParams);
    }

    @Get('type')
    async DatasbyTypeOfSchools(
        @Query('Type_etablissement') tabParams
    ) {
        return await this.apiService.findDatasbyTypeOfSchools(tabParams);
    }

    @Get('academy')
    async DatasbyAcademy(
        @Query('Libelle_region') tabParams
    ) {
        return await this.apiService.findDatasbyAcademy(tabParams);
    }

    @Get('identifier')
    async DatasbyIdentifier(
        @Query('Identifiant_de_l_etablissement') tabParams
    ) {
        return await this.apiService.findDatasbyIdentifier(tabParams);
    }

    @Get()
    get_datas(
    ) {
        return this.apiService.getDatas()

    }

    @Get('id/:id')
    async get_datas_by_id(
        @Param('id') id
        ) {
        console.log('get datas from an id');
        const datas = await this.apiService.getOneData(id);
        if (datas)
            return datas;
        else
            return 'Not found';
    }
}
