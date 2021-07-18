import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { annuaire } from './api.entity';

@Injectable()
export class ApiService {

    constructor(
        @InjectRepository(annuaire)
        private readonly apirepository: Repository<annuaire>
    ) {}

    async getDatas() {
        const datas = await this.apirepository.find();
        if (datas)
            return(datas);
        else
            return 'Not found';
    }

    //Find by ID
    async getOneData(dataId: number) {
        const datas = this.apirepository.findOne(dataId);
        if (datas)
            return datas;
        else
            return 'Not Found';
    }

    async findDatasbyPostalCode(tabParams: string) {
        const condition = "annuaire.Code_postal = " + tabParams;
        const qb = this.apirepository.createQueryBuilder("annuaire");
        qb.select("annuaire.Identifiant_de_l_etablissement, annuaire.Nom_etablissement, annuaire.id")
        .where(condition)
        .groupBy("annuaire.id");
        return await qb.getRawMany();
    }

    async findDatasbyTypeOfSchools(tabParams: string) {
        const condition = "annuaire.Type_etablissement = \"" + tabParams + "\"";
        const qb = this.apirepository.createQueryBuilder("annuaire");
        qb.select("annuaire.Identifiant_de_l_etablissement, annuaire.Nom_etablissement, annuaire.id")
        .where(condition)
        .groupBy("annuaire.id");
        return await qb.getRawMany();
    }

    async findDatasbyAcademy(tabParams: string) {
        const condition = "annuaire.Libelle_region = \"" + tabParams + "\"";
        const qb = this.apirepository.createQueryBuilder("annuaire");
        qb.select("annuaire.Identifiant_de_l_etablissement, annuaire.Nom_etablissement, annuaire.id")
        .where(condition)
        .groupBy("annuaire.id");
        return await qb.getRawMany();
    }

    async findDatasbyIdentifier(tabParams: string) {
        const condition = "annuaire.Identifiant_de_l_etablissement = \"" + tabParams + "\"";
        const qb = this.apirepository.createQueryBuilder("annuaire");
        qb.select("*")
        .where(condition)
        .groupBy("annuaire.id");
        return await qb.getRawMany();
    }
}